import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme.tsx'
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
  </React.StrictMode>,
)
