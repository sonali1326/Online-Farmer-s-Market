import React from 'react' 
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'> 
    <div className='footer-content'>  
        <div className='footer-content-left'>  
            <img src ={assets.generatedImage} className='logo' width= "180" alt=""/> 
            <p> Online Farmers Market is dedicated to bringing you fresh, locally-sourced fruits and vegetables straight from trusted farmers. Our goal is to make healthy eating simple, affordable, and accessible to every household.</p> 
            <div className='footer-social-icons'>  
                <img src={assets.facebook_icon} alt=""/> 
                <img src={assets.twitter_icon} alt=""/> 
                <img src={assets.linkedin_icon} alt=""/>
                

            </div>
        </div>   

        <div className='footer-content-center'>  
            <h2> COMPANY</h2> 
            <ul>  
                <li>Privacy Policy</li>  
                <li>Delivery</li>

            </ul>
        </div> 

        <div className='footer-content-right'>  
            <h2>GET IN TOUCH</h2> 
            <ul>
                <li>+1-234-678-2319</li> 
                <li>contact@onlinesfarmermarket.com</li>
            </ul>
        </div>  

        

    </div> 
    <hr/> 
    <p className='footer-coopyright'> <b>© 2025 Rooftop Harvest.</b> All Rights Reserved.
Unauthorized use, reproduction, or distribution of any content, images, or designs on this website is strictly prohibited. </p>
      
    </div>
  )
}

export default Footer
