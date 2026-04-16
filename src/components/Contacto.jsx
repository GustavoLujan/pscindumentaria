// src/components/Contacto.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import styles from './Contacto.module.css';

const Contacto = () => {
  return (
    <section id="contacto" className={styles.contacto}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contacto</h2>
        <div className={styles.content}>
          <p className={styles.text}>¿Necesitas un presupuesto o tienes alguna consulta? Contáctanos por nuestras redes sociales.</p>
          
          <div className={styles.buttonContainer}>
            {/* Botón de WhatsApp */}
            <a 
              href="https://wa.me/5491165535192" 
              className={styles.whatsappButton} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
              WhatsApp
            </a>

            {/* Botón de Instagram */}
            <a 
              href="https://www.instagram.com/psc.argentina" 
              className={styles.instagramButton} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
