import React, { useEffect, useState } from 'react';
import { UserStats as UserStatsType } from '../types/game';
import { getUserStats } from '../services/gameService';

interface UserStatsProps {
  isDarkMode: boolean;
  userId: string;
}

const UserStats: React.FC<UserStatsProps> = ({ isDarkMode, userId }) => {
  const [stats, setStats] = useState<UserStatsType>({
    bestScore: 0,
    bestTime: 0,
    bestMoves: 0,
    totalGames: 0
  });
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const userStats = await getUserStats(userId);
      setStats(userStats);
    } catch (error) {
      console.error('Error fetching user stats:', error);
      // If something goes wrong, keep it current
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchStats();
    }
  }, [userId]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className={`p-4 rounded-lg shadow-md ${
        isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
      }`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Best Score</h2>
          <div className="w-5 h-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
        </div>
        <div className={`p-3 rounded ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <div className="h-24 flex items-center justify-center">
            <span className="text-gray-500">Loading stats...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-4 rounded-lg shadow-md ${
      isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
    }`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Best Score</h2>
        <button
          onClick={fetchStats}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode
              ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
          title="Refresh stats"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      <div className="space-y-2">
        <div className={`p-3 rounded ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
        }`}>
          <div className="flex justify-between items-center mb-2">
            <span>Best Score:</span>
            <span className={`font-bold text-lg ${stats.bestScore > 0 ? 'text-blue-500' : ''}`}>
              {stats.bestScore} pts
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Best Time:</span>
            <span className={`font-mono ${stats.bestTime > 0 ? 'text-blue-500' : ''}`}>
              {formatTime(stats.bestTime)}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Best Moves:</span>
            <span className={stats.bestMoves > 0 ? 'text-blue-500' : ''}>
              {stats.bestMoves} moves
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>Total Games:</span>
            <span className={stats.totalGames > 0 ? 'text-blue-500' : ''}>
              {stats.totalGames}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats; 