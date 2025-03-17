import React from 'react';
import Timer from './Timer';
import MoveCounter from './MoveCounter';

interface GameStatsProps {
  isDarkMode: boolean;
  isGameRunning: boolean;
  moves: number;
  onTimeUpdate: (time: number) => void;
}

const GameStats: React.FC<GameStatsProps> = ({ isDarkMode, isGameRunning, moves, onTimeUpdate }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <Timer isDarkMode={isDarkMode} isRunning={isGameRunning} onTimeUpdate={onTimeUpdate} />
      <MoveCounter isDarkMode={isDarkMode} moves={moves} />
    </div>
  );
};

export default GameStats; 