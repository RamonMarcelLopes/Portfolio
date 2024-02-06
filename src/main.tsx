import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageContextProvider } from './contexts/language/index.tsx';
import { ThemeContextProvider } from './contexts/dark-lightMode/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
