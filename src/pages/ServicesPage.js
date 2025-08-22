import React from "react";
import LinkButton from "../components/LinkButton";
import './ServicesPage.css';


import haircutImg from "../images/compressed/323888897_491351396457578_6649715844991377196_n.jpg";
import extensionsImg from "../images/compressed/358400820_18374772787048705_2192595623391599219_n.jpg";
import colorImg1 from "../images/compressed/322068901_546100264205441_1836984181731726042_n.jpg";
import colorImg2 from "../images/compressed/326636796_118103754508968_8523328225438446959_n.jpg";
import colorImg3 from "../images/compressed/IMG_1985.JPG";


function ServicesPage() {
    return (
        <>
            <section className="services-hero">
                <h1 className="services-header">Services</h1>
                <p className="services-subheading">From sunkissed blondes to seamless extensions, these are the services designed to help you feel confident, cared for, and completely yourself—every day.</p>
                <LinkButton to='https://www.musesalonwc.com/pages/appointments' className='book-button nav-button services-book-button'>Book Now</LinkButton>
                <div className="services-hero-img"></div>
            </section>

            <section className="services-color service-section service-vertical-layout">
                <div className="services-text-container color-text">
                    <h3 className="services-subtitle">Color Services</h3>
                    <p className="services-description">From soft, sun-kissed highlights to rich brunettes and effortless dimension, color is tailored to you. We take a lived-in, low-maintenance approach that grows out gracefully and fits your everyday.</p>
                    <ul className="services-bullet-list">
                        <li>Signature blonding and dimensional color</li>
                        <li>Toners, tints, and face-framing touch-ups</li>
                        <li>Custom color experiences for new clients</li>
                    </ul>
                </div>

                <div className="service-img-container">
                    <img className="img1 service-section-img" src={ colorImg1 } alt="color client"></img>
                    <img className="img2 service-section-img" src={ colorImg2 } alt="color client"></img>
                    <img className="img3 service-section-img" src={ colorImg3 } alt="color client"></img>
                </div>
            </section>

            <div className="single-checkered-border"></div>

            <section className="services-haircuts service-section service-horizontal-layout">
                <div className="services-text-container haircuts-text">
                    <h3 className="services-subtitle">Haircuts</h3>
                    <p className="services-description">Whether you're looking for a fresh shape or a simple refresh, every haircut is customized to your lifestyle, texture, and goals. Expect a thoughtful consultation, relaxing wash, and expert styling to finish.</p>
                    <ul className="services-bullet-list">
                        <li>First-time and returning appointments welcome</li>
                        <li>Ideal for maintenance, subtle changes, or big transformations</li>
                    </ul>
                </div>

                <div className="service-img-container">
                    <img className="service-section-img" src={ haircutImg } alt="Clare blowdrying client's hair"></img>
                </div>
            </section>

            <div className="single-checkered-border"></div>

            <section className="services-extensions service-section service-horizontal-layout">
                <div className="services-text-container extensions-text">
                    <h3 className="services-subtitle">Extenstions</h3>
                    <p className="services-description">Add volume, length, or both with extensions that look and feel like your own hair. Each install is color-matched, cut, and blended for a seamless finish.</p>
                    <ul className="services-bullet-list">
                        <li>Hand-tied and custom-blended options</li>
                        <li>Great for adding fullness or dramatic length</li>
                        <li>In-person consultation required for new installs</li>
                    </ul>
                </div>

                <div className="service-img-container">
                    <img className="service-section-img" src={ extensionsImg } alt="extensions client"></img>
                </div>
            </section>
        </>
    );
}

export default ServicesPage;