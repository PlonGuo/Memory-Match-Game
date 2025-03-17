import React, { useState, useEffect } from 'react';

interface TimerProps {
  isDarkMode: boolean;
  isRunning: boolean;
  onTimeUpdate: (time: number) => void;
}

const Timer: React.FC<TimerProps> = ({ isDarkMode, isRunning, onTimeUpdate }) => {
  const [time, setTime] = useState(0);

  // when the game state changes, reset the time
  useEffect(() => {
    if (!isRunning) {
      setTime(0);
      onTimeUpdate(0);
    }
  }, [isRunning, onTimeUpdate]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  // use a separate effect to handle time updates
  useEffect(() => {
    if (isRunning) {
      onTimeUpdate(time);
    }
  }, [time, isRunning, onTimeUpdate]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`flex items-center justify-center gap-2 p-3 rounded-lg shadow-sm transition-colors ${
      isDarkMode 
        ? 'bg-gray-700 shadow-[0_0_10px_rgba(255,255,255,0.1)]'
        : 'bg-gray-100'
    }`}>
      <span className={`font-semibold transition-colors ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Time:
      </span>
      <span className={`font-mono text-lg transition-colors ${
        isDarkMode ? 'text-blue-400' : 'text-blue-500'
      }`}>
        {formatTime(time)}
      </span>
    </div>
  );
};

export default Timer; 