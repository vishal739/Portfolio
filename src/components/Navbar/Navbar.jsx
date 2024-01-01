import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const Navbar = () => {
    const [navClick, setNavClick] = useState(true);
    const handleClick = () => { setNavClick(!navClick) }
    const handleLink = () => {
        if (!navClick) {
            handleClick();
        }
    }
    return (
        <>
        {/* <motion.div
        initial="closed" // Set the initial animation state
        animate={navClick ? 'closed' : 'open'} // Use the motion state based on navClick
        variants={variants} // Use the provided variants
        className="navbar-container"
         ></motion.div> */}
        <div className="navbar-container">
            <div className="header">
                <Link className='navLogo' to="/">DROiD DEVS</Link>

                <ul className={navClick ? 'navBar' : 'navBar active'}>
                    <li>
                        <Link to="/" onClick={handleLink}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={handleLink}>About</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={handleLink}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={handleLink}>Contact</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {navClick ? (
                        <FaBars size={20} style={{ color: "#fff" }} />
                    ) : (
                        <FaTimes size={20} style={{ color: "#fff" }} />
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar