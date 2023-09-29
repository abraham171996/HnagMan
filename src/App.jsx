import React, { useEffect, useState } from 'react';
import Init from './components/Init';
import Letter from './components/Letter';
import Hint from './components/Hint';
import Lost from './components/Lost';
import { wordList } from './mock/wordList';
import Level from './components/Level'

const App = () => {
  const [gameState, setGameState] = useState({
    word: '',
    hint: '',
    incorrectGuess: 0,
    showLevel: true,
    currentWordState: '',
    selectedLevel: '',
    guessedLetters: [],
    isGameOver: false,
    lost: false,
  });

  useEffect(() => {
    selectRandomWord();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.selectedLevel]);

  useEffect(() => {
    if (gameState.word === gameState.currentWordState.replace(/ /g, '')) {
      setGameState({ ...gameState, isGameOver: true, incorrectGuess: 0 });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.word, gameState.currentWordState]);

  const selectRandomWord = () => {
    let tryCount;

    if (gameState.selectedLevel === 'easy') {
      tryCount = 6;
    } else if (gameState.selectedLevel === 'medium') {
      tryCount = 5;
    } else if (gameState.selectedLevel === 'hard') {
      // eslint-disable-next-line no-unused-vars
      tryCount = 4;
    }

    const randomIndex = Math.floor(Math.random() * wordList.length);
    const selectedWord = wordList[randomIndex];
    setGameState({
      ...gameState,
      word: selectedWord.word,
      hint: selectedWord.hint,
      currentWordState: '_ '.repeat(selectedWord.word.length),
      incorrectGuess: 0,
      isGameOver: false,
    });
  };

  const handleGuess = (letter) => {
    if (gameState.guessedLetters.includes(letter) || gameState.isGameOver) {
      return;
    }
  
    const guessedLetters = [...gameState.guessedLetters, letter];
  
    let incorrectGuess = gameState.incorrectGuess;
    if (!gameState.word.includes(letter)) {
      incorrectGuess += 1;
    }
  
    updateCurrentWordState(letter, guessedLetters, incorrectGuess);
  };

  const updateCurrentWordState = (letter, guessedLetters, incorrectGuess) => {
    const newWordState = gameState.word
      .split('')
      .map((char, index) => {
        if (char === letter) {
          return letter;
        } else {
          return gameState.currentWordState[index * 2];
        }
      })
      .join(' ');
  
    const isGameOver = newWordState.replace(/ /g, '') === gameState.word;
  
    setGameState({
      ...gameState,
      currentWordState: newWordState,
      guessedLetters,
      incorrectGuess,
      isGameOver,
    });
  
    checkGameOver(isGameOver, incorrectGuess);
  };

  const checkGameOver = () => {
    if (
      (gameState.selectedLevel === 'easy' &&
        gameState.incorrectGuess === 6) ||
      (gameState.selectedLevel === 'medium' &&
        gameState.incorrectGuess  === 5) ||
      (gameState.selectedLevel === 'hard' &&
        gameState.incorrectGuess === 4)
    ) {
      setGameState({ ...gameState, lost: true });
    }
  };

  function restartGame() {
    setGameState({
      ...gameState,
      showLevel: true,
      currentWordState: '',
      word: '',
      hint: '',
      incorrectGuess: 0,
      guessedLetters: [],
      isGameOver: false,
      lost: false,
      selectedLevel: '',
    });
  }

  return (
    <>
      {gameState.showLevel ? (
        <Level
          selectedLevel={gameState.selectedLevel}
          onSelectLevel={(level) => {
            setGameState({
              ...gameState,
              showLevel: false,
              selectedLevel: level,
            });
          }}
        />
      ) : (
        <>
          <Init
            incorrectGuess={gameState.incorrectGuess}
            lost={gameState.lost}
          />
          {gameState.lost ? (
            <Lost restartGame={restartGame} word={gameState.word} />
          ) : (
            <>
              <Letter
                handleGuess={handleGuess}
                guessedLetters={gameState.guessedLetters}
                isGameOver={gameState.isGameOver}
              />
              <Hint
                isGameOver={gameState.isGameOver}
                word={gameState.word}
                hint={gameState.hint}
                restartGame={restartGame}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default App;