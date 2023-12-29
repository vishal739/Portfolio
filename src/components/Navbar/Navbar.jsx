import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';
const Navbar = () => {
    const [navClick, setNavClick] = useState(true);
    const handleClick= () => {setNavClick(!navClick)}
    const handleLink= () =>{
        if(!navClick){
            handleClick();
        }
    }
    return (
        <div className="header">
            <Link className='navLogo' to="/">DROiD DEVS</Link>
           
                <ul className={navClick? 'navBar': 'navBar active'}>
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
                    <FaBars size={20}  style={{ color: "#fff" }}/>
                    ) : (
                    <FaTimes size={20} style={{ color: "#fff" }}/>
                )}
            </div>
        </div>
    )
}

export default Navbar