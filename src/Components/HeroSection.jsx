import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slidesData = [
    { src: "images/first.jpg", text: "If you don't have a website, that means you don't have a business." },
    { src: "images/Second.jpg", text: "If you don't advertise your business, you will not have clients. Businesses collapse because of insufficient clients." },
    { src: "images/Third.jpg", text: "We will create a MOAT for our clients so that their business is ahead of the competition." },
    { src: "images/Fourth.jpg", text: "We are the best, serve the best." },
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
    };

    return (
        <section className="hero-section bg-warning">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="slide-item">
                        <img src={slide.src} alt={`Slide ${index}`} />
                        <div className="overlay">
                            <div className={`text ${currentSlide === index ? 'active' : ''}`}>
                                <h2>
                                    <span className="highlight">{slide.text}</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default HeroSection;
