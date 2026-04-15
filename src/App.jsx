// App.jsx
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css'; // Si tienes estilos globales específicos de App

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Usamos Routes solo para estructurar la Single Page Application */}
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Nosotros />
              <Servicios />
              <Contacto />
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;