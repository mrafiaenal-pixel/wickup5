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
    <>
      <header className="navbar">
        <div className="navbar-container">

          {/* Logo */}
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/logo-wikcup.png" alt="Wikrama Cup Logo" className="navbar-logo-img" />
            <span className="navbar-logo-text">WIKRAMA CUP 5</span>
          </NavLink>

          {/* Tombol Hamburger Mobile */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            {isOpen ? '✕' : '☰'}
          </div>

          {/* Nav Menu */}
          <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMobileMenu}
                  end
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
              {/* Tombol Daftar Sekarang */}
              <li className="nav-item nav-button-item">
                <a
                  href="https://forms.gle/KCjH33E1U8Hh4D229"
                  className="nav-link nav-button"
                  onClick={closeMobileMenu}
                >
                  Daftar Sekarang &nbsp;→
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <style>{`
        .navbar {
          background: #0a0e1a;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1rem;
          position: sticky;
          top: 0;
          z-index: 999;
          border-bottom: 1px solid rgba(245, 147, 28, 0.3);
          box-shadow: 0 2px 20px rgba(0,0,0,0.5);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
          width: 100%;
          max-width: 1200px;
          padding: 0 30px;
        }

        /* Logo */
        .navbar-logo {
          display: flex;
          align-items: center;
          height: 100%;
          text-decoration: none;
          color: #FFFFFF;
          font-weight: 900;
          font-size: 1.4rem;
          gap: 10px;
          flex-shrink: 0;
        }

        .navbar-logo-img {
          height: 44px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .navbar-logo:hover .navbar-logo-img {
          transform: scale(1.05);
        }

        .navbar-logo-text {
          color: #f8bb28;
          font-weight: 900;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .navbar-logo:hover .navbar-logo-text {
          color: #f5931c;
        }

        /* Nav Menu Desktop */
        .nav-menu {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          list-style: none;
          align-items: center;
          margin: 0;
          padding: 0;
          gap: 4px;
        }

        .nav-item {
          height: 70px;
          display: flex;
          align-items: center;
        }

        .nav-link {
          color: #d0d8f0;
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0 16px;
          height: 100%;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.25s ease;
          position: relative;
          white-space: nowrap;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 16px;
          right: 16px;
          height: 3px;
          background: #f8bb28;
          transform: scaleX(0);
          transition: transform 0.25s ease;
          border-radius: 2px 2px 0 0;
        }

        .nav-link:hover {
          color: #f8bb28;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-link.active {
          color: #f8bb28;
          font-weight: 700;
        }

        .nav-link.active::after {
          transform: scaleX(1);
        }

        /* Tombol Daftar Sekarang */
        .nav-button-item {
          margin-left: 16px;
          height: 70px;
          display: flex;
          align-items: center;
        }

        .nav-button {
          background: linear-gradient(90deg, #f5931c, #f8bb28) !important;
          color: #1a1a2e !important;
          border: none;
          padding: 10px 22px !important;
          border-radius: 50px;
          font-size: 0.95rem !important;
          font-weight: 700 !important;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(245, 147, 28, 0.4);
          text-decoration: none;
          height: auto !important;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.3px;
        }

        .nav-button::after {
          display: none !important;
        }

        .nav-button:hover {
          background: linear-gradient(90deg, #f8bb28, #f5931c) !important;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 25px rgba(248, 187, 40, 0.6);
          color: #1a1a2e !important;
        }

        /* Hamburger */
        .hamburger-menu {
          display: none;
          font-size: 1.8rem;
          color: #f8bb28;
          cursor: pointer;
          z-index: 1000;
          padding: 5px;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hamburger-menu {
            display: block;
          }

          .nav-menu {
            position: absolute;
            top: 70px;
            right: 16px;
            left: auto;
            display: flex;
            flex-direction: column;
            width: 260px;
            height: auto;
            background: #0a0e1a;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(245, 147, 28, 0.4);
            border-radius: 0 0 12px 12px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
            padding: 8px;
          }

          .nav-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            z-index: 998;
          }

          .nav-list {
            flex-direction: column;
            width: 100%;
            gap: 0;
          }

          .nav-item {
            width: 100%;
            height: auto;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          }

          .nav-link {
            width: 100%;
            justify-content: flex-start;
            padding: 14px 16px;
            height: auto;
          }

          .nav-link::after {
            display: none;
          }

          .nav-link:hover,
          .nav-link.active {
            color: #f8bb28;
            background: rgba(248, 187, 40, 0.08);
            border-radius: 8px;
          }

          .nav-button-item {
            margin-left: 0;
            height: auto;
            border-bottom: none;
            padding: 10px 0 4px;
          }

          .nav-button {
            width: 100%;
            margin: 0;
            padding: 12px 16px !important;
            font-size: 0.95rem !important;
            box-shadow: 0 4px 15px rgba(245, 147, 28, 0.3);
            border-radius: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
