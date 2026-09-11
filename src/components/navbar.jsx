import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo WIKCUP4 */}
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/logo-wikcup.png" alt="Wikrama Cup Logo" className="navbar-logo-img" />
          <span className="navbar-logo-text">WIKRAMA CUP 5</span>

        </NavLink>

        {/* Tombol HAMBURGER */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>

        <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kompetisi"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={closeMobileMenu}
              >
                Kompetisi
              </NavLink>
            </li>
            {/* ✅ TOMBOL DAFTAR SEKARANG di daftar menu */}
            <li className="nav-item nav-button-item">
              <a
                href="/kompetisi"
                className="nav-link nav-button"
                onClick={closeMobileMenu}
              >
                Daftar Sekarang
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
