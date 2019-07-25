import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  // darkMode initial value = false
  const [darkMode, setDarkMode] = useDarkMode(darkMode);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div className={useDarkMode(darkMode)}></div>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
