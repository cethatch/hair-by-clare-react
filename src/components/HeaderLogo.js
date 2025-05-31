import logo from '../images/hair-by-clare-header-750x750.png';
import React, { Component } from 'react';

class HeaderLogo extends Component { 
    render() { 
        return ( 
            <img src={logo} alt={"logo"}/> 
        )  
    }
  }

export default HeaderLogo;