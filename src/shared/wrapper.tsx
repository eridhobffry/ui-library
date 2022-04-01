import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme.styled-components';

interface ILibWrapper {
  children: React.ReactNode;
}

const LibWrappeer: React.FC<ILibWrapper> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default LibWrappeer;
