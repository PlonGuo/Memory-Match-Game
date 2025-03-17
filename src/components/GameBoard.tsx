import React, { useState } from 'react';
import Card from './Card';

// Array of card values
const cardValues = ['🌟', '🎮', '🎨', '🎭', '🎪', '🎯', '🎲', '🎸'];

interface GameBoardProps {
  isDarkMode: boolean;
  cards: Array<{
    id: number;
    value: string;
    isFlipped: boolean;
    isMatched: boolean;
  }>;
  onCardClick: (card: { id: number; value: string; isFlipped: boolean; isMatched: boolean; }) => void;
  onMove: () => void;
  onMatch: () => void;
  onGameComplete: (moves: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ 
  isDarkMode, 
  cards, 
  onCardClick, 
  onMove, 
  onMatch, 
  onGameComplete 
}) => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isLocked, setIsLocked] = useState(false);

  const handleCardClick = (id: number) => {
    if (
      isLocked ||
      flippedCards.includes(id) ||
      cards[id].isMatched ||
      flippedCards.length === 2
    ) {
      return;
    }

    // create a new card state
    const clickedCard = {
      ...cards[id],
      isFlipped: true
    };
    
    // notify the parent component that the card state has changed
    onCardClick(clickedCard);
    
    // update the list of flipped cards
    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);
    onMove();

    if (newFlippedCards.length === 2) {
      setIsLocked(true);
      checkMatch(newFlippedCards[0], newFlippedCards[1]);
    }
  };

  const checkMatch = (firstId: number, secondId: number) => {
    setTimeout(() => {
      if (cards[firstId].value === cards[secondId].value) {
        // matching succeeds
        onCardClick({ ...cards[firstId], isMatched: true, isFlipped: true });
        onCardClick({ ...cards[secondId], isMatched: true, isFlipped: true });
        onMatch();
        
        const isGameComplete = cards.every(card => 
          card.isMatched || card.id === firstId || card.id === secondId
        );
        if (isGameComplete) {
          onGameComplete(0);
        }
      } else {
        // matching fails, flip back
        onCardClick({ ...cards[firstId], isFlipped: false });
        onCardClick({ ...cards[secondId], isFlipped: false });
      }
      
      setFlippedCards([]);
      setIsLocked(false);
    }, 1000);
  };

  return (
    <div className={`grid grid-cols-4 gap-4 p-4 max-w-3xl mx-auto md:gap-6 md:p-6 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          value={card.value}
          isFlipped={card.isFlipped}
          isMatched={card.isMatched}
          isDarkMode={isDarkMode}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard; 