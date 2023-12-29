import React from 'react'
import "./midhome.css"
const web = require('./Icons/web.png');
const app = require('./Icons/mobile.png');
const uiux = require('./Icons/uiux.png');
const Midhome = () => {
    return (
        <div className="bottom-container">
            <div className="bottom-intro">
                <h1>WORK, WE CAN DO FOR YOU</h1>
            </div>
            <div className="bottom-products">
                <div className="box">
                    <img src={web} alt="WebDevs" />
                    <h3 className="work-name">Web Development</h3>
                    <p>Your digital presence begins with a stunning website. We specialize in crafting bespoke web solutions that not only look great but also deliver exceptional user experiences. Elevate your online presence with our expert web development services.</p>
                </div>
                <div className="box">
                    <img src={app} alt="WebDevs" />
                    <h3 className="work-name">App Development</h3>
                    <p>Transform your ideas into powerful mobile applications. Our app development services cover a wide range of platforms, ensuring that your app reaches your target audience seamlessly. From concept to launch, we bring your vision to life in the form of intuitive and feature-rich applications.</p>
                </div>
                <div className="box">
                    <img src={uiux} alt="WebDevs" />
                    <h3 className="work-name">Ui/UX Design</h3>
                    <p>Immerse your audience in a visually appealing and user-friendly digital experience. Our Ui/UX design services focus on creating interfaces that captivate users and enhance usability. Whether you need a brand-new design or a revamp of your existing interface, we've got the creativity and expertise to make it happen.</p>
                </div>
            </div>

        </div>
    )
}

export default Midhome