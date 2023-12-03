import React from 'react';
import './Four.css';
import Card from '../../Components/Card/Card.jsx';
import Button from '../../Components/Button/Button.jsx';

const Four = ({data,im}) => {
  return (
    <div className='Main1'>
        <div className='llayout'>
            <h2>our <span>services</span></h2>
            <div className='pos'>
              <div className='Main2'>
                  <Card imm={im[0]}/>
                  <Card imm={im[1]}/>
              </div>
              <div className='Elip'></div>
            </div>
            <Button data={data}/>
        </div>
    </div>
  )
}

export default Four