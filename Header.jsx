import React from 'react';
import "./Header.css";
import facebook from '../images/facebookicon.svg';
import location from '../images/location.svg';
import phone from '../images/phone.svg';
import mail from '../images/mail.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import arrow from '../images/arrow.svg';
import menu from '../images/menu.svg';
import stanjo from '../images/stanjo-logo.svg';

export const Header = () => {
  return (
    <header className='header'>
      <div className='top-header'>
        <div className='contact-section'>
           <img src={location} className='image' alt='' />
           Hyderabad,INDIA
           <img src={phone} className='image'alt='' />
           +91 6305858219
           <img src={mail} className='image'alt='' />
           info@stanjo.in
        </div>
        <div className='socialmedia-section'>
          <img src={facebook} alt='' />
          <img src={instagram} alt='' />
          <img src={linkedin} alt='' />
          <img src={twitter} alt='' />
        </div>
      </div>
      <div className='bottom-header'>
        <img src={stanjo} alt='' width={70}/>
        <div>Home</div>
        <div>About Us | Certifications</div>
        <div>
          Products
          <img src={arrow} alt='' />
          <div className='dropdown'>
            <div>sub</div>
            <div>sub</div>
            <div>sub</div>
          </div>
        </div>
        <div>LM79 Reports</div>
        <div>Shop</div>
        <div>Contact Us</div>
        <div>Calculations</div>
        <img src={menu} alt='' width={50} height={30}  />
      </div>
    </header>
  )
}
