import React, { useEffect, useState } from 'react';
import Init from './components/Init';
import Level from './components/Level';
import { wordList } from './mock/wordList';
import Letter from './components/Letter';
import Hint from './components/Hint';

const App = () => {
  const [word, setWord] = useState('');
  const [hint, setHint] = useState('');
  const [incorrectGuess, setIncorrectGuess] = useState(0);
  const [showLevel, setShowLevel] = useState(true);
  const [currentWordState, setCurrentWordState] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [lost ,setLost] = useState (false)
  let tryCount;
  const selectRandomWord = () => {
    

    if (selectedLevel === 'easy') {
      tryCount = 6;
    } else if (selectedLevel === 'medium') {
      tryCount = 5;
    } else if (selectedLevel === 'hard') {
      tryCount = 4;
    }

    const randomIndex = Math.floor(Math.random() * wordList.length);
    const selectedWord = wordList[randomIndex];
    setWord(selectedWord.word);
    setHint(selectedWord.hint);
    setCurrentWordState('_ '.repeat(selectedWord.word.length));
    setIncorrectGuess(0);
    setIsGameOver(false);
  };

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || isGameOver) {
      return;
    }
    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setIncorrectGuess(incorrectGuess + 1);
    }

    updateCurrentWordState(letter);
    checkGameOver();
  };

  const updateCurrentWordState = (letter) => {
    const newWordState = word.split('').map((char, index) => {
      if (char === letter) {
        return letter;
      } else {
        return currentWordState[index * 2];
      }
    }).join(' ');

    setCurrentWordState(newWordState);
  };

  const checkGameOver = () => {
    
    if (word === currentWordState.replace(/ /g, '')) {
      setIsGameOver(true);
      
    }
    if ((selectedLevel === "easy" && incorrectGuess === 6) ||
    (selectedLevel === "medium" && incorrectGuess === 5) ||
    (selectedLevel === "hard" && incorrectGuess === 4)) {
  setLost(true);
}
    
  };  

  useEffect(() => {
    selectRandomWord();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLevel]);

  console.log('incorrectGuess:', incorrectGuess);
console.log('tryCount:', tryCount);
console.log(selectedLevel);
  return (
    <>
      {showLevel ? (
        <Level
          selectedLevel={selectedLevel}
          onSelectLevel={(level) => {
            setShowLevel(false);
            setSelectedLevel(level);
          }}
        />
      ) : (
        <>
          <Init incorrectGuess={incorrectGuess} lost = {lost} />
          {
            lost ? (
              <p>
                Lost!
              </p>
            ):(
              <>
                    <Letter
            handleGuess={handleGuess}
            guessedLetters={guessedLetters}
            isGameOver={isGameOver}
          />
          <Hint 
            isGameOver={isGameOver} 
            word={word} 
            hint={hint}
          />
              </>
            )
          }
        </>
      )}
    </>
  );
};

export default App;


