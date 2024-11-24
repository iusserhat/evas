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
                <img src="/logom.jpg" alt="Radikal Mühendis" className="logo-img" />

                </Link>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li><Link to="/anasayfa">AnaSayfa</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                   
             </ul>
            </nav>
        </header>
    );
}

export default Header;
