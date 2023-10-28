import React from 'react'
import styles from './hint.module.scss'
import Button from '../Button'
const Hint = ({isGameOver,word,hint,restartGame}) => {
  return (
    
        <div className={styles.Hint}>
            {isGameOver ? (
              <div className={styles.Hint__warpper}>
                <p>Congratulations! You guessed the word: {word}</p>
                <Button onClick={restartGame}>Start again!</Button>
              </div>
            ) : (
              <p>Hint: {hint}</p>
            )}
          </div>
    
  )
}

export default Hint