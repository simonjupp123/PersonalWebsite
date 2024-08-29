// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import ThankYou from './pages/ThankYou';
// import Particles from 'react-particles-js';
import ParticlesComponent from './components/ParticleBackground';

function App() {
  
  return (
    <Router>
      
      <div >
      <Navbar />
      <ParticlesComponent id="particles"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      </div>

   
    </Router>
  );
}

export default App;
