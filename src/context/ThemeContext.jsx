/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('darkMode');
      setIsDarkMode(storedTheme ? JSON.parse(storedTheme) : false);
  }, []);

  useEffect(() => {
    if (isDarkMode !==  null) {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
