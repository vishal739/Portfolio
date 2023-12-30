import React from 'react'
import { Component } from 'react'
import "./landingImg.css"
class LandingImg extends Component {
    render() {
        return (
            <div className='landing'>
                <div className='heading'>
                    <p>{this.props.intro}</p>
                    <h1>{this.props.heading}</h1>

                </div>
            </div>
        )
    }
}

export default LandingImg