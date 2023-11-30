import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header.jsx';
import One from './One.jsx';

const Home = () => {
  const Arr=[{id:1,txt:"CONTACT US"},
             {id:2,txt:"OUR SERVICES"},
             {id:3,txt:"LEARN MORE"},
             {id:4,txt:"VIEW ALL SERVICES"}
  ]
  return (
    <div className='Home'>
      <Header data={Arr[0]}/>
      <One data={Arr[1]}/>
    </div>
  );
}

export default Home;
