import React from 'react';
import './Footer.css';
import youtubeLogo from "./Images/youtubeLogo.png";
import linkedInLogo from "./Images/linkedinLogo.png";
import twitterLogo from "./Images/twitterLogo.avif";
import facebookLogo from "./Images/facebookLogo.avif";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h5 className="color underline-on-hover">Registered Office</h5>
        <p className='color'>RDB Boulevard, 8th Floor, Plot K 1, Sector 5, Block EP and GP, Kolkata 700091, India.</p>
      
    
      <div className="footer__section">
      <h5 className="color underline-on-hover">Contact Us</h5>
        <p className='color'>+91-9836913164</p>
        <p className='color'>+1-917-730-4660</p>
        
        <img src={linkedInLogo} alt="Youtube Logo"  style={{height: "25px", width: "25px" , margin: "0 5px"}} />
        <img src={twitterLogo} alt="Youtube Logo"  style={{height: "25px", width: "25px" , margin: "0 5px"}} />
        <img src={facebookLogo} alt="Youtube Logo"  style={{height: "25px", width: "25px" , margin: "0 5px"}} />
        <img src={youtubeLogo} alt="Youtube Logo"  style={{height: "25px", width: "25px" , margin: "0 5px"}} />
        <p><a href="mailto:sales@sheeranalyticsandinsights.com" className='color'>sales@sheeranalyticsandinsights.com</a></p>
       
      </div>
      </div>
      <div className="footer__section">
        <span className='Stay_Informed footer__bottom footer__top footer1'>  Stay Informed </span> 
        <form>
          <input type="email" placeholder="Your Email" /><br></br> <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
{/*       
      <div className="footer__section2">
        <p className='color'>&copy; 2023 Sheer Analytics and Insights Pvt. Ltd.</p>
        <p className='color'>PayPal Verified</p>
      </div> */}
    </footer>
  );
}

export default Footer;