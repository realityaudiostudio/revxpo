import React from 'react'
import './home.css';
import Navbar from "./Navbar";
import revxpo from '../imgs/revh.png';

function Homepg() {
  return (
    <div className='mnbg'>
        <div className="items">
          <div className='sthalam'></div>
       <Navbar></Navbar>
    <img src={revxpo} className='revhh' alt='hi'></img>
   </div> </div>
  )
}

export default Homepg;