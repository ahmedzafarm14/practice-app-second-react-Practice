import React from 'react';
import './Card.css';

const Card = ({imm}) => {
  return (
    <div className='inBox'>
        <img src={imm.imgg} alt='img.png' className='imggg'/>
        <h4>{imm.h}</h4>
    </div>
  )
}
export default Card