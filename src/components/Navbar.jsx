// components/Navbar.jsx
import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import styles from './Navbar.module.css';
import logo from '../images/Logo.jpeg'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo a la izquierda */}
        <div className={styles.logoContainer}>
          <img src={logo} alt="PSC Indumentaria" className={styles.logo} />
        </div>
        
        {/* Links a la derecha */}
        <ul className={styles.navLinks}>
          <li><Link smooth to="#hero" className={styles.link}>Inicio</Link></li>
          <li><Link smooth to="#nosotros" className={styles.link}>Nosotros</Link></li>
          <li><Link smooth to="#servicios" className={styles.link}>Servicios</Link></li>
          <li><Link smooth to="#contacto" className={styles.link}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;