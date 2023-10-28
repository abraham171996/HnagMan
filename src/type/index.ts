export interface WordEntry {
    word: string;
    hint: string;
  }
  
 export interface GameState {
    word: string;
    hint: string;
    incorrectGuess: number;
    showLevel: boolean;
    currentWordState: string;
    selectedLevel: string;
    guessedLetters: string[];
    isGameOver: boolean;
    lost: boolean;
  }