import React from 'react'

import './contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs
      .sendForm('service_hv3jizn', 'template_ne6fqsx', form.current, {
        publicKey: '-wl_x9leWxX0NQAHA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
         <article className="contact__option">
         <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>omharshvnayyar7@gmail.com</h5>
          <a href="mailto:omharshvnayyar7@gmail.com" target='_blank'>Send a Message</a>
         </article>
         <article className="contact__option">
         <FaTelegram className='contact__option-icon'/>
          <h4>Telegram</h4>
          <h5>t.me/harshnayyar41</h5>
          <a href="https://t.me/harshnayyar41" target='_blank'>Send a Message</a>
         </article>
         <article className="contact__option">
         <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp Number</h4>
          <h5>9115735559</h5>
          <a href="https://api.whatsapp.com/send?phone=9115735559" target='_blank'>Send a Message</a>
         </article>
        </div>
        <form action='POST' ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows={7} placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary"  >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
