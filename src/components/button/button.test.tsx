import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';
import { ButtonProps } from './button.types';

describe('Test Button', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      label: 'Button',
      onButtonClick: jest.fn(),
    };
  });

  const renderButton = () => render(<Button {...props} />);

  // test render
  test('render button', () => {
    renderButton();
  });
});
