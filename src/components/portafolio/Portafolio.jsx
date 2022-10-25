import React from 'react'
import './portafolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Pomo from '../../assets/pomodoro.png'
import Formu from '../../assets/form.png'
import Jsontocsv from '../../assets/jsontocsv.png'  
import Onetimesecret from '../../assets/onetimesecret.png'  
import Urlshortener from '../../assets/urlshortener.png'  
import Poke from '../../assets/Poke.png'  
const Portafolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Pomo} alt=""/>
          </div>
          <h3>Pomodoro</h3>
          <div className="portafolio-item-cta">
            <a href='https://github.com/1Optimus/Pomodoro' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <a href='https://pomodoro-ecru-chi.vercel.app/' className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Jsontocsv} alt=""/>
          </div>
          <h3>Json to CSV</h3>
          <div className="portafolio-item-cta">
            <a href='https://github.com/1Optimus/jsontocsv' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <a href='https://jsontocsv-1optimus.vercel.app/' className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Formu} alt=""/>
          </div>
          <h3>Form</h3>
          <div className="portafolio-item-cta">
            <a href='https://github.com/1Optimus/Form' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <a href='https://form-woad-five.vercel.app/' className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Poke} alt=""/>
          </div>
          <h3>Pokedex</h3>
          <div className="portafolio-item-cta">
            <a href='https://github.com/1Optimus/Pokedex' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Onetimesecret} alt=""/>
          </div>
          <h3>One time secret</h3>
          <div className="portafolio-item-cta">
          <a href='https://github.com/1Optimus/onetimesecret' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img src={Urlshortener} alt=""/>
          </div>
          <h3>Url shortener</h3>
          <div className="portafolio-item-cta">
            <a href='https://github.com/1Optimus/urlshortener' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portafolio
