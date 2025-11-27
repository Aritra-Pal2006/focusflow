import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ThemeProvider component to wrap the application
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  // Apply theme class to body and save to localStorage
  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('focusflow-theme');
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setCurrentTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply theme class and background color to root and body elements
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Apply theme class
    root.className = `theme-${currentTheme}`;
    
    // Apply background color using CSS variables
    body.style.backgroundColor = currentTheme === 'dark' ? '#121212' : '#f5f7fa';
    body.style.color = currentTheme === 'dark' ? '#f0f0f0' : '#333';
    
    localStorage.setItem('focusflow-theme', currentTheme);
  }, [currentTheme]);

  // Toggle theme function
  const toggleTheme = () => {
    setCurrentTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Context value
  const value = {
    currentTheme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};