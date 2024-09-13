import React from 'react';

interface Button2Props {
  title: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const Button2: React.FC<Button2Props> = (props) => {
  const {title, onClick} = props
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
};

export default Button2;