import React from 'react';

interface MoveCounterProps {
  isDarkMode: boolean;
  moves: number;
}

const MoveCounter: React.FC<MoveCounterProps> = ({ isDarkMode, moves }) => {
  return (
    <div className={`flex items-center justify-center gap-2 p-3 rounded-lg shadow-sm transition-colors ${
      isDarkMode 
        ? 'bg-gray-700 shadow-[0_0_10px_rgba(255,255,255,0.1)]'
        : 'bg-gray-100'
    }`}>
      <span className={`font-semibold transition-colors ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Moves:
      </span>
      <span className={`font-mono text-lg transition-colors ${
        isDarkMode ? 'text-blue-400' : 'text-blue-500'
      }`}>
        {moves}
      </span>
    </div>
  );
};

export default MoveCounter; 