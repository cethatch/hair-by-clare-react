import React from 'react';
import HeaderLogo from './HeaderLogo';
import { Link } from 'react-router-dom';

function PageHeader() {
  return (
    <header id="header">

        <nav className="globalNav">
          <Link to="/">Home</Link>
        </nav>

        <nav className="globalNav">
          <Link to="/portfolio">Portfolio</Link>
        </nav>

        <HeaderLogo />

        <nav className="globalNav">
          <Link to="/services">Services</Link>
        </nav>

        <nav className="globalNav">
          <Link to="/contact">Contact</Link>
        </nav>

    </header>
  );
}


export default PageHeader;