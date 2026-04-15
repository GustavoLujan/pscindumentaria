// src/components/Servicios.jsx
import React, { useState } from 'react';
import styles from './Servicios.module.css';

// Importación de las imágenes principales
import jersey from '../images/jersey.jpeg';
import gorras from '../images/Gorras1.jpeg';
import polar from '../images/polarbordado.jpeg';
import futbol from '../images/futbol.jpeg';
import molderia from '../images/molderiamujer.jpeg';
import buzo from '../images/buzofrizainvisible.jpeg';
import bordado from '../images/bordado.jpeg';
import dtf from '../images/dtf.jpeg';
import serigrafia from '../images/serigrafia.jpeg';

const listaServicios = [
  { id: 1, title: "Remeras de Jersey 24.1", img: jersey, desc: "Calidad premium en algodón jersey." },
  { id: 2, title: "Gorras Trucker", img: gorras, desc: "Estilo y terminaciones de alta calidad." },
  { id: 3, title: "Polar Bordado", img: polar, desc: "Abrigo con bordados de precisión." },
  { id: 4, title: "Conjuntos Fútbol", img: futbol, desc: "Equipamiento deportivo completo." },
  { id: 5, title: "Moldería Femenina", img: molderia, desc: "Desarrollo de moldería con calce perfecto." },
  { id: 6, title: "Buzo de friza invisible", img: buzo, desc: "Máximo confort y suavidad premium." },
  { id: 7, title: "Bordados", img: bordado, desc: "Detalles personalizados que marcan la diferencia." },
  { id: 8, title: "Estampado DTF", img: dtf, desc: "Impresión digital de alta definición." },
  { id: 9, title: "Estampado en serigrafía", img: serigrafia, desc: "Técnica tradicional de gran resistencia." },
];

const Servicios = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="servicios" className={styles.servicios}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Nuestros Servicios</h2>
        <div className={styles.grid}>
          {listaServicios.map((servicio) => (
            <div 
              key={servicio.id} 
              className={styles.card} 
              onClick={() => setSelectedImg(servicio.img)}
            >
              <div className={styles.imageWrapper}>
                <img src={servicio.img} alt={servicio.title} className={styles.cardImage} />
                <div className={styles.zoomOverlay}><span>Ver pantalla completa</span></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{servicio.title}</h3>
                <p className={styles.cardText}>{servicio.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL: Se activa cuando selectedImg no es null */}
      {selectedImg && (
        <div className={styles.modal} onClick={() => setSelectedImg(null)}>
          <span className={styles.close}>&times;</span>
          <img src={selectedImg} className={styles.modalContent} alt="Vista ampliada" />
        </div>
      )}
    </section>
  );
};

export default Servicios;