import React from 'react';
import './Hero.css'
import bannerImg from '../../assets/images/hero-image.png'

function Hero() {
  return (
    <div className='hero centered'>
        <div className='hero-holder'>
            <h1>100 Thousand Songs, ad-free Over thousands podcast episodes</h1>

            <div className='hero-image'>
                <img src={bannerImg} alt="hero-image" />
            </div>
        </div>
    </div>
  )
}

export default Hero