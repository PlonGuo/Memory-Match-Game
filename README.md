# Memory Matching Game

## 🎮 About The Project
A fun and interactive memory card matching game built with React and Firebase. This project showcases modern web development practices including:
- React Hooks for state management
- Firebase Authentication for user management
- Firestore for data persistence
- Dark/Light theme support
- Real-time leaderboard
- Personal best score tracking
- CRUD - the records will be created and updated automatically, user can view and delete their records through 'View Records' button.

In this game, players can select two cards at a time. The goal is to find all matched pairs.  
The game tracks both **Time** and **Moves**, which are recorded in Firestore to maintain high scores and statistics.

## 🎥 Project Demo
**[Watch Demo on YouTube](https://youtu.be/yOaV5KTdSDc)**
**[Demonstration of FP in this project on YouTube](https://www.youtube.com/watch?v=I_8ycIOyqqc)**
For the second video, please turn your volume up! I forgot to adjust to the correct microphone, sorry about that!

## 🌐 Live Demo
**[Play the Game Now](https://memory-matching-game-145f8.web.app/)**

## ✨ Features
- 🎯 Memory matching gameplay
- 🌓 Dark/Light theme toggle
- 👤 Google Authentication
- 📊 Global leaderboard
- 🏆 Personal best scores
- ⏱️ Time and moves tracking
- 📱 Responsive design

## 🛠️ Built With
- React
- TypeScript
- Firebase (Authentication & Firestore)
- Tailwind CSS

## AI Usage (ChatGPT 4o)
### Prompt: Could you write a function to shuffle the 16 cards for me?
- It uses sort() and Math.random. I tried the code it gave me, and it works fine, so I just use it as my shuffle algorithm.

### Prompt: Could you give me en equation to calculate the score of a game based on the Time and Moves of the player?
- It suggests that the time weight is higher than moves weight which makes sense to me, I also feel like time should have higher priority.

### Prompt: Could you teach me how to use firebase/firestore methods? Give me few examples.
- After learning from GPT, I know how to use methods like collection, addDoc, getDocs ... to interact with firestore db which is a very crucial part of this project - CRUD.

### Prompt: Could you teach me how to use firebase/auth to create a sign-in/out function using gmail?
- It lists all the instructions that I need to do, so I review both the Doc of firebase/auth and GPT to complete the sign-in/out function.


# Functional Programming and Design Patterns Analysis

## Functional Programming Principles

### 1. Pure Functions
Example from codebase:
```typescript
// In useGameLogic.ts
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
  return shuffledCards;
});
```
This is a pure function because:
- Given the same input (cardValues), it will always produce the same output structure
- It has no side effects
- It doesn't modify external state

Bad example that would break this principle:
```typescript
let globalCards = [];
const initializeGame = () => {
  globalCards = cardValues.map(/* ... */); // Modifies external state
  saveToDatabase(globalCards); // Has side effects
};
```

### 2. Immutability
Example from codebase:
```typescript
// In GameBoard.tsx
const handleCardClick = (id: number) => {
  // Create a new card state instead of mutating
  const clickedCard = {
    ...cards[id],
    isFlipped: true
  };
  onCardClick(clickedCard);
};
```
This demonstrates immutability by:
- Creating a new object instead of modifying the existing one
- Using the spread operator to maintain immutability

Bad example that would break this principle:
```typescript
const handleCardClick = (id: number) => {
  cards[id].isFlipped = true; // Direct mutation of state
  onCardClick(cards[id]);
};
```

### 3. First-class Functions
Example from codebase:
```typescript
// In GameBoard.tsx
interface GameBoardProps {
  onCardClick: (card: Card) => void;
  onMove: () => void;
  onMatch: () => void;
  onGameComplete: (moves: number) => void;
}
```
This demonstrates first-class functions by:
- Passing functions as props
- Using functions as values in interfaces

Bad example that would break this principle:
```typescript
class GameBoard {
  cardClick() { /* ... */ }
  move() { /* ... */ }
  // Tightly coupled, not passing functions as values
}
```

### 4. Higher-order Functions
Example from codebase:
```typescript
// In useGameLogic.ts
const shuffledCards = duplicatedValues
  .sort(() => Math.random() - 0.5)
  .map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false,
  }));
```
This demonstrates higher-order functions through:
- Using `map` which takes a function as an argument
- Function composition with `sort` and `map`

Bad example that would break this principle:
```typescript
const shuffleCards = () => {
  const result = [];
  for(let i = 0; i < cards.length; i++) {
    // Imperative approach instead of using higher-order functions
    if(Math.random() > 0.5) {
      result.push(cards[i]);
    }
  }
  return result;
};
```

### 5. Declarative over Imperative
Example from codebase:
```typescript
// In GameBoard.tsx
const isGameComplete = cards.every(card => card.isMatched);
```
This is declarative because:
- It describes what we want (all cards matched)
- Hides the implementation details of checking each card

Bad example (imperative approach):
```typescript
let isGameComplete = true;
for(let i = 0; i < cards.length; i++) {
  if(!cards[i].isMatched) {
    isGameComplete = false;
    break;
  }
}
```

## Array Functional Programming Methods

1. `map` for transforming data:
```typescript
const shuffledCards = duplicatedValues.map((value, index) => ({
  id: index,
  value,
  isFlipped: false,
  isMatched: false,
}));
```

2. `every` for checking conditions:
```typescript
const isGameComplete = cards.every(card => card.isMatched);
```

3. `filter` for selecting elements:
```typescript
const unMatchedCards = cards.filter(card => !card.isMatched);
```

## Design Patterns

### 1. Custom Hook Pattern (Module Pattern variant)
```typescript
// useGameLogic.ts
export const useGameLogic = (): [GameState, GameActions] => {
  // State and logic encapsulation
  const [isGameRunning, setIsGameRunning] = useState(false);
  // ... other state
  
  return [gameState, actions];
};
```
This is a good application because it:
- Encapsulates related state and behavior
- Provides a clean interface for components
- Makes the logic reusable across components

### 2. Observer Pattern (via React Props)
```typescript
interface GameBoardProps {
  onCardClick: (card: Card) => void;
  onMove: () => void;
  onMatch: () => void;
  onGameComplete: (moves: number) => void;
}
```
This is a good application because it:
- Allows loose coupling between components
- Enables components to react to state changes
- Maintains a clear flow of data

### 3. Container/Presentational Pattern
```typescript
// GameBoard.tsx (Presentational)
const GameBoard: React.FC<GameBoardProps> = ({ 
  isDarkMode, 
  cards, 
  onCardClick, 
  // ... other props
}) => {
  // Only handles rendering and user interactions
};

// useGameLogic.ts (Container)
export const useGameLogic = () => {
  // Handles business logic and state management
};
```
This is a good application because it:
- Separates concerns between UI and logic
- Makes components more reusable
- Improves testability
