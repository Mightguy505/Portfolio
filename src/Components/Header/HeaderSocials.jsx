import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/harshnayyar-fullstackdeveloper/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Mightguy505" target='_blank'><IoLogoGithub /></a>   
    </div>
  )
}

export default HeaderSocials
