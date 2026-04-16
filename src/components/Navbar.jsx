import React from 'react';
/* Cambiamos NavHashLink por HashLink para evitar que inyecte isActive */
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Navbar.module.css';
import logo from '../images/Logo.jpeg'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link smooth to="#hero">
            <img src={logo} alt="PSC Indumentaria" className={styles.logo} />
          </Link>
        </div>
        
        <ul className={styles.navLinks}>
          <li>
            <Link smooth to="#hero" className={styles.link}>
              Inicio
            </Link>
          </li>
          <li>
            <Link smooth to="#nosotros" className={styles.link}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link smooth to="#servicios" className={styles.link}>
              Servicios
            </Link>
          </li>
          <li>
            <Link smooth to="#contacto" className={styles.link}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;