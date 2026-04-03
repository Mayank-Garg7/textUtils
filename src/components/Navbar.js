import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar({ title, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} shadow-sm`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">{title}</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/contact">contact</NavLink></li>
          </ul>
          {/* Theme Switcher */}
          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;