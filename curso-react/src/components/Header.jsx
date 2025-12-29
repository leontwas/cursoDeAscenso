import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <h1>Todo para el Policía de la Ciudad</h1>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                Páginas Oficiales
                <span className="dropdown-arrow">▼</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="https://www.policiadelaciudad.gob.ar/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Policía de la Ciudad
                  </a>
                </li>
                <li>
                  <a href="https://ci.policiadelaciudad.gob.ar/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Comunicaciones Internas
                  </a>
                </li>
                <li>
                  <a href="https://planillascomplementaria.com.ar/detalle" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Pago de Complementaria
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>
                Preguntas de Ascenso
              </Link>
            </li>
            <li>
              <Link to="/trofeos" className={location.pathname === '/trofeos' ? 'active' : ''} onClick={closeMenu}>
                Trofeos
              </Link>
            </li>
            <li>
              <a href="https://drive.google.com/drive/folders/1_un6GDtup9WG25F0vbPhtPgIy9sgozWx?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                Cartillas de Ascenso
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/drive/folders/1vc8WJwWjhBtW6QcSOFQ4DpRQZsJFLXdk?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                Notas
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/drive/folders/17DqSgI8YgyrWeRp5vRtIpu6RmFKeqFHF?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                Actas
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/drive/folders/1Huaq0SJyAM8VJttjHm1WIzL17it5FGPj?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                Legislación
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/drive/folders/1K8NO3R-RP-Lgj9p7jAE9lOf3czCdgzKo?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                Turnos Judiciales
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/drive/folders/1tt-mpj7RCWij_o97jNAMgcmaC5oC7ll3?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                Protocolos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

