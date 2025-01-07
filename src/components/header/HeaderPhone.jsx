import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import './HeaderPhone.css'

function HeaderPhone({ isMenuOpen, setIsMenuOpen }) {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="header-phone">
      
        <div className="header-phone__container">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`hamburger-button ${isMenuOpen ? 'active' : ''}`}
          >
            <span className="hamburger-line top"></span>
            <span className="hamburger-line middle"></span>
            <span className="hamburger-line bottom"></span>
          </button>

          {!isMenuOpen && (
            <div className="header-phone__title">
              INES URIBE
            </div>
          )}
        </div>


      </header>

      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu__nav">
            <Link to="/art" className="mobile-menu__link" onClick={() => setIsMenuOpen(false)}>
              <span>Art</span>
            </Link>
            <Link to="/code" className="mobile-menu__link" onClick={() => setIsMenuOpen(false)}>
              <span>Code</span>
            </Link>
            <Link to="/contact" className="mobile-menu__link" onClick={() => setIsMenuOpen(false)}>
              <span>Contact</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default HeaderPhone;