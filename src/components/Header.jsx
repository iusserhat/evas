import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // App.css dosyasını import ettik



function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="navbar">
                <Link to = '/'>
                <img src="/logos.png" alt="Radikal Mühendis" className="logo-img" />

                </Link>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><Link to="/anasayfa">Akış</Link></li>
                    <li><Link to="/">Hakkında</Link></li>
                    <li><Link to="/projects">Eğitim ve Kariyer</Link></li>
                    <li><Link to="/map">Harita</Link></li>
                    <li><Link to="/contact">İletişim</Link></li>
                   
             </ul>
            </nav>
        </header>
    );
}

export default Header;
