import React from 'react'
import Vasu from "../imgs/vasu.png";
import Surprise from "../imgs/surprise.png";
import n1concept from '../imgs/n1.png';
import './legends.css';

function Legends() {
  return (
    <div className='mtl' id='event'>
        <h1 className='pbn'>Powered By N1 Concepts</h1>
        <h1 className='opl'>Premium Presence
of</h1>
        <div className="red1"></div>
        <div className="persons">
        <img src={Vasu} alt='Parunth'></img>
        <p>Eagle Gaming</p>
        </div>

        <div className="persons">
        <img src={n1concept} alt='Parunth'></img>
        <p>N1Concepts</p>
        </div>
        <div className="persons">
        <img src={Surprise} alt='Parunth'></img>
        <p>Something !</p>
        </div>
        
    </div>
  )
}

export default Legends;