// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import clientesImg from '../images/footer.png'; // Verifica que el nombre sea exacto

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Esta es la parte que falta en tu captura */}
        <div className={styles.imageWrapper}>
          <img 
            src={clientesImg} 
            alt="Nuestros Clientes" 
            className={styles.footerImage} 
          />
        </div>
        
        <div className={styles.info}>
          <p className={styles.copy}>
            &copy; {year} <span className={styles.brand}>PSC INDUMENTARIA</span> - Todos los derechos reservados.
          </p>
          <p className={styles.details}>Fabricación propia | Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;