import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = (props) => {

  const [values, handleChanges] = useDarkMode("darkMode",false)

  const toggleMode = e => {
    e.preventDefault();
    // props.setDarkMode(!props.darkMode);
    handleChanges(!values.darkMode);
  };



  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={values.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
