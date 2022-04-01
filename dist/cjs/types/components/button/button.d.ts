import React from 'react';
interface ButtonProps {
    label: string;
    onButtonClick: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
