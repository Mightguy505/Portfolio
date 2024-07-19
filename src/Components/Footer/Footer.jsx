import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";


const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>Harsh Nayyar</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href=""></a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/harshnayyar-fullstackdeveloper/" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/Mightguy505" target='_blank'><IoLogoGithub /></a>
      <a href="https://t.me/harshnayyar41" target='_blank'><FaTelegram /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Harsh Nayyar Portfolio.All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer
