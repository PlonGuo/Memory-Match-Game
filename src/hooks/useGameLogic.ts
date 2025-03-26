import { useState, useCallback, useEffect, useRef } from 'react';

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
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [gameTime, setGameTime] = useState(0);
  const [cards, setCards] = useState<Card[]>([]);
  const [firstCard, setFirstCard] = useState<Card | null>(null);
  const [secondCard, setSecondCard] = useState<Card | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const gameCompletedRef = useRef(false);
  const [moves, setMoves] = useState(0);

  // Initialize all game data
  const initializeGame = useCallback(() => {
    // Initialize cards
    const duplicatedValues = [...cardValues, ...cardValues];
    const shuffledCards = duplicatedValues
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }));

    // Reset all game states
    setCards(shuffledCards);
    setFirstCard(null);
    setSecondCard(null);
    setIsChecking(false);
    gameCompletedRef.current = false;
    setMoves(0);
    setGameTime(0);
  }, []);

  // Initial game setup when component mounts
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // Reset game - stop current game and initialize new game data
  const resetGame = useCallback(() => {
    setIsGameRunning(false);
    initializeGame();
  }, [initializeGame]);

  const handleGameComplete = useCallback((finalMoves: number) => {
    if (!isGameRunning || gameCompletedRef.current) return;
    gameCompletedRef.current = true;
    setIsGameRunning(false);
    alert(`Congratulations! You completed the game in ${gameTime} seconds with ${finalMoves} moves!`);
  }, [isGameRunning, gameTime]);

  // Check if two cards match
  const checkForMatch = useCallback(() => {
    if (!firstCard || !secondCard) return;

    setIsChecking(true);
    setMoves(currentMoves => {
      const newMoves = currentMoves + 1;
      
      const isMatch = firstCard.value === secondCard.value;
      
      if (isMatch) {
        // Cards match - keep them flipped and mark as matched
        setCards(prevCards => {
          const updatedCards = prevCards.map(card => 
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isMatched: true, isFlipped: true }
              : card
          );
          
          // Check if the game is complete after updating the card status
          if (updatedCards.every(card => card.isMatched) && !gameCompletedRef.current) {
            // Use the new moves value for game completion
            handleGameComplete(newMoves);
          }
          
          return updatedCards;
        });

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
      
      return newMoves;
    });
  }, [firstCard, secondCard, handleGameComplete]);

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
      cards[clickedCard.id].isFlipped
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

  // Start a new game
  const handleStartGame = useCallback(() => {
    if (isGameRunning) {
      resetGame();  // If game is running, reset it first
    } else {
      initializeGame();  // Initialize new game data
      setIsGameRunning(true);  // Then start the game
    }
  }, [isGameRunning, resetGame, initializeGame]);

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