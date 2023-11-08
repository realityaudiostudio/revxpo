import React from 'react';
import './contact.css';
import { Phone,EnvelopeSimple,WhatsappLogo } from "@phosphor-icons/react";

function Contact() {
  return (
    <div className='cnt' id='contact'>
      <h1>Event Information</h1>
        <div className="red2">
        </div>
        <div className="aalkar">
            <p>Jewel Johnson</p>
            <div className="icos">
            <a href="tel:+917907390580"><Phone size={24} color="#ffffff"/></a>
            <a href="https://revxpo.netlify.app"> <EnvelopeSimple size={24} color="#ffffff"/></a>
            <a href="https://wa.me/+917907390580"><WhatsappLogo size={24} color="#ffffff" /></a>
            </div>
            
        </div>
        <div className="aalkar">
            <p>Shone shiby</p>
            <div className="icos">
            <a href="tel:+916282510096"><Phone size={24} color="#ffffff"/></a>
            <a href="https://revxpo.netlify.app"> <EnvelopeSimple size={24} color="#ffffff"  /></a>
            <a href="https://wa.me/+916282510096"><WhatsappLogo size={24} color="#ffffff" /></a>
            </div>
            
        </div>
        <h1>Ticket Information</h1>
        <div className="red2">
        </div>
        <div className="aalkar">
            <p>Dobin V Steephen</p>
            <div className="icos">
            <a href="tel:+919188064755"><Phone size={24} color="#ffffff"/></a>
            <a href="https://revxpo.netlify.app"> <EnvelopeSimple size={24} color="#ffffff"  /></a>
            <a href="https://wa.me/+919188064755"><WhatsappLogo size={24} color="#ffffff" /></a>
            </div>
            
        </div>
        
    </div>
  )
}

export default Contact;