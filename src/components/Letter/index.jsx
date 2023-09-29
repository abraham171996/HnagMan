import React from 'react'
import { alphabet } from '../../mock/alphabet'
const Letter = ({handleGuess,guessedLetters,isGameOver}) => {
  return (
    <div>
        <div className="letter-selection">
            {alphabet.map((letter,index) => (
              <button
                key={`${letter}_${index}`}
                onClick={() => handleGuess(letter)}
                disabled={guessedLetters.includes(letter) || isGameOver}
              >
                {letter}
              </button>
            ))}
          </div>
    </div>
  )
}

export default Letter