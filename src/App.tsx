import React from 'react';
import GameBoard from './components/GameBoard';
import GameStats from './components/GameStats';
import Header from './components/Header';
import Footer from './components/Footer';
import { useGameLogic } from './hooks/useGameLogic';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [
    { moves, isGameRunning, gameTime, cards },
    { handleMove, handleMatch, handleGameComplete, handleStartGame, setGameTime, handleCardClick }
  ] = useGameLogic();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0f1729] to-black'
        : 'bg-gray-100'
    }`}>
      <div className="container mx-auto px-4 py-8">
        <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        
        <GameStats 
          isDarkMode={isDarkMode}
          isGameRunning={isGameRunning}
          moves={moves}
          onTimeUpdate={setGameTime}
        />

        <div className={`rounded-xl shadow-lg p-6 mb-8 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
            : 'bg-white'
        }`}>
          <GameBoard
            isDarkMode={isDarkMode}
            cards={cards}
            onCardClick={handleCardClick}
            onMove={handleMove}
            onMatch={handleMatch}
            onGameComplete={handleGameComplete}
          />
        </div>

        <Footer 
          isDarkMode={isDarkMode}
          isGameRunning={isGameRunning}
          onStartGame={handleStartGame}
        />
      </div>
    </div>
  );
}

export default App;
