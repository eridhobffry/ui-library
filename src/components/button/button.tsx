import React from 'react';
import LibWrappeer from '../../shared/wrapper';
import { StyledButton } from './button.styles';

interface ButtonProps {
  label: string;
  onButtonClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onButtonClick }) => {
  return (
    <LibWrappeer>
      <StyledButton onClick={onButtonClick}>{label}</StyledButton>
    </LibWrappeer>
  );
};

export default Button;
