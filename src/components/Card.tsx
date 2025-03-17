import React from 'react';

export interface CardProps {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
  isDarkMode: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  value,
  isFlipped,
  isMatched,
  isDarkMode,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        w-full aspect-square cursor-pointer 
        flex items-center justify-center
        rounded-xl text-4xl
        transition-all duration-300
        ${isMatched ? 'cursor-default opacity-50' : 'hover:scale-105'}
        ${isDarkMode 
          ? isFlipped ? 'bg-gray-600' : 'bg-gray-700 text-gray-400'
          : isFlipped ? 'bg-white' : 'bg-gray-200 text-gray-600'
        }
      `}
    >
      {isFlipped ? value : '❓'}
    </div>
  );
};

export default Card;