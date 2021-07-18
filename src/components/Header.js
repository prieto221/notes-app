import React from 'react';

const Header = ({ handleDarkMode }) => {
  return (
    <div className='header'>
      <h1 style={{ fontFamily: 'monospace' }}>Notes</h1>
      <button
        className='save'
        onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Header;
