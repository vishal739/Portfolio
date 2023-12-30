import React from 'react'
import "./midhome.css"
import MidTry from '../MidHome2/MidTry'
const web = 'Icons/web.png';
const app = 'Icons/mobile.png';
const uiux = 'Icons/uiux.png';
const Midhome = () => {
    return (
        <div className="bottom-container">
            <div className="bottom-intro">
                <h1>WORK, WE CAN DO FOR YOU</h1>
            </div>
            <div className="bottom-products">
                
                <MidTry image={web} alt="Web Image" shadow={"Get you website now"} heading={"Web Development"} description={"Your digital presence begins with a stunning website. We specialize in crafting bespoke web solutions that not only look great but also deliver exceptional user experiences. Elevate your online presence with our expert web development services."}/>

                <MidTry image={app} alt="App Image" shadow={"Get you App now"} heading={"App Development"} description={"Transform your ideas into powerful mobile applications. Our app development services cover a wide range of platforms, ensuring that your app reaches your target audience seamlessly. From concept to launch, we bring your vision to life in the form of intuitive and feature-rich applications."}/>

                <MidTry image={uiux} alt="UiUX Image" shadow={"Best Ui/UX design"} heading={"Ui/UX Design"} description={"Immerse your audience in a visually appealing and user-friendly digital experience. Our Ui/UX design services focus on creating interfaces that captivate users and enhance usability. Whether you need a brand-new design or a revamp of your existing interface, we've got the creativity and expertise to make it happen."}/>
            </div>

        </div>
    )
}

export default Midhome