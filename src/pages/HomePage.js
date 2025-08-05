import React from "react";
import AboutMePhoto from "../components/AboutMePhoto";
import LinkButton from "../components/LinkButton"
import HomeCollage from "../components/collage/HomeCollage";
import products from "../images/svgs/noun-hand-soap-7135190.svg";
import hairColor from "../images/svgs/hair-color.svg";
import longHair from "../images/svgs/noun-hair-7088600.svg";

function HomePage() {
    return (
        <>
            
            <section className="home-hero">
                <div className="home-hero-text">
                    <h1 className="home-hero-text-line-1">Hair that feels<wbr /> like a vacation</h1>
                </div>

                <div className="home-hero-img">
                    <h1 className="home-hero-text-line-2">—but better.</h1>
                    <LinkButton to='https://www.musesalonwc.com/pages/appointments' className='book-button nav-button'>Book Now</LinkButton>
                </div>

                <div className="home-hero-description">
                    <h3 className="home-hero-description-text">
                        Modern color, sun-kissed highlights, and seamless extensions, styled to elevate your every day.
                    </h3>
                </div>
            </section>
            
            <section className="collage-container">
                <HomeCollage />
            </section> 

            <section className="home-banner ">
                <div className="banner-item">
                    <img src={ products } alt="hair products" className="banner-img img-1"></img>
                    <p className="banner-text products caption-1">
                        Thoughtfully chosen products that support healthy, luminous hair.
                    </p>
                </div>

                <div className="banner-item">
                    <img src={ hairColor } alt="hair color bowl and brush" className="banner-img img-2"></img>
                    <p className="banner-text highlights caption-2">
                        Custom highlights that are soft, dimensional, and made to grow out beautifully.
                    </p>
                </div>

                <div className="banner-item">
                    <img src={ longHair } alt="figure with long hair" className="banner-img img-3"></img>
                    <p className="banner-text extensions caption-3">
                        Extensions crafted for softness, volume, and an invisible blend.
                    </p>
                </div>
            </section>

            <section className="about-container">
                
                <div className="about-img-wrapper"><AboutMePhoto /></div>
                
                <div className="about-greeting-container">
                    <h2 className="hey-there" id='hey'>Hey there,</h2>
                    
                    <h2 className="im-clare" id="name">I'm Clare.</h2>
                </div>
                
                <div className="about-text-container" id='text-container'>
                    <p>
                    With nearly 10 years of experience in the beauty industry, I’ve had the privilege of
                    training under some of the best in the field, including Chris McMillian, Nine-zero-one
                    Academy, Daniel M Beauty, and many more. My focus is on creating beautiful, sunkissed
                    blondes and natural-looking extensions that enhance my clients’ unique features.
                    </p>
                    <p>
                    I’m deeply passionate about my craft and always strive to elevate the client experience
                    by staying educated on the latest trends and techniques. My goal is to not only give you
                    the hair you’ve always dreamed of but also make you feel confident and empowered every
                    time you leave my chair.
                    </p>

                </div>
                <LinkButton to='/contact' className='contact-button nav-button'>Contact Me</LinkButton>

            </section>


        </>
    );
}

export default HomePage;