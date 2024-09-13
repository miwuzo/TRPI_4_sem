import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {title, onClick, disabled} = props
  return (
    <button onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;