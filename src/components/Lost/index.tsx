import React from 'react'
import styles from './lost.module.scss'
import Button from '../Button'
const Lost = ({restartGame,word}) => {
  return (
    <div className={styles.Lost}>
        <p >You are Lost! Word is {word}</p>
        <Button onClick={restartGame}>Start again</Button>
    </div>
  )
}

export default Lost