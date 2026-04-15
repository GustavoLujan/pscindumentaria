// components/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';
import heroBg from '../images/hero.avif'; 
import logo from '../images/Logo.jpeg'; // Importamos el logo

const Hero = () => {
  return (
    <section id="hero" className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          {/* Contenedor del logo dentro del hero */}
          <div className={styles.heroLogoContainer}>
            <img src={logo} alt="PSC Logo" className={styles.heroLogo} />
          </div>
          <h1 className={styles.title}>SOMOS FABRICANTES</h1>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;