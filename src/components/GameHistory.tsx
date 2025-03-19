import React, { useEffect, useState } from 'react';
import { getUserGameHistory, deleteGameRecord } from '../services/gameService';
import { GameRecord } from '../types/game';

interface GameHistoryProps {
  userId: string;
}

const GameHistory: React.FC<GameHistoryProps> = ({ userId }) => {
  const [records, setRecords] = useState<GameRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const history = await getUserGameHistory(userId);
      setRecords(history);
      setError(null);
    } catch (err) {
      setError('Failed to load game history');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (recordId: string) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      const success = await deleteGameRecord(recordId, userId);
      if (success) {
        setRecords(records.filter(record => record.id !== recordId));
      } else {
        setError('Failed to delete record');
      }
    }
  };

  useEffect(() => {
    if (userId) {
      fetchHistory();
    }
  }, [userId]);

  if (loading) {
    return <div className="text-center p-4">Loading history...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  if (records.length === 0) {
    return <div className="text-center p-4">No game records found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Game History</h2>
        <button
          onClick={fetchHistory}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>
      <div className="space-y-4">
        {records.map((record) => (
          <div
            key={record.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <div className="font-medium">Score: {record.score}</div>
              <div className="text-sm text-gray-600">
                Time: {record.time}s | Moves: {record.moves}
              </div>
              <div className="text-xs text-gray-500">
                {record.date.toLocaleString()}
              </div>
            </div>
            <button
              onClick={() => handleDelete(record.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameHistory; 