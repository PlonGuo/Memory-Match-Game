import { useState } from 'react';

export const useTheme = (defaultDark: boolean = true) => {
  const [isDarkMode, setIsDarkMode] = useState(defaultDark);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return { isDarkMode, toggleDarkMode };
}; 