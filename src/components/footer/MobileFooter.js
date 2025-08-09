import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { SlSocialInstagram } from "react-icons/sl";
import { GoMail } from "react-icons/go";


function MobileFooter() {
    return (
        <footer>
            <div className='footer-section-1'>
                <Logo className='footer-logo' />
                <div>
                    <p>Visit me at <a href="https://www.musesalonwc.com/">Muse Salon</a>.</p>
                    <p>131 Pringle Ave, Walnut Creek, CA </p>
                </div>
            </div>
            
            <div className='footer-section-2 footer-socials-container'>
                <a href="https://www.instagram.com/hair_by_clare_/"><SlSocialInstagram className='footer-socials'/></a>
                <Link to="/contact"><GoMail className='footer-socials' /></Link>
            </div>

            <div className='footer-section-3'>
                <iframe
                    title="Footer embedded map"
                    style={{border: 10}}
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCKfPYEBwOPMDvCzhBDJNNmoXEbhyJv2v0&q=Muse+Salon,Walnut+Creek,+California&maptype=roadmap"
                    allowFullScreen>
                </iframe>

                <p>Website created by <a href=''>cethatch</a>.</p>
                <p>Resource attributions <a href=''>here</a>.</p>
            </div>
        </footer>
    );
}

export default MobileFooter;