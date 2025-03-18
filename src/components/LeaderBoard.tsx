import React, { useEffect, useState } from 'react';
import { GameRecord } from '../types/game';
import { getLeaderboard } from '../services/gameService';

interface LeaderBoardProps {
  isDarkMode: boolean;
}

const LeaderBoard: React.FC<LeaderBoardProps> = ({ isDarkMode }) => {
  const [leaderboard, setLeaderboard] = useState<GameRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaderboard = async () => {
    setLoading(true);
    const data = await getLeaderboard();
    setLeaderboard(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

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
        <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={`p-4 rounded-lg shadow-md ${
      isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
    }`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Leaderboard</h2>
        <button
          onClick={fetchLeaderboard}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode
              ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
          title="Refresh leaderboard"
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
      {leaderboard.length === 0 ? (
        <p>No records yet</p>
      ) : (
        <div className="space-y-2">
          {leaderboard.map((record, index) => (
            <div 
              key={record.id} 
              className={`flex items-center justify-between p-2 rounded ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`font-bold ${
                  index === 0 ? 'text-yellow-500' :
                  index === 1 ? 'text-gray-400' :
                  index === 2 ? 'text-amber-600' :
                  ''
                }`}>
                  #{index + 1}
                </span>
                <span className="truncate max-w-[150px]">
                  {record.userEmail.split('@')[0]}
                </span>
              </div>
              <div className="flex gap-4">
                <span>{formatTime(record.time)}</span>
                <span>{record.moves} moves</span>
                <span className="font-bold">{record.score} pts</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeaderBoard; 