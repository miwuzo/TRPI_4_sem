import React from "react";

function Cell(props:{number:number, sateNumber:number, fun ?:()=>void}):JSX.Element{
    const color = {backgroundColor: props.sateNumber < 0 ? 'red' : 'transparent'}
    let n =props.number % 10;
    return (
        <div style={color} onClick={Math.abs(props.sateNumber) !== 2 ? props.fun: ()=>{}}
             className="cell">{n !== 0 && Math.abs(n)}</div>
    )
}

export default Cell;