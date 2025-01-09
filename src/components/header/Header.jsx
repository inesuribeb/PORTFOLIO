import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header({ onContactClick }) {

  const location = useLocation();
  const [closing, setClosing] = useState(false);

  const handleContactToggle = () => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent?.classList.contains('shifted')) {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        onContactClick();
      }, 600);
    } else {
      onContactClick();
    }
  };

  // const handleNavClick = () => {
  //   const mainContent = document.querySelector('.main-content');
  //   if (mainContent?.classList.contains('shifted')) {
  //     handleContactToggle();
  //     setTimeout(() => {
  //       window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth'
  //       });
  //     }, 600);
  //   } else {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  const handleNavClick = () => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent?.classList.contains('shifted')) {
      handleContactToggle();
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="header-container-desktop">
      <div className="header-home-desktop">
        <Link to="/"
          // onClick={handleCombinedClick}
          onClick={handleNavClick}

        >
          <h1>Ines Uribe</h1>
        </Link>
      </div>
      <div className="navigator-desktop">
        <nav>
          <ul>
            <li>
              <Link
                to="/art"
                onClick={handleNavClick}
                className={isActive('/art') ? 'active' : ''}
              >
                Art
              </Link>
            </li>
            <li>
              <Link
                to="/code"
                onClick={handleNavClick}
                className={isActive('/code') ? 'active' : ''}
              >
                Code
              </Link>
            </li>
            <li>
              <button
                onClick={handleContactToggle}

                className="contact-button"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;