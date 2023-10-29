import React from 'react';
import './ticket.css';
import Ticketer from "../imgs/ticket.png"

function Ticket() {
    const handleButtonClick = () => {
        // Redirect to www.google.com when the button is clicked
        window.location.href = 'https://www.google.com';
      };
    
  return (
    <div className='ticks' id='registration'>
        <h1>We are waiting...</h1>
        <img src={Ticketer} alt='ticket'></img>
        <button className='tickbt' onClick={handleButtonClick}>Grab Tickets</button>
    </div>
  )
}

export default Ticket