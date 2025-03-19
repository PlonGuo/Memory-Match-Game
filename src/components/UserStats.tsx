import React, { useEffect, useState } from 'react';
import { UserStats as UserStatsType, GameRecord } from '../types/game';
import { getUserStats, getUserGameHistory, deleteGameRecord } from '../services/gameService';

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
  const [records, setRecords] = useState<GameRecord[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState<string | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const userStats = await getUserStats(userId);
      setStats(userStats);
    } catch (error) {
      console.error('Error fetching user stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchHistory = async () => {
    setHistoryLoading(true);
    setHistoryError(null);
    try {
      const history = await getUserGameHistory(userId);
      setRecords(history);
    } catch (error) {
      console.error('Error fetching game history:', error);
      setHistoryError('Failed to load game history. Please try again later.');
      if (error instanceof Error) {
        if (error.message.includes('requires an index')) {
          setHistoryError('Database index is being created. Please wait a few minutes and try again.');
        }
      }
    } finally {
      setHistoryLoading(false);
    }
  };

  const handleDelete = async (recordId: string) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      const success = await deleteGameRecord(recordId, userId);
      if (success) {
        setRecords(records.filter(record => record.id !== recordId));
        fetchStats();
      }
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

  const RecordsModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${showModal ? '' : 'hidden'}`}>
      <div className={`relative w-full max-w-2xl p-6 mx-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Your Game Records
        </h3>
        <div className="max-h-96 overflow-y-auto">
          {historyLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="w-6 h-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
              <span className="ml-2">Loading records...</span>
            </div>
          ) : historyError ? (
            <div className="text-center text-red-500 py-4">
              {historyError}
            </div>
          ) : records.length === 0 ? (
            <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No records found
            </p>
          ) : (
            <div className="space-y-3">
              {records.map((record) => (
                <div
                  key={record.id}
                  className={`flex justify-between items-center p-3 rounded ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  <div>
                    <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Score: {record.score}
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Time: {record.time}s | Moves: {record.moves}
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {record.date.toLocaleString()}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(record.id)}
                    className="text-red-500 hover:text-red-700 text-xl"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

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
    <div className={`rounded-xl shadow-lg p-6 ${
      isDarkMode 
        ? 'bg-gray-800 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
        : 'bg-white'
    }`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Your Best Score
        </h2>
        <div className="flex items-center space-x-2">
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
          <button
            onClick={() => {
              fetchHistory();
              setShowModal(true);
            }}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Records
          </button>
        </div>
      </div>

      {loading ? (
        <div className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Loading...
        </div>
      ) : (
        <div className="space-y-2">
          <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Best Score: {stats.bestScore}
          </div>
          <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Best Time: {formatTime(stats.bestTime)}
          </div>
          <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Best Moves: {stats.bestMoves}
          </div>
          <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Total Games: {stats.totalGames}
          </div>
        </div>
      )}

      <RecordsModal />
    </div>
  );
};

export default UserStats; 