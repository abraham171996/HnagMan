import React from 'react';
import styled from './init.module.scss';
import hangman0 from '../../assets/image/hangman-0.svg';
import hangman1 from '../../assets/image/hangman-1.svg';
import hangman2 from '../../assets/image/hangman-2.svg';
import hangman3 from '../../assets/image/hangman-3.svg';
import hangman4 from '../../assets/image/hangman-4.svg';
import hangman5 from '../../assets/image/hangman-5.svg';
import hangman6 from '../../assets/image/hangman-6.svg';

const Init = ({ incorrectGuess, lost }) => {
  let hangmanImage;

 
  if (lost) {
    hangmanImage = hangman6;
  } else {
    switch (incorrectGuess) {
      case 0:
        hangmanImage = hangman0;
        break;
      case 1:
        hangmanImage = hangman1;
        break;
      case 2:
        hangmanImage = hangman2;
        break;
      case 3:
        hangmanImage = hangman3;
        break;
      case 4:
        hangmanImage = hangman4;
        break;
      case 5:
        hangmanImage = hangman5;
        break;
      case 6:
        hangmanImage = hangman6;
        break;
      default:
        hangmanImage = hangman6;
        break;
    }
  }

  return (
    <div className={styled.Init}>
      <figure>
        <img src={hangmanImage} alt="" />
      </figure>
      <h1>Hangman</h1>
      <p>Incorrect guess: {incorrectGuess}</p>
    </div>
  );
};

export default Init;
