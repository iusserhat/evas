import React from 'react';
import './Footer.css';

const Footer = () => {
 return(
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Copyright. All Rights Reserved.</p>

        <div className="social-links">
          <a href="https://www.linkedin.com/company/gmmmm/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.instagram.com/gencliksporbak/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
 );
};

export default Footer;
