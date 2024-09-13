import { getSudoku } from "sudoku-gen"
import { Cell } from "./Cell";
import { useState } from "react";
import Button from "./Button";
import { GlobalHotKeys } from "react-hotkeys";


interface SudocuCell{
    index: number,
    value: number | null,
    fixed: boolean,
    color: string,
}

interface SudokuBoard extends Array<Array<SudocuCell>> {}

function Sudoku(){

    const sudoku = getSudoku('easy');
    
    const [solution, setSolution] = useState<string>(sudoku.solution);
    const [mySudoku, setSudoku] = useState<SudokuBoard>(() => {
        const initialSudoku: SudokuBoard = [];

        let i : number = 0;
        for(let j = 0; j < 9; j++){

            let row: SudocuCell[] = [];

            for(let k = 0; k < 9; k++){
                row.push({index: i, 
                    value: sudoku.puzzle.charAt(i) === '-' ? null : parseInt(sudoku.puzzle.charAt(i), 10),
                    fixed:false, color:'white'});
                i++;
            }
            initialSudoku.push(row);
        }
        return initialSudoku;
    })

    const handleCell2 = (rowIndex: number, colIndex: number, newValue: number | null) => {
        const updatedSudoku = [...mySudoku];
        updatedSudoku[rowIndex][colIndex].value = newValue;
        setSudoku(updatedSudoku);
    }
    const handleCell = (rowIndex: number, colIndex: number, newValue: number | null) => {
        const updatedSudoku = [...mySudoku];
        updatedSudoku[rowIndex][colIndex].value = newValue;
        setSudoku(updatedSudoku);
        setTimeout(() => paintAll('white'), 5000);
        if(newValue !== null)
             checkCell(rowIndex, colIndex);
             checkCell2(rowIndex, colIndex);
       
      };


    const checkSolution = () => {


        mySudoku.forEach((row, rowIndex) =>
            row.forEach((l, colIndex) => {

                paintCol(colIndex, 'white');
                paintRow(rowIndex, 'white');
                paingSquare(rowIndex, colIndex, 'white');
              
            })
          );
        

        /*mySudoku.forEach((row, rowIndex) => row.forEach((l, colIndex) =>{if(l.value !== null)
            checkCell(rowIndex, colIndex);}))*/
            mySudoku.forEach((row, rowIndex) =>
                row.forEach((l, colIndex) => {

                  if (typeof l === 'object' && l !== null && l.value !== null) {
                    checkCell(rowIndex, colIndex);
                    checkCell2(rowIndex, colIndex);
                  }
                })
              );
    }

    

    const Victory = () =>{    let IsNotMatch = false;
        mySudoku.forEach((row, rowIndex) =>{
            if(IsNotMatch) return        row.forEach((value, colIndex) => {
                if(IsNotMatch){ console.log("iii"); return}            if(value !==null) {IsNotMatch = !(String(value.value) === solution[rowIndex*9 + colIndex]);};
            }        )
        }      );
          if (!IsNotMatch) {        paintAll("yellow");
            setTimeout(() => paintAll('white'), 2000);      } else {
            console.log("HUI")      }
    
       /* if(mySudoku.forEach((row, rowIndex) =>
                row.forEach((value, colIndex) =>(              value !== null || String(value) === solution[rowIndex][colIndex])
                )          )){
            
            paintAll("yellow");        setTimeout(() => paintAll('white'), 2000);
              }*/}

    const checkCell = (rowIndex: number, colIndex: number): boolean => {
        let targetValue = mySudoku[rowIndex][colIndex].value;

        
        if(targetValue === null)
            return false;


        for(let row = 0; row < 9; row++){
            if(row !== rowIndex && mySudoku[row][colIndex].value === targetValue){
                console.log("Mistage in row");
                console.log('row: ' + row);
                paintCol(colIndex, 'red');
                return false;
            }
        }

        for(let col = 0; col < 9; col++){
            if(col !== colIndex && mySudoku[rowIndex][col].value === targetValue){
                console.log("Mistake in col");
                console.log('col: ' + col);
                paintRow(rowIndex, 'red');
                return false;
            }
        }

              
        let startRow = Math.floor(rowIndex/3) * 3;
        let startCol = Math.floor(colIndex/3) * 3;

        for(let row = startRow; row < startRow + 3; row++){
            for(let col = startCol; col < startCol + 3; col++){
                if((row !== rowIndex || col !== colIndex) && mySudoku[row][col].value === targetValue){
                    console.log("mistake in rectangle");
                    console.log("row: " + row + " col: " + col);
                    paingSquare(rowIndex, colIndex, 'red');
                    return false;
                }
            }
        }

        /*paintCol(colIndex, 'white');
        paintRow(rowIndex, 'white');
        paingSquare(rowIndex, colIndex, 'white');*/
        return true;

    }








    const checkCell2 = (rowIndex: number, colIndex: number): boolean => {
        let targetValue = mySudoku[rowIndex][colIndex].value;

        if(targetValue === null)
            return false;

              
        let startRow = Math.floor(rowIndex/3) * 3;
        let startCol = Math.floor(colIndex/3) * 3;

        for(let row = startRow; row < startRow + 3; row++){
            for(let col = startCol; col < startCol + 3; col++){
                if((row !== rowIndex || col !== colIndex) && mySudoku[row][col].value === targetValue){
                    console.log("mistake in rectangle");
                    console.log("row: " + row + " col: " + col);
                    paingSquare(rowIndex, colIndex, 'red');
                    return false;
                }
            }
        }

        /*paintCol(colIndex, 'white');
        paintRow(rowIndex, 'white');
        paingSquare(rowIndex, colIndex, 'white');*/
        return true;

    }









    const paintRow = (rowIndex: number, newColor: string) => {
        const updateSudoku = [...mySudoku];
        updateSudoku[rowIndex].forEach(el => el.color = newColor);
        setSudoku(updateSudoku);
    }

    const paintCol = (colIndex: number, newColor: string) => {
        const updateSudoku = [...mySudoku];
        updateSudoku.forEach(row => row[colIndex].color = newColor);
        setSudoku(updateSudoku);
    }

    const paingSquare = (rowIndex: number, colIndex: number, newColor: string) => {
        const updateSudoku = [...mySudoku];

        let startRow = Math.floor(rowIndex/3) * 3;
        let startCol = Math.floor(colIndex/3) * 3;


        for(let row = startRow; row < startRow + 3; row++){
            for(let col = startCol; col < startCol + 3; col++){
                updateSudoku[row][col].color = newColor;
            }
        }
        setSudoku(updateSudoku);
    }

    const paintAll = (newColor: string) => {
        const updatedSudoku = [...mySudoku];
        for(let row = 0; row < 9; row++){
            for(let col = 0; col < 9; col++){
                updatedSudoku[row][col].color =newColor;
            }
        }
        setSudoku(updatedSudoku);
    }


    const newGame = () =>{
        window.location.reload();
    }

    const getHint = () => {
        const updatedSudoku = [...mySudoku];
        for(let row = 0; row < 9; row++){
            for(let col = 0; col < 9; col++){
                if(updatedSudoku[row][col].value == null){
                    updatedSudoku[row][col].value = parseInt(solution.charAt(updatedSudoku[row][col].index),10)
                    setSudoku(updatedSudoku);
                    return;
                }
            }
        }
    }
    const keyMap={
        HINT: "z"
    };

    const handlers={
        HINT: getHint
    };

    const keyMap2={
        HINT2: "x"
    };

    const handlers2={
        HINT2: newGame
    };


    return(
        <GlobalHotKeys keyMap={{...keyMap, ...keyMap2}} handlers={{...handlers, ...handlers2}} allowChanges={true}>
        <div>
            
            {mySudoku.map((row, rowIndex) => (
                <div key={Math.random()}>
                    {row.map((cell, colIndex) => (
                        <Cell 
                    
                        rowIndex={rowIndex}
                        colIdex={colIndex}
                        index={cell.index}
                        value={cell.value}
                        Change={handleCell}
                        fixed={cell.fixed}
                        color={cell.color}
                        />
                    ))}
                    <br/>
                </div>
            ))}
            <Button title="Новая игра" handler={newGame} disabled={false}></Button>
            <Button title="?" handler={getHint} disabled={false}></Button>
            <br/><label>{solution}</label>
            <Button title="Проверить" handler={checkSolution} disabled={false}></Button>
            <Button title="Готово" handler={Victory} disabled={false}></Button>
            
        </div>
        </GlobalHotKeys>
    )
}

export {Sudoku}