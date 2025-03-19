import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs,
  Timestamp,
  doc,
  getDoc,
  deleteDoc
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
    const record: Omit<GameRecord, 'id'> = {
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
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        date: data.date.toDate()
      };
    }) as GameRecord[];
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

export const getUserGameHistory = async (userId: string): Promise<GameRecord[]> => {
  try {
    // 先只按 userId 查询，获取到数据后在内存中排序
    const q = query(
      collection(db, COLLECTION_NAME),
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    const records = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        date: data.date.toDate()
      };
    }) as GameRecord[];

    // 在内存中排序
    return records.sort((a, b) => b.date.getTime() - a.date.getTime());
  } catch (error) {
    console.error('Error fetching game history:', error);
    return [];
  }
};

export const deleteGameRecord = async (recordId: string, userId: string) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, recordId);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      throw new Error('Record not found');
    }
    
    // 确保只能删除自己的记录
    if (docSnap.data().userId !== userId) {
      throw new Error('Unauthorized to delete this record');
    }
    
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting game record:', error);
    return false;
  }
}; 