import React from 'react';
import './Second.css';
import Button from '../../Components/Button/Button.jsx';
import Renja1 from '../../Assets/Images/renja.png'
import Renja2 from '../../Assets/Images/renja2.png'

const Second = ({data}) => {
  return (
    <div className='second'>
        <div className='layout'>
            <div className='div1'>
                <img src={Renja1} alt='Renja1.png' className='img1'/>
                <img src={Renja2} alt='Renja2.png' className='img2'/>
                <div className='Elips'></div>
            </div>
            <div className='div2'>
                <h2>about <span>shellinah</span></h2>
                <p>I never imagined becoming a public speaker, given my extreme shyness in my earlier years. Ordering food at a food court was a daunting task for me, and I relied on my sister to help. But as a teenager, I decided it was time for a change. I enrolled in a debating class called MUN, and though I struggled at first, I persevered and improved, eventually earning a spot to represent my school in England. In college, I ventured into network marketing, initially terrified of selling, but I pushed my boundaries and became the top-ranking woman in South Africa for the company. This journey led me to discover my passion for motivational speaking and helping</p>
                <Button data={data}/>
            </div>
        </div>
    </div>
  )
}

export default Second