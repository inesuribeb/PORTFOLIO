import { Link } from 'react-router-dom';
import './Header.css';

function Header({ onContactClick }) {

  const handleNavClick = () => {
    // Si Contact está abierto (lo sabremos porque hay un estado shifted), lo cerramos
    const mainContent = document.querySelector('.main-content');
    if (mainContent?.classList.contains('shifted')) {
      onContactClick();
    }
  };

  return (
    <div className="header-container-desktop">
      <div className="header-home-desktop">
        <Link to="/" onClick={handleNavClick}>
          <h1>Ines Uribe</h1>
        </Link>
      </div>
      <div className="navigator-desktop">
        <nav>
          <ul>
            <li>
              <Link to="/art" onClick={handleNavClick}>Art</Link>
            </li>
            <li>
              <Link to="/code" onClick={handleNavClick}>Code</Link>
            </li>
            <li>
              <button
                onClick={onContactClick}
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