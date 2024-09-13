import React from 'react';

interface Minuss {
  title: string;
  onClick: () => void;
}

const Minus: React.FC<Minuss> = (props) => {
  const { title, onClick } = props;
  return (
    <button onClick={()=>onClick()}>
    {title}
  </button>
  );
};

export default Minus;