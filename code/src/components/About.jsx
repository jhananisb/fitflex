import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/about-Img.png'

const About = () => {
  return (
    <div className='about-container' id='about'>

      <div className="about-image">
          <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
          <span>
            <div className="about-line" />
            <h5>About Us</h5>
          </span>
          <h3>Embark on a Fitness with CORE FIT.. </h3>
          <p>We are committed to promoting healthier lifestyles through fitness and wellness.
          We emphasize consistency as the foundation of strength and long-term improvement.
          Together, we strive to build a stronger, fitter, and healthier community.</p>
      </div>

    </div>
  )
}

export default About