import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>Core Fit</h5>
        </span>
        <h2>Fitness is a lifestyle not a phase</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero