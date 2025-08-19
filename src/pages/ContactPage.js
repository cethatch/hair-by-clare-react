import React from "react";

function ContactPage() {
    return (
        <>
            <div className="contact-top-banner-container">
                <div className="checkered-border-left checkered-border-half"></div>
                <h1>Contact Me</h1>
                <div className="checkered-border-right checkered-border-half"></div>
                <div className="checkered-border-mobile"></div>
            </div>

            <div className="form-container">
                <form>
                    <h2>Online Inquiry</h2>
                    <p>Have a question prior to booking an appointment? Submit an inquiry below.</p>
                    <input type="text" placeholder="Name"></input>
                    <input type="text" placeholder="Phone Number"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="Message"></input>
                </form>
            </div>

            <div className="details-container">
                <h2 className="contact-subtitle salon-details-header">Salon Details</h2>
                <div className="muse-details-container">
                    <h3 className="muse-header">Muse Salon</h3>
                    <p className="muse-address salon-address">131 Pringle Ave, Walnut Creek, CA 94596</p>
                    <p className="muse-hours salon-hours">Hours: Monday - Saturday, 9am - 5pm</p>
                    <p className="muse-hyperlink salon-hyperlink">www.musesalonwc.com</p>
                </div>
            </div>
        </>
    );
}

export default ContactPage;