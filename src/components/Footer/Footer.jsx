import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import "./footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <div className="location">
                    <FaHome size={25} style={{ color: "#fff", marginRight: '2rem' }} />
                    <h4>Indore, Madhya Pardesh</h4>
                </div>
                <div className="phone">
                    <FaPhone size={25} style={{ color: "#fff", marginRight: '2rem' }} />
                    <h4>+91-8964919528</h4>
                </div>
                <div className="mail">
                    <FaMailBulk size={25} style={{ color: "#fff", marginRight: '2rem' }} />
                    <h4>droiddevs2022@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <div className="footer-details">
                    <h4>About the Company</h4>
                    <p>Welcome to DROiD DEVS, where innovation meets expertise! I'm Kratika Jain, the proud CEO and Founder. At our company, we thrive on embracing challenging projects and turning visionary ideas into reality. With a passion for excellence, we are dedicated to delivering cutting-edge solutions that exceed expectations. Join us on a journey of creativity, collaboration, and unparalleled commitment to your success.</p>

                </div>
                <div className="footer-logo">
                    <FaFacebook size={25} style={{ color: "#fff", marginRight: '2rem' }} />
                    <FaTwitter size={25} style={{ color: "#fff", marginRight: '2rem' }} />
                    <FaLinkedin size={25} style={{ color: "#fff", marginRight: '2rem' }} />
                </div>
            </div>
        </div>

    )
}

export default Footer