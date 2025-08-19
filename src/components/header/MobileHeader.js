import React, { useState } from 'react';
import Logo from '../Logo';
import MobileMenu from "../MobileMenu";

const MobileHeader = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            document.body.classList.add('menu-open');
          } else {
            document.body.classList.remove('menu-open');
          }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');

    };

    return (
        <>
            <header className='mobile-header'>
                <Logo className='header-logo'/>
                <div className="menu-icon-wrapper" onClick={toggleMenu}>
                  <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></div>

                </div>

                
            </header>
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                  <MobileMenu onLinkClick={closeMenu} />
            </div>
            
            
        </>
      );
};

export default MobileHeader;
