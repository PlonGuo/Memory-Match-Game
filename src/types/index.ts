// Card Type
export interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

// Game State Type
export interface GameState {
  cards: Card[];
  moves: number;
  startTime: number | null;
  endTime: number | null;
  isGameComplete: boolean;
}

// Game History Type
export interface GameHistory {
  id: string;
  date: Date;
  duration: number;
  moves: number;
}

// Leaderboard Entry Type
export interface LeaderboardEntry {
  id: string;
  playerName: string;
  duration: number;
  moves: number;
  date: Date;
} 