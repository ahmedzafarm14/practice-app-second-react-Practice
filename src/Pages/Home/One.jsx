import React from 'react';
import './One.css';
import Button from '../../Components/Button/Button';

const One = ({data}) => {
  return (
    <div className='Top'>
        <div class="ellipse"></div>
        <div className='txxt'>
          <p>personal training at home for women</p>
          <h2>BECOME YOUR BESTSELF WITH <span> TRAIN WITH SHELLINAH </span></h2>
          <Button data={data}/>
        </div>
        <div class="ellipsee"></div>
    </div>
  )
}

export default One