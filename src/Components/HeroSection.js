import React from 'react';
import '../App.css';
import './HeroSection.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function HeroSection() {
    return(
        <div className="img" >
              <AwesomeSlider>
                <div data-src="/images/img-home.png" />
                <div data-src="/images/hero-image1.jpg" />
                <div data-src="/images/hero-image.png" />
                <div data-src="/images/hero-image2.jpg" />
              </AwesomeSlider>
        </div>
    );  
}
export default HeroSection;