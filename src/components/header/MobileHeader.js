import React, { useState } from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Logo from '../Logo';
import MobileMenu from "../MobileMenu";

function MobileHeader() {
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
                    {/* {isMenuOpen ? (
                        <CgClose className={`menu-icon ${isMenuOpen ? 'visible' : 'hidden'}`} />
                    ) : (
                        <HiOutlineMenu className={`menu-icon ${isMenuOpen ? 'hidden' : 'visible'}`} />
                    )} */}

                {/* <CgClose className={`menu-icon ${isMenuOpen ? 'visible' : 'hidden'}`} />
                <HiOutlineMenu className={`menu-icon ${isMenuOpen ? 'hidden' : 'visible'}`} /> */}
                  <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></div>

                </div>
            </header>

            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <MobileMenu onLinkClick={closeMenu} />
            </div>

        </>
      );
}

export default MobileHeader;
