import React from 'react'
import Resume from '../../Components/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
    <a href={Resume} download={Resume} className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a> 
    </div>
  )
}

export default CTA
