import React from 'react';
import './Header.css';
import icon1 from '../images/icon1.svg';
import icon2 from '../images/icon2.svg';
import icon3 from '../images/icon3.svg';
import icon4 from '../images/icon4.svg';
import icon5 from '../images/icon5.svg';
import icon6 from '../images/icon6.svg';
import icon7 from '../images/icon7.svg';
import icon8 from '../images/icon8.svg';
import icon9 from '../images/icon9.svg';
import icon10 from '../images/icon10.svg';
import icon11 from '../images/icon11.svg';

export default function Companies() {
  return (
    <div className='Companies-section'>
        <div className='Companies-header'>
            <p className='Companies-heading'>Trusted by Leading Businesses and Industries</p>
            <p className='Companies-description'>Partnering with top brands to deliver reliable, energy-efficient lighting solutions for every space</p>
        </div>
        <div className='Companies-icons'>
            <img className='icons-images' src={icon1} alt='' />
            <img className='icons-images' src={icon2} alt='' />
            <img className='icons-images' src={icon3} alt='' />
            <img className='icons-images' src={icon4} alt='' />
            <img className='icons-images' src={icon5} alt='' />
            <img className='icons-images' src={icon6} alt='' />
        </div>
        <div className='Companies-icons'>
        <img className='icons-images' src={icon7} alt='' />
        <img className='icons-images' src={icon8} alt='' />
        <img className='icons-images' src={icon9} alt='' />
        <img className='icons-images' src={icon10} alt='' />
        <img className='icons-images' src={icon11} alt='' />
        </div>
    </div>
  )
}
