import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header.jsx';
import One from './One.jsx';

const Home = () => {
  return (
    <div className='Home'>
      <Header/>
      <One/>
    </div>
  );
}

export default Home;
