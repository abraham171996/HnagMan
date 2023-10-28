import React from 'react';
import styled from './level.module.scss'
const Level = ({ selectedLevel, onSelectLevel }) => {
  return (
    <div className={styled.Level}>
      <h2>Select a Difficulty Level:</h2>
      <button
        onClick={() => onSelectLevel('easy')}
        disabled={selectedLevel === 'easy'}
      >
        Easy
      </button>
      <button
        onClick={() => onSelectLevel('medium')}
        disabled={selectedLevel === 'medium'}
      >
        Medium
      </button>
      <button
        onClick={() => onSelectLevel('hard')}
        disabled={selectedLevel === 'hard'}
      >
        Hard
      </button>
    </div>
  );
};

export default Level;
