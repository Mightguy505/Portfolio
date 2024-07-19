import React from 'react'
import './about.css'
import ME from '../../Components/ME.png'
import { BsAwardFill } from "react-icons/bs";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ ME } alt="About image" />
          </div>
        </div>
        <div className="about__content">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro facilis blanditiis delectus
          doloremque. Sint laboriosam esse quod fugit.
          Ex quisquam quos quasi dignissimos esse totam
          reprehenderit quidem, earum qui consequuntur vero, voluptatibus dicta.
          Corporis ea magni tenetur saepe adipisci. Eligendi vitae ullam debitis sapiente tenetur.

        </p>
        
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div> </div>
      
    </section>
  )
}

export default About
