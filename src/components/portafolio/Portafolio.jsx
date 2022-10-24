import React from 'react'
import './portafolio.css'
import Img1 from '../../assets/portfolio1.jpg'
const Portafolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Img1} alt=""/>
          </div>
          <h3>Pomodoro</h3>
          <div className="portafolio-item-cta">
            <a href='sdfsdfsdf' className='btn'  target='_blank' rel="noreferrer">Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Img1} alt=""/>
          </div>
          <h3>Json to CSV</h3>
          <div className="portafolio-item-cta">
            <a href='sdfsdfsdf' className='btn'  target='_blank' rel="noreferrer">Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Img1} alt=""/>
          </div>
          <h3>Form</h3>
          <div className="portafolio-item-cta">
            <a href='sdfsdfsdf' className='btn'  target='_blank' rel="noreferrer">Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Img1} alt=""/>
          </div>
          <h3>Pokedex</h3>
          <div className="portafolio-item-cta">
            <a href='sdfsdfsdf' className='btn'  target='_blank' rel="noreferrer">Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Img1} alt=""/>
          </div>
          <h3>One time secret</h3>
          <div className="portafolio-item-cta">
            <a href='sdfsdfsdf' className='btn'  target='_blank' rel="noreferrer">Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Img1} alt=""/>
          </div>
          <h3>Url shortener</h3>
          <div className="portafolio-item-cta">
            <a href='sdfsdfsdf' className='btn'  target='_blank' rel="noreferrer">Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portafolio
