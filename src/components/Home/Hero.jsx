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
                    <p>Hi, I'M A FREELANCER</p>
                    <h1>Front-End Developer</h1>
                    <div className="intro-btns">
                        <Link to="/projects" className="btn">PROJECTS</Link>
                        <Link to="/contact" className="btn btn-light">CONTACT</Link>
                    </div>
                </div>
            </div>
            <Midhome/>
            <Footer />
        </>
    )
}

export default Hero;