import React, { useEffect, useState } from 'react'
import './hero.css';

import hero1 from '../../images/hero.jpg';
import hero2 from '../../images/hero1.jpg';
import hero3 from '../../images/hero2.jpg';
import hero4 from '../../images/hero3.jpg'; // ✅ 4th added

import spinlogo from '../../images/SCIVO_orbit_AI_clean.svg';
import staticlogo from '../../images/staticlog.png';

const HERO_IMAGES = [hero1, hero2, hero3, hero4];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHeroReady, setIsHeroReady] = useState(false);

  // Preload all hero images and mark hero ready (works when navigating back – cached images often don't fire load)
  useEffect(() => {
    const markReady = () => setIsHeroReady(true);
    const firstUrl = HERO_IMAGES[0];

    const img = new Image();
    img.onload = markReady;
    img.onerror = markReady;
    img.src = firstUrl;

    // Cached images may not fire load – treat as ready once complete or after short delay
    if (img.complete) {
      markReady();
    } else {
      const fallback = setTimeout(markReady, 300);
      return () => {
        clearTimeout(fallback);
        img.onload = null;
        img.onerror = null;
      };
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  useEffect(() => {
    HERO_IMAGES.forEach((src) => {
      const preloader = new Image();
      preloader.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`heroSection ${isHeroReady ? 'heroReady' : ''}`}>

      {/* Slides with white side margins */}
      {HERO_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`heroSlide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="heroOverlay" />

      <div className="heroContent">

        {/* Logo */}
        <div className="logoWrapper">
          <div className="spinContainer">
            <img src={spinlogo} alt="Spin Logo" className="spinLogo" />
          </div>
          <div className="staticContainer">
            <img src={staticlogo} alt="Static Logo" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="heroTitle">
          Build a Stable Sales Pipeline Without Expanding Payroll
        </h1>

        {/* Subline */}
        <p className="heroSubtitle">
          Validated B2B leads and automated meeting booking
        </p>

        <div className="heroButtons">
        
        <button className="heroBtn" onClick={() => window.location.href = '/instant-quote'}>
  Get My Instant Quote
</button>

          <button className="heroBtn">
            Book Intro Call
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero;
