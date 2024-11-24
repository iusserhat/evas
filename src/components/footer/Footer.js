import React from 'react';
import './Footer.css';

const Footer = () => {
 return(
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Copyright. All Rights Reserved.</p>

        <div className="social-links">
          <a href="https://github.com/iusserhat" target ="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
          </a>
          <a href="https://www.linkedin.com/in/serhat-%C3%B6zen-ba887b22b/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.instagram.com/radikalmuhendis/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
 );
};

export default Footer;
