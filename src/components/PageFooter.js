import React from 'react';
import HeaderLogo from './HeaderLogo';
import { SlSocialInstagram } from "react-icons/sl";
import { MdMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { GoMail } from "react-icons/go";




function PageFooter() {
  return (
    <header id="footer">

      <div id="footerLeft">
        <HeaderLogo />
      </div>

      <div id="footerMiddle">
        <div id="footerInfo">
          <p>Visit me at <a href="https://www.stemsalon.com/">Stem Salon</a>.</p>
          <p>1698 Bonanza Street Walnut Creek, CA </p>
          <p id="socialLinks">
            <a href="https://www.instagram.com/hair_by_clare_/"><SlSocialInstagram /></a>
            <Link to="/contact"><GoMail /></Link>  
          </p>
        </div>

        

      </div>

      <div>
      <iframe
        title="Footer embedded map"
        width="400"
        height="250"
        frameborder="0" style={{border: 10, margin: 30}}
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCKfPYEBwOPMDvCzhBDJNNmoXEbhyJv2v0&q=Stem+Salon,Walnut+Creek,+California&maptype=roadmap"
        allowfullscreen>
      </iframe>
      </div>
        
    </header>
  );
}

export default PageFooter;