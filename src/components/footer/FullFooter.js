import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { SlSocialInstagram } from "react-icons/sl";
import { GoMail } from "react-icons/go";


function FullFooter() {
    return (
        <footer>
            <div className='footer-section-1'>
                <Logo className='footer-logo' />
                
                <div>
                    <p>Website created by <a href='https://www.linkedin.com/in/cethatcher/'>cethatch</a>.</p>
                    <p>Resource attributions <Link to='/resource-attributions'>here</Link>.</p>
                </div>
            </div>

            <div className='footer-section-2'>
                <p>Visit me at <a href="https://www.musesalonwc.com/">Muse Salon</a>.</p>
                <p>131 Pringle Ave, Walnut Creek, CA </p>
                
                <div className='footer-socials-container'>
                    <a href="https://www.instagram.com/hair_by_clare_/"><SlSocialInstagram className='footer-socials'/></a>
                    <Link to="/contact"><GoMail className='footer-socials' /></Link>
                </div>
            </div>

            <div className='footer-section-3'>
                <iframe
                    title="Footer embedded map"
                    style={{border: 10}}
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCKfPYEBwOPMDvCzhBDJNNmoXEbhyJv2v0&q=Muse+Salon,Walnut+Creek,+California&maptype=roadmap"
                    allowFullScreen>
                </iframe>
            </div>

            
        </footer>
    );
}

export default FullFooter;