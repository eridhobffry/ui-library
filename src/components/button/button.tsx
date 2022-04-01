import React from 'react';
import LibWrappeer from '../../shared/wrapper';
import { StyledButton } from './button.styles';
import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({ label, onButtonClick }) => {
  return (
    <LibWrappeer>
      <StyledButton onClick={onButtonClick}>{label}</StyledButton>
    </LibWrappeer>
  );
};

export default Button;
