import React from 'react'
import "./hero.css"
import image from './developer.png'

import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Midhome from './MidHome/Midhome'
const Hero = () => {
    return (
        <>
            <div className='hero-container'>
                <div className='mask'>
                    <img className="into-img" src={image} alt="developer.png" />
                </div>
                <div className="hero-intro">
                    <p>Welcome to DROiD DEVS, your gateway to exceptional development services!</p>
                    <h1>Elevate Your Digital Presence</h1>
                    <div className="intro-btns">
                        <Link to="/projects" className="btn">PROJECTS</Link>
                        <Link to="/contact" className="btn-light">CONTACT</Link>
                    </div>
                </div>
            </div>
            <Midhome />
            <Footer />
        </>
    )
}

export default Hero;