import React from 'react';
import './One.css';
import Button from '../../Components/Button/Button';
import Svg from '../../Assets/SVGs/Star.svg';

const One = ({data}) => {
  return (
    <div className='Top'>
        <div className="ellipse"></div>
        <div className='txxt'>
          <p>personal training at home for women</p>
          <h2>BECOME YOUR BESTSELF WITH <span> TRAIN WITH SHELLINAH </span></h2>
          <Button data={data}/>
        </div>
        <div className="ellipsee"></div>
        <div className='rectangle1'>
          <dvi className='txtt'><img src={Svg} alt='Svg.com'/><p>Affordable Training</p></dvi>
          <dvi className='txtt'><img src={Svg} alt='Svg.com'/><p>In-Person Classes</p></dvi>
          <dvi className='txtt'><img src={Svg} alt='Svg.com'/><p>5 Star Rated Personal Trainer</p></dvi>
        </div>
    </div>
  )
}

export default One