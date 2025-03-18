import React from 'react';
import { User } from 'firebase/auth';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  user: User | null;
  onSignIn: () => void;
  onSignOut: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isDarkMode, 
  onToggleDarkMode, 
  user, 
  onSignIn, 
  onSignOut 
}) => {
  return (
    <header className="text-center mb-8 relative">
      <div className="absolute right-4 top-4 flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-2">
            <span className={`text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {user.email?.split('@')[0]}
            </span>
            <button
              onClick={onSignOut}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                isDarkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={onSignIn}
            className={`px-3 py-1 rounded-lg text-sm transition-colors ${
              isDarkMode 
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Sign in with Google
          </button>
        )}
        <button
          onClick={onToggleDarkMode}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode 
              ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
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