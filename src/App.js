import React from 'react'
import { wordList } from './mock/wordList'
const App = () => {
  return (
    <div>
      <ul>
        {
          wordList.map((item,index)=>(
            <li key={index}>
              <h2>{item.word}</h2>
              <p>{item.hint}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App