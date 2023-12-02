import React from 'react';
import './Header.css';
import Button from '../Button/Button.jsx';
import TRNN from '../../Assets/Images/TRNN.png'

const Header = ({data}) => {
  return (
    <div className='Header'>
        <div className='Head'>
          <nav className='navbuttons'>
            <button id='Home'>Home</button>
            <button id='Aboutus'>About Us</button>
            <button id='Services'>Services</button>
          </nav>
          <img src={TRNN} alt='TRNN logo.png'></img>
          <Button data={data}/>
        </div>
    </div>
  )
}

export default Header