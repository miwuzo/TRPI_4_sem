import React from 'react';
import Sudoku from "./Components/Sudoku.tsx";
import NumbersPanel from "./Container/NumbersPanel.ts";
import SudokuContainer from "./Container/SudokuContainer.ts";
import GenerateButton from "./Container/GenerateButton.ts";
import ClueButton from "./Container/ClueButton.ts";

function App() {
  return (
    <div className="App">
        <NumbersPanel />
        <SudokuContainer/>
        <div className="ButtonContainer">
            <GenerateButton text="Новая игра" name="gameButton"/>
            <ClueButton name="gameButton" text="подсказка"/>
        </div>
    </div>
  );
}

export default App;
