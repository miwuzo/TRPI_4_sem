// import React from 'react';
 import Cell from "./Сell.tsx";
// import {Field} from "../Reducer/field.ts";



// function Sudoku(props:{field:Field, n:number, changeNumber:(i:number, j:number, n:number) => void, isCorrect:boolean}):JSX.Element{

//     const background = props.isCorrect?{backgroundColor: "yellow"} :{backgroundColor:"transparent"}


//     return(<div  className="Container">
//         <div style={background} className="sudokuField">
//             {Array.from({length: 9}, (_, i) => i).map((i) =>
//                 Array.from({length: 9}, (_, j) => j).map((j) =>
//                     <Cell key={`${i}-${j}`} fun={()=>props.changeNumber(i, j, props.n)} sateNumber={props.field.errorState[i][j]} number={props.field.field[i][j]}/>
//                 )
//             )}
//         </div>
//     </div>)
// }


// export default Sudoku;



import React, { useState, useEffect } from 'react';

import { Field } from "../Reducer/field.ts";

function Sudoku(props: { field: Field, n: number, changeNumber: (i: number, j: number, n: number) => void, isCorrect: boolean }): JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    if (props.isCorrect) {
      setBackgroundColor("yellow");
      const timer = setTimeout(() => {
        setBackgroundColor("transparent");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [props.isCorrect]);

  return (
    <div className="Container">
      <div style={{ backgroundColor }} className="sudokuField">
        {Array.from({ length: 9 }, (_, i) => i).map((i) =>
          Array.from({ length: 9 }, (_, j) => j).map((j) =>
            <Cell key={`${i}-${j}`} fun={() => props.changeNumber(i, j, props.n)} sateNumber={props.field.errorState[i][j]} number={props.field.field[i][j]} />
          )
        )}
      </div>
    </div>
  );
}

export default Sudoku;