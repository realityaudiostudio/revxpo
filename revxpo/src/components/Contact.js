import React from 'react';
import './contact.css';
import { Phone,EnvelopeSimple,WhatsappLogo } from "@phosphor-icons/react";

function Contact() {
  return (
    <div className='cnt' id='contact'>
        <h1>Contact Us</h1>
        <div className="red2">
        </div>
        <div className="aalkar">
            <p>Dobin</p>
            <div className="icos">
            <a href="tel:+918086350450"><Phone size={24} color="#ffffff"/></a>
            <a href="mailto:dobin@gmail.com"> <EnvelopeSimple size={24} color="#ffffff"  /></a>
            <a href="https://wa.me/+918086350450"><WhatsappLogo size={24} color="#ffffff" /></a>
            </div>
            
        </div>
        <div className="aalkar">
            <p>Hisham</p>
            <div className="icos">
            <a href="tel:+918086350450"><Phone size={24} color="#ffffff"/></a>
            <a href="mailto:dobin@gmail.com"> <EnvelopeSimple size={24} color="#ffffff"  /></a>
            <a href="https://wa.me/+918086350450"><WhatsappLogo size={24} color="#ffffff" /></a>
            </div>
            
        </div>
        <div className="aalkar">
            <p>Dobin</p>
            <div className="icos">
            <a href="tel:+918086350450"><Phone size={24} color="#ffffff"/></a>
            <a href="mailto:dobin@gmail.com"> <EnvelopeSimple size={24} color="#ffffff"  /></a>
            <a href="https://wa.me/+918086350450"><WhatsappLogo size={24} color="#ffffff" /></a>
            </div>
            
        </div>
    </div>
  )
}

export default Contact;