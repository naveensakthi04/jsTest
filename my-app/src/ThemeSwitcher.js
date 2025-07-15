import React, { useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.className = `${newTheme}-mode`;
  };

  const handleLightMode = () => {
    toggleTheme('light');
    alert(handleLightMode.toString());
  };

  const handleDarkMode = () => {
    toggleTheme('dark');
    alert(handleDarkMode.toString());
  };

  return (
    <div className={`theme-switcher ${theme}-mode`}>
      <button onClick={handleLightMode}>Light Mode</button>
      <button onClick={handleDarkMode}>Dark Mode</button>
    </div>
  );
};

export default ThemeSwitcher;
