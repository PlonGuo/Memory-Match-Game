import React from 'react';

interface FooterProps {
  isDarkMode: boolean;
  isGameRunning: boolean;
  onStartGame: () => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, isGameRunning, onStartGame }) => {
  return (
    <div className="text-center py-6">
      <button 
        className={`px-6 py-3 font-semibold rounded-lg shadow-md transition-colors ${
          isDarkMode
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_15px_rgba(59,130,246,0.5)]'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
        onClick={onStartGame}
      >
        {isGameRunning ? 'Restart Game' : 'Start Game'}
      </button>
      <p className={`mt-4 text-sm transition-colors ${
        isDarkMode ? 'text-gray-400' : 'text-gray-500'
      }`}>
        © 2024 Memory Match Game. All rights reserved.
      </p>
    </div>
  );
};

export default Footer; 