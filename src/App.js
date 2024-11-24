import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DarkMode from './components/DarkMode/DarkMode';
import Footer from './components/footer/Footer'; 
import AnaSayfa from './components/AnaSayfa'; 


function App() {
  return (
    <Router>
      <Header />
      <DarkMode />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/anasayfa" element={<AnaSayfa />} />
      </Routes>
      <Footer /> {/* Footer'ı Routes dışında tutuyoruz */}
    </Router>
  );
}

export default App;
