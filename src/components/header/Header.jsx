import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="contenedor">
                    <div className="encabezado">
                        <Link to="/">
                            <h1>Ines Uribe</h1>
                        </Link>
                    </div>
                    <div className="navegador">
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