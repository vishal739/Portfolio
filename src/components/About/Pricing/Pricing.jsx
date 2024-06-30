import React from 'react'
import "./pricing.css"
const Pricing = () => {
    return (
            <div class="container">
                <div class="pricingTable10">
                    <div class="pricingTable-header">
                        <h3 class="heading">Basic</h3>
                        <div class="price-value">
                            <span class="currency">$</span> 400
                        </div>
                    </div>
                    <div class="pricing-content">
                        <ul>
                            <li>5 days</li>
                            <li>Upto 3 Pages</li>
                            <li>Featured</li>
                            <li>Responsive Design</li>
                            <li>Upto 3-Month Free Maintenance</li>
                        </ul>
                        <button className="pr-btn">Purchase Now</button>
                    </div>

                </div>

                <div class="pricingTable10">
                    <div class="pricingTable-header">
                        <h3 class="heading">Standard</h3>
                        <div class="price-value">
                            <span class="currency">$</span> 800
                        </div>
                    </div>
                    <div class="pricing-content">
                        <ul>
                        <li>7 days</li>
                            <li>Upto 5 Pages</li>
                            <li>Featured</li>
                            <li>Responsive Design</li>
                            <li>Upto 6-Month Free Maintenance</li>
                            <button className="pr-btn">Purchase Now</button>
                        </ul>
                    </div>

                </div>

                <div class="pricingTable10">
                    <div class="pricingTable-header">
                        
                        <h3 class="heading">Premium</h3>
                        <div class="price-value">
                            <span class="currency">$</span> 1000
                        </div>
                    </div>
                    <div class="pricing-content">
                        <ul>
                        <li>10 days</li>
                            <li>Upto 8 Pages</li>
                            <li>Featured</li>
                            <li>Responsive Design</li>
                            <li>Upto 6-Month Free Maintenance</li>
                            <button className="pr-btn">Purchase Now</button>
                        </ul>
                    </div>
                </div>


            </div>
    )
}

export default Pricing