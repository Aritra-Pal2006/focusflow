import React from 'react';
import { useTheme } from '../context/ThemeContext';
const ThemeToggle = () => {
  const { currentTheme, toggleTheme } = useTheme();
  return (
    <button 
      className="btn btn-secondary"
      onClick={toggleTheme}
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {currentTheme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};
export default ThemeToggle;