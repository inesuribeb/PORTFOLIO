import { Link } from 'react-router-dom';
import './Header.css';

function Header({ onContactClick }) {

  const handleNavClick = () => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent?.classList.contains('shifted')) {
      onContactClick();
    }
  };

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleCombinedClick = () => {
    handleNavClick();
    handleLinkClick();
  };

  return (
    <div className="header-container-desktop">
      <div className="header-home-desktop">
        <Link to="/" onClick={handleCombinedClick}>
          <h1>Ines Uribe</h1>
        </Link>
      </div>
      <div className="navigator-desktop">
        <nav>
          <ul>
            <li>
              <Link to="/art" onClick={handleCombinedClick}>Art</Link>
            </li>
            <li>
              <Link to="/code" onClick={handleCombinedClick}>Code</Link>
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