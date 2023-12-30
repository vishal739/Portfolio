import React from 'react'
import "./about.css"
import Footer from '../Footer/Footer'
import LandingImg from '../LandingImg/LandingImg'
import Pricing from './Pricing/Pricing'
const About = () => {
  const head = "Engineered for Digital Brilliance"
  const intro1 = "DROiD DEVS: Pioneering Digital Excellence, Turning Ideas into Powerful Realities"


  return (
    <>
      <LandingImg heading={head} intro={intro1} />
      <div className='about'>
        <div className="about-container">
          <div className="price-intro">
            <h1>PRICE TABLE</h1>
          </div>
          <Pricing />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About