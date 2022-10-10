import "./contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_g4ww868', 'template_hpbudig', e.target, 'JA2pGoXsaSjpEaYsZ')
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2> Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <div className="map__wrap">
                <MapContainer center={[35.77738376878495, 10.824267917959604]} zoom={13}>
                  <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                  <Marker position={[35.77738376878495, 10.824267917959604]}>
                      <Popup> GET ME A COFFEE!.</Popup>
                  </Marker>
                </MapContainer>
            </div>

            {
              /* 
              <article className="contact__option">
            <RiMessengerLine/>
            <h4> Messenger</h4>
            <h5> Firas</h5>
            <a href="https://m.me/"> Send a message </a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail/>
            <h4> Email</h4>
            <h5> email@email.com</h5>
            <a href="mailto:email"> Send a message </a>
          </article>
  
              */
         } 
        </div>
        
        {/*  END OF CONTACT OPTIONS */ }
          <form action={form} onSubmit={sendEmail} >
            <input type="text" name="name" placeholder="Your FullName" required />
            <input type="email" name='email'   placeholder="Your Email" required />
            <input type="text" name='subject'   placeholder="Subject" required />

            <textarea name="message" placeholder="Your Message" rows="10" required ></textarea>
          <button type="submit" className="btn btn-primary ">Send </button>
          </form>
        <br />
        <br />
        <br />
      </div>


    </section >
  )
}

export default Contact