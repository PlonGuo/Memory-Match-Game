import React from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <header className="text-center mb-8 relative">
      <button
        onClick={onToggleDarkMode}
        className={`absolute right-4 top-4 p-2 rounded-lg transition-colors ${
          isDarkMode 
            ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        }`}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <h1 className={`text-4xl font-bold mb-4 transition-colors ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        Memory Match Game
      </h1>
      <p className={`transition-colors ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Match the pairs of cards in the least number of moves!
      </p>
    </header>
  );
};

export default Header; 