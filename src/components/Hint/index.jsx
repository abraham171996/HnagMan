import React from 'react'
import styles from './hint.module.scss'
const Hint = ({isGameOver,word,hint}) => {
  return (
    
        <div className={styles.Hint}>
            {isGameOver ? (
              <p>Congratulations! You guessed the word: {word}</p>
            ) : (
              <p>Hint: {hint}</p>
            )}
          </div>
    
  )
}

export default Hint