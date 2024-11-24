import React from 'react';
import { useTheme } from './ThemeProvider';


function DisplayTheme() {
  const { theme, toggleTheme } = useTheme();


  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <p className={theme === 'light' ? 'light-theme' : 'hidden'}>Tema atual: light</p>
      <p className={theme === 'dark' ? 'dark-theme' : 'hidden'}>Tema atual: dark</p>
      <button onClick={toggleTheme}>alternar Tema</button>
    </div>
  );
}


export default DisplayTheme;