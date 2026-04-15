// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// --- CONFIGURACIÓN DE FONTAWESOME ---
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Añadimos el icono de WhatsApp de las marcas a la biblioteca global
library.add(faWhatsapp);
// --- FIN CONFIGURACIÓN DE FONTAWESOME ---

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();