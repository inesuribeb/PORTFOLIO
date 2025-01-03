import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <div className="header-container-desktop">
                    <div className="header-home-desktop">
                        <Link to="/">
                            <h1>Ines Uribe</h1>
                        </Link>
                    </div>
                    <div className="navigator-desktop">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/art">Art</Link>
                                </li>
                                <li>
                                    <Link to="/code">Code</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
    </>
  );
}

export default Header;