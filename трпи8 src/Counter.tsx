import React, { useState } from 'react';
import Button from './Button';
import Minus from './Minus';
import Button2 from './Button2';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [strings, setstr] = useState<string[]>(["uyh","hhh"]);
  const [strings1, setstr1] = useState(false);
  const [count1, setCount1] = useState<number>(1);

  const handleClick = () =>{
   setstr1(!strings1);
  }


  const handleInc = () => {
    setCount(count + 1);
  };

  const handleInc1 = () => {
    setCount1(count1 + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className={`Counter ${count1 % 2 == 1 ? 'blue' : ''}`}>
       <div className={`Count ${count === 5 ? 'red' : ''}`}>
        <div id='count'>{count} </div>
        <div id='but'>
          <Button
            title="Increase"
            onClick={handleInc}
            disabled={count === 5}
          />
          <Button
            title="Reset"
            onClick={handleReset}
            disabled={count === 0}
          />
        
        </div>
        {strings1 && <div id='strings'>{strings} </div>}
          <Button
            title="Strings"
            onClick={handleClick}
          />
      </div>
      
          {/* <Minus
            title="strings"
            onClick={vstav}
          /> */}
  <Button
            title="color"
            onClick={handleInc1}
          />
    </div>
  );
};

export default Counter;