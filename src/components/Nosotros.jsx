import React from 'react';
import styles from './Nosotros.module.css';

const Nosotros = () => {
  return (
    <section id="nosotros" className={styles.nosotros}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Nosotros</h2>
        <div className={styles.content}>
          <p className={styles.text}>
            Somos un microemprendimiento que comenzó un <strong>14 de abril de 2018</strong> y poco a poco fuimos ganando la confianza de muchos clientes, realizando trabajos de calidad, confeccionando nuestra propia moldería, estando en cada detalle de estampado o bordado y seleccionando las mejores telas del mercado.
          </p>
          <div className={styles.divider}></div>
          <p className={styles.highlightText}>
            Sabemos que la imagen es el motor del crecimiento. Por eso, nuestro compromiso es potenciar la identidad de tu marca para que sigamos creciendo juntos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;