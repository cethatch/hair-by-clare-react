import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import Logo from '../Logo';


const FullHeader = () => {
  const location = useLocation();
  
  const handleLinkClick = (e) => {
    e.target.blur();
  };

  return (
    <header>
      <Link 
        to="/" 
        className={`nav-link ${location.pathname === '/' ? 'current-page' : ''}`}
        onClick={handleLinkClick}
      >
        Home
      </Link>
      <Link 
        to="/services" 
        className={`nav-link ${location.pathname === '/services' ? 'current-page' : ''}`}
        onClick={handleLinkClick}
      >
        Services
      </Link>

      <Logo className='header-logo'/>

      <Link 
        to="/portfolio" 
        className={`nav-link ${location.pathname === '/portfolio' ? 'current-page' : ''}`}
        onClick={handleLinkClick}
      >
        Portfolio
      </Link>
      <Link 
        to="/contact" 
        className={`nav-link ${location.pathname === '/contact' ? 'current-page' : ''}`}
        onClick={handleLinkClick}
      >
        Contact
      </Link>
    </header>
  );
};

export default FullHeader;