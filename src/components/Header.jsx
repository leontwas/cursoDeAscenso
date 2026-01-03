import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDriveDropdownOpen, setIsDriveDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsDriveDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDriveDropdown = () => {
    setIsDriveDropdownOpen(!isDriveDropdownOpen);
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
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu} end>
                Preguntas de Ascenso
              </NavLink>
            </li>
            <li>
              <NavLink to="/trofeos" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Trofeos
              </NavLink>
            </li>
            <li className={`dropdown ${isDriveDropdownOpen ? 'active' : ''}`}>
              <button className="dropdown-toggle" onClick={toggleDriveDropdown}>
                Carpetas Drive
                <span className="dropdown-arrow">▼</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="https://drive.google.com/drive/folders/17DqSgI8YgyrWeRp5vRtIpu6RmFKeqFHF?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Actas en pdf
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/drive/folders/1_un6GDtup9WG25F0vbPhtPgIy9sgozWx?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Cartillas de ascenso
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/drive/folders/1vc8WJwWjhBtW6QcSOFQ4DpRQZsJFLXdk?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Notas y solicitudes en pdf
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/drive/folders/1Huaq0SJyAM8VJttjHm1WIzL17it5FGPj?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Leyes y códigos
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/drive/folders/1tt-mpj7RCWij_o97jNAMgcmaC5oC7ll3?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Protocolos
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/drive/folders/1K8NO3R-RP-Lgj9p7jAE9lOf3czCdgzKo?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                    Turnos judiciales
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/calendario" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Calendario
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

