import React from 'react';
import './Five.css';
import '../../Components/Button/Button.jsx';
import five from '../../Assets/Images/five.png';
import Button from '../../Components/Button/Button.jsx';

const Five = ({data}) => {
  return (
    <div className='fiveMain'>
        <img src={five} alt='five.png'/>
        <div className='grd'></div>
        <div className='clr'>
            <h2>What are you waiting for?</h2>
            <Button data={data}/>
        </div>
    </div>
  )
}

export default Five