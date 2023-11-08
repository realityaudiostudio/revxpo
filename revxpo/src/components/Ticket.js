import React from 'react';
import './ticket.css';
import Ticketer from "../imgs/ticket.png"

function Ticket() {
    const handleButtonClick = () => {
        // Redirect to www.google.com when the button is clicked
        window.location.href = 'https://forms.gle/KjbtwhqkUawMNuAW6';
      };
    
  return (
    <div className='ticks' id='registration'>
        <h1>We are Welcoming...</h1>
        <img src={Ticketer} alt='ticket'></img>
        <p className='ticks1'><strike>₹80</strike></p>
        <p className='ticks2'>₹50</p>
        <h1>Lucky Draw<br></br> Cash Price</h1>
        <p className='ticks2'>1 st Price : ₹5000</p>
        <p className='ticks2'>2 nd Price : ₹2000</p>
        <p className='ticks2'>3 rd Price : ₹1000</p>
        <button className='tickbt' onClick={handleButtonClick}>Grab Tickets</button>
    </div>
  )
}

export default Ticket