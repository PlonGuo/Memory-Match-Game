import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { GameRecord, UserStats, calculateScore } from '../types/game';

const COLLECTION_NAME = 'gameRecords';

export const saveGameRecord = async (
  userId: string,
  userEmail: string,
  time: number,
  moves: number
) => {
  try {
    const score = calculateScore(time, moves);
    const record: GameRecord = {
      userId,
      userEmail,
      time,
      moves,
      score,
      date: new Date()
    };

    console.log('Saving game record:', record);

    await addDoc(collection(db, COLLECTION_NAME), {
      ...record,
      date: Timestamp.fromDate(record.date)
    });

    console.log('Game record saved successfully');
  } catch (error) {
    console.error('Error saving game record:', error);
  }
};

export const getLeaderboard = async (): Promise<GameRecord[]> => {
  try {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('score', 'desc'),
      limit(5)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date.toDate()
    })) as GameRecord[];
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
};

export const getUserStats = async (userId: string): Promise<UserStats> => {
  try {
    console.log('Fetching stats for userId:', userId);

    if (!userId) {
      console.error('Invalid userId provided');
      return {
        bestScore: 0,
        bestTime: 0,
        bestMoves: 0,
        totalGames: 0
      };
    }

    const gamesRef = collection(db, COLLECTION_NAME);
    console.log('Collection reference:', COLLECTION_NAME);

    const q = query(
      gamesRef,
      where('userId', '==', userId),
      orderBy('score', 'desc')
    );

    console.log('Executing query...');
    const querySnapshot = await getDocs(q);
    console.log('Query results size:', querySnapshot.size);
    
    if (querySnapshot.empty) {
      console.log('No records found for user:', userId);
      return {
        bestScore: 0,
        bestTime: 0,
        bestMoves: 0,
        totalGames: 0
      };
    }

    const records = querySnapshot.docs.map(doc => {
      const data = doc.data();
      console.log('Record data:', data);
      return {
        ...data,
        id: doc.id,
        date: data.date.toDate()
      };
    }) as GameRecord[];

    console.log('Processed records:', records);

    const bestGame = records[0];
    console.log('Best game:', bestGame);

    return {
      bestScore: bestGame.score,
      bestTime: bestGame.time,
      bestMoves: bestGame.moves,
      totalGames: records.length
    };
  } catch (error) {
    console.error('Error fetching user stats:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Error stack:', error.stack);
    }
    return {
      bestScore: 0,
      bestTime: 0,
      bestMoves: 0,
      totalGames: 0
    };
  }
}; 