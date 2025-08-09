import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileMenu = ({ onLinkClick }) => {
  const location = useLocation();

  const handleLinkClick = (e) => {
    e.target.blur(); 
    onLinkClick(); 
  };

  return (
    <div className="mobile-menu-content">
      <nav className="mobile-nav">
        <Link 
          to="/" 
          className={`mobile-nav-link ${location.pathname === '/' ? 'current-page' : ''}`}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link 
          to="/services" 
          className={`mobile-nav-link ${location.pathname === '/services' ? 'current-page' : ''}`}
          onClick={handleLinkClick}
        >
          Services
        </Link>
        <Link 
          to="/portfolio" 
          className={`mobile-nav-link ${location.pathname === '/portfolio' ? 'current-page' : ''}`}
          onClick={handleLinkClick}
        >
          Portfolio
        </Link>
        <Link 
          to="/contact" 
          className={`mobile-nav-link ${location.pathname === '/contact' ? 'current-page' : ''}`}
          onClick={handleLinkClick}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
