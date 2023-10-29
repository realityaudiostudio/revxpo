import React from 'react'
import Vasu from "../imgs/vasu.png";
import Trucker from "../imgs/truck.png";
import Surprise from "../imgs/surprise.png"
import './legends.css';

function Legends() {
  return (
    <div className='mtl' id='event'>
        <h1>Our Premium Legends</h1>
        <div className="red1"></div>
        <div className="persons">
        <img src={Vasu} alt='Parunth'></img>
        <p>Parunth Vasu</p>
        </div>
        <div className="persons">
        <img src={Trucker} alt='Parunth'></img>
        <p>Monster Truck</p>
        </div>
        <div className="persons">
        <img src={Surprise} alt='Parunth'></img>
        <p>Something !</p>
        </div>
    </div>
  )
}

export default Legends;