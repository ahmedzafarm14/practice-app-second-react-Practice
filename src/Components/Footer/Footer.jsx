import React from 'react';
import './Footer.css';
import Logo from '../../Assets/Images/TRNN.png';
import Fb from '../../Assets/Images/fb.png';
import Tiktok from '../../Assets/Images/tiktok.png';
import Twiter from '../../Assets/Images/twitter.png';
import Instagram from '../../Assets/Images/instagram.png';
import Email from '../../Assets/Images/email.png';
import Phone from '../../Assets/Images/phon.png';

const Footer = () => {
  return (
    <div className='footerstyle'>
      <div className='elipo1'></div>
      <div className='footLayouter'>
        <div className='content'>
          <div className='leftSide'>
            <img src={Logo} alt='logo.png'/>
            <div className='icons'>
            <a href='https://www.Tiktok.com' target="_blank" rel="noreferrer"><img src={Tiktok} alt='logo.png'/></a>
            <a href='https://facebook.com' target="_blank" rel="noreferrer"><img src={Fb} alt='logo.png'/></a>
            <a href='https://x.com' target="_blank" rel="noreferrer"><img src={Twiter} alt='logo.png'/></a>
            <a href='https://instagram.com' target="_blank" rel="noreferrer"><img src={Instagram} alt='logo.png'/></a>
            </div>
          </div>
          <div className='rightSide'>
            <div className='quicklink'>
              <ul>
                <h4>Quick Links</h4>
                <li><button>About Us</button></li>
                <li><button>Services</button></li>
                <li><button>Contact Us</button></li>
                <li><button>Privacy Policy</button></li>
              </ul>
            </div>
            <div className='cntc'>
              <h4>Contact Us</h4>
              <a href="tel:+923034907627" style={{textDecoration: 'none', color: 'white'}}><img src={Phone} alt='Phone.png' /> +92-303-4907627</a>
              <a href='mailto:abc@gmail.com' style={{textDecoration: 'none', color: 'white'}}><img src={Email} alt='email.png'/> abc@gmail.com</a>
            </div>
          </div>
        </div>
        <div className='hrr'>
          <hr/>
          <p>© 2023 <span>Train with Shellinah</span>, all rights reserved</p>
        </div>
      </div>
      <div className='elipo2'></div>
    </div>
  )
}

export default Footer