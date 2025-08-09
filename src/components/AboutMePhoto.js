// import photo from '../images/compressed/about-me-photo-500x750.jpg';
import photo from '../images/compressed/about-me-1500x2200.jpg';

import React, { Component } from 'react';

class AboutMePhoto extends Component { 
    render() { 
        return ( 
            <img className="about-img" src={photo} alt={"Clare Cullen"}/> 
        )  
    }
  }

export default AboutMePhoto;