import React from 'react';
import './Hero.css'; // Ensure the updated styles are here
import Slider from 'react-slick'; // Using react-slick for the slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const slides = [
    {
      title: 'Mission Impossible',
      subtitle: 'Dead Reckoning (Part One)',
      description:
        'With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld.',
      rating: 'IMDb 7.7',
      studio: 'LIONSGATE',
      image: 'https://img.freepik.com/free-photo/virtual-reality-headset-popcorn_23-2148912759.jpg?t=st=1734735119~exp=1734738719~hmac=479d62204fe5fea424b8672feb36a15b1eb04126316cf10d5a3f534d9686068a&w=1060',
    },
    {
      title: 'The Dark Knight',
      subtitle: 'Rise of a Legend',
      description:
        'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on Gotham, and the caped crusader must accept one of the greatest psychological tests.',
      rating: 'IMDb 9.0',
      studio: 'WARNER BROS',
      image: '/path-to-image2.jpg',
    },
    {
      title: 'Interstellar',
      subtitle: 'The Journey Beyond',
      description:
        'A group of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival, discovering new realms and mysteries beyond imagination.',
      rating: 'IMDb 8.6',
      studio: 'PARAMOUNT',
      image: '/path-to-image3.jpg',
    },
  ];

  return (
    <section className="hero">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <div className="hero-container">
              <nav className="hero-nav">
                <div className="logo"></div>
                <ul className="nav-links">
                  <li>Home</li>
                  <li>Movies</li>
                  <li>Series</li>
                  <li>Collection</li>
                  <li>FAQ</li>
                </ul>
                <div className="nav-icons">
                  <div className="search-icon"></div>
                  <div className="profile-icon"></div>
                  <div className="theme-icon"></div>
                </div>
              </nav>

              <div className="hero-content">
                <div className="hero-info">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>

                  <div className="hero-rating">
                    <span className="stars">⭐⭐⭐⭐☆</span>
                    <span className="imdb">{slide.rating}</span>
                    <span className="studio">{slide.studio}</span>
                  </div>

                  <p className="hero-description">{slide.description}</p>

                  <div className="hero-buttons">
                    <button className="download-btn">Download Now</button>
                    <button className="info-btn">More Info →</button>
                  </div>
                </div>

                <div
                  className="hero-image"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
