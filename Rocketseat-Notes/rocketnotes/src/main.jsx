import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global.js';
import theme from './styles/theme.js';
import { Routes } from './routes';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
