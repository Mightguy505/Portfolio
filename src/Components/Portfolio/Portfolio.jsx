import React from 'react'
import './portfolio.css'
import Githubimage1 from '../../../src/Components/Githubimage1.jpg'
import githubimage2 from '../../../src/Components/githubimage2.png'
import github3 from '../../../src/Components/github3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Githubimage1} alt="Loading" />
          </div>
            <h3>Movie Recommendation System</h3>
            <div className="portfolio__item-cta">
             <a href="https://github.com/Mightguy505/Sentiment-Analysis" className='btn'>Github</a>
             </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={githubimage2} alt="Loading" />
          </div>
            <h3>React News App</h3>
            <div className="portfolio__item-cta">
             <a href="https://github.com/Mightguy505/Sentiment-Analysis" className='btn'>Github</a></div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={github3} alt="Loading" />
          </div>
            <h3>Dribbble Multi Login Page</h3>
            <div className="portfolio__item-cta">
             <a href="https://github.com/Mightguy505/Sentiment-Analysis" className='btn'>Github</a></div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
