import { useState, useCallback, useEffect } from 'react';

const cardValues = ['🌟', '🎮', '🎨', '🎭', '🎪', '🎯', '🎲', '🎸'];

interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface GameState {
  moves: number;
  isGameRunning: boolean;
  gameTime: number;
  cards: Card[];
}

interface GameActions {
  handleMove: () => void;
  handleMatch: () => void;
  handleGameComplete: (finalMoves: number) => void;
  handleStartGame: () => void;
  setGameTime: (time: number) => void;
  handleCardClick: (card: Card) => void;
}

export const useGameLogic = (): [GameState, GameActions] => {
  const [moves, setMoves] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [gameTime, setGameTime] = useState(0);
  const [cards, setCards] = useState<Card[]>([]);
  const [firstCard, setFirstCard] = useState<Card | null>(null);
  const [secondCard, setSecondCard] = useState<Card | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  // Initialize game with shuffled cards
  const initializeGame = useCallback(() => {
    const duplicatedValues = [...cardValues, ...cardValues];
    const shuffledCards = duplicatedValues
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setFirstCard(null);
    setSecondCard(null);
    setIsChecking(false);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // Reset game state
  const resetGame = () => {
    setIsGameRunning(false);
    setMoves(0);
    setGameTime(0);
    setFirstCard(null);
    setSecondCard(null);
    setIsChecking(false);
    initializeGame();
  };

  // Check if two cards match
  const checkForMatch = useCallback(() => {
    if (!firstCard || !secondCard) return;

    setIsChecking(true);
    setMoves(prev => prev + 1); // add moves only when checking for match

    const isMatch = firstCard.value === secondCard.value;
    
    if (isMatch) {
      // Cards match - keep them flipped and mark as matched
      setCards(prevCards => prevCards.map(card => 
        card.id === firstCard.id || card.id === secondCard.id
          ? { ...card, isMatched: true, isFlipped: true }
          : card
      ));

      // Check if all cards are matched
      const allMatched = cards.every(card => 
        card.isMatched || card.id === firstCard.id || card.id === secondCard.id
      );
      
      if (allMatched) {
        handleGameComplete(moves);
      }
      
      // Reset selected cards immediately for matched pairs
      setFirstCard(null);
      setSecondCard(null);
      setIsChecking(false);
    } else {
      // Cards don't match - flip them back after 1.5 seconds
      setTimeout(() => {
        setCards(prevCards => prevCards.map(card => 
          (card.id === firstCard.id || card.id === secondCard.id)
            ? { ...card, isFlipped: false }
            : card
        ));
        // Reset selected cards after flipping back
        setFirstCard(null);
        setSecondCard(null);
        setIsChecking(false);
      }, 1500);
    }
  }, [firstCard, secondCard, cards, moves]);

  // Effect to check for matches when second card is selected
  useEffect(() => {
    if (firstCard && secondCard && !isChecking) {
      checkForMatch();
    }
  }, [firstCard, secondCard, isChecking, checkForMatch]);

  // Handle card click
  const handleCardClick = (clickedCard: Card) => {
    if (
      !isGameRunning || 
      clickedCard.isMatched || 
      isChecking ||
      (firstCard && secondCard) ||
      (firstCard && clickedCard.id === firstCard.id) ||
      cards[clickedCard.id].isFlipped // Check the actual card state and not the incoming state
    ) {
      return;
    }

    // flip the clicked card Immediately
    setCards(prevCards => prevCards.map(card =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    ));

    if (!firstCard) {
      setFirstCard({...clickedCard, isFlipped: true});
    } else {
      setSecondCard({...clickedCard, isFlipped: true});
    }
  };

  const handleGameComplete = (finalMoves: number) => {
    setIsGameRunning(false);
    alert(`Congratulations! You completed the game in ${gameTime} seconds with ${finalMoves} moves!`);
  };

  const handleStartGame = () => {
    if (isGameRunning) {
      resetGame();
    } else {
      setMoves(0);
      setGameTime(0);
      setIsGameRunning(true);
      initializeGame();
    }
  };

  return [
    { moves, isGameRunning, gameTime, cards },
    { 
      handleMove: () => {}, 
      handleMatch: () => {},
      handleGameComplete, 
      handleStartGame, 
      setGameTime,
      handleCardClick
    }
  ];
}; 