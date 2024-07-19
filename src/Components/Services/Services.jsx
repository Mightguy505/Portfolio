import React from 'react'
import './services.css'
import { IoMdCheckmark } from "react-icons/io";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
          <article className='service'>
                 <div className="service__head">
                  <h3>UI/UX Design</h3>
                 </div>
                 <ul className='service__list'>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                 </ul>
          </article>
          
          <article className='service'>
                 <div className="service__head">
                  <h3>Web Development</h3>
                 </div>
                 <ul className='service__list'>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                 </ul>
          </article>

          <article className='service'>
                 <div className="service__head">
                  <h3>Content Creation</h3>
                 </div>
                 <ul className='service__list'>
                 
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                  <li><IoMdCheckmark  className='service_list-icon'/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></li>
                 </ul>
          </article>
        
      </div>
    </section>
  )
}

export default Services
