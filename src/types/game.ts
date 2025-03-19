export interface GameRecord {
  id: string;
  userId: string;
  userEmail: string;
  score: number;
  time: number;
  moves: number;
  date: Date;
}

export interface UserStats {
  bestScore: number;
  bestTime: number;
  bestMoves: number;
  totalGames: number;
}

// calculate the game score
// time weight is 70%, moves weight is 30%
export const calculateScore = (time: number, moves: number): number => {
  // the base value: assume the best time is 30 seconds, the best moves is 8
  const bestTime = 30;
  const bestMoves = 8;
  
  // calculate the time score (0-70)
  const timeScore = Math.max(0, 70 * (1 - (time - bestTime) / (120 - bestTime)));
  
  // calculate the moves score (0-30)
  const movesScore = Math.max(0, 30 * (1 - (moves - bestMoves) / (24 - bestMoves)));
  
  // total score (0-100)
  return Math.round(timeScore + movesScore);
}; 