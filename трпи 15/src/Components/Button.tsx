import React from "react";

function Button(props:{name:string, text:number|string, fun:()=>void})
{
    return (<button className={props.name} onClick={props.fun}>{props.text}</button>)
}

export default Button;