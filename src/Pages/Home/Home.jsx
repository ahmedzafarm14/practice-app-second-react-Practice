import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header.jsx';
import One from './One.jsx';
import Second from './Second.jsx';
import Third from './Third.jsx';
import Four from './Four.jsx';
import cd1 from '../../Assets/Images/cd1.png';
import cd2 from '../../Assets/Images/cd2.png';

const Home = () => {
  const Arr=[{id:1,txt:"CONTACT US"},
             {id:2,txt:"OUR SERVICES"},
             {id:3,txt:"LEARN MORE"},
             {id:4,txt:"VIEW ALL SERVICES"}
  ]
  const obj=[
    {h:"Service Name 1", imgg:cd1},
    {h:"swimming classes", imgg:cd2}
  ]
  return (
    <div className='Home'>
      <Header data={Arr[0]}/>
      <One data={Arr[1]}/>
      <Second data={Arr[2]}/>
      <Third/>
      <Four data={Arr[3]} im={obj}/>
    </div>
  );
}

export default Home;
