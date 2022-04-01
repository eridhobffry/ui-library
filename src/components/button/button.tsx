import React from 'react';

interface ButtonProps {
  label: string;
  onButtonClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onButtonClick }) => {
  return <button onClick={onButtonClick}>{label}</button>;
};

export default Button;
