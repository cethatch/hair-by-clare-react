import React from "react";
import LinkButton from "../components/LinkButton";
import PortfolioGallery from "../components/PortfolioGallery";

function PortfolioPage() {
    return (
        <main>
            <section className="portfolio-hero">
                <div className="portfolio-hero-heading-container">
                    <h1 className="portfolio-hero-text-1">Transformations that still feel like</h1>
                    <h1 className="portfolio-hero-text-2">you.</h1>
                </div>
                <div className="portfolio-hero-description-container">
                    <h4 className="portfolio-hero-description">
                        My work centers around lived-in, dimensional styles that are thoughtfully 
                        crafted to bring out your natural beauty, so you feel like the most confident 
                        version of yourself.
                    </h4>
                </div>

                <div className="portfolio-hero-img"></div>
                <div className="portfolio-hero-sun-doodle"></div>

                <LinkButton to='https://www.musesalonwc.com/pages/appointments' className='book-button nav-button'>Book Now</LinkButton>
            </section>

            <div className="double-border-container">
                
            </div>

            <section className="portfolio-gallery-container">
                <PortfolioGallery className="portfolio-gallery"/>
            </section>
        </main>
    );
}

export default PortfolioPage;