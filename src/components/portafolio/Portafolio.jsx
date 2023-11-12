import React, { useState, useContext } from 'react'
import{ motion } from "framer-motion"
import './portafolio.css'
import data from './namesImages.json'
import Modal from './modal/Modal'
import Pomo from '../../assets/pomodoro.png'
import Formu from '../../assets/form.png'
import Jsontocsv from '../../assets/jsontocsv.png'  
import Onetimesecret from '../../assets/onetimesecret.png'  
import Urlshortener from '../../assets/urlshortener.png'  
import Residential from '../../assets/r3.png'  
import GCP from '../../assets/GCP.jpg'  
import Poke from '../../assets/Poke3.png'  
import { themeContext } from "../../Context";
const Portafolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [activeModal, setActiveModal]= useState(false)
  const [dataImg, setDataImg]= useState('')
  return (
    <section id='portfolio'>
      <h5 style={{ color: darkMode ? "#178fe0" : "#10406a",}}>My recent work</h5>
      <h2 style={{ color: darkMode ? "#f1f8fe" : "#178fe0",}}>Portfolio</h2>
      <div className='container portfolio_container'>
        <motion.article
         variants={{
          hidden: {opacity: 0, x: -75},
          visible: {opacity:1, x: 0},          
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img className='imgs' src={Pomo} alt=""/>
          </div>
          <h2>Pomodoro</h2>
          <div className="portafolio-item-cta">
            <a href='https://github.com/1Optimus/Pomodoro' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <a href='https://pomodoro-ecru-chi.vercel.app/' className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live demo</a>
          </div>
        </motion.article>
        <motion.article
         variants={{
          hidden: {opacity: 0, y: 75},
          visible: {opacity:1, y: 0},          
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img className='imgs' src={Jsontocsv} alt=""/>
          </div>
          <h2>Json to CSV</h2>
          <div className="portafolio-item-cta">
            <a href='https://github.com/1Optimus/jsontocsv' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <a href='https://jsontocsv-1optimus.vercel.app/' className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live demo</a>
          </div>
        </motion.article>
        <motion.article
         variants={{
          hidden: {opacity: 0, x: 75},
          visible: {opacity:1, x: 0},          
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img className='imgs'  src={Formu} alt=""/>
          </div>
          <h2>Form</h2>
          <div className="portafolio-item-cta">
            <a href='https://github.com/1Optimus/Form' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <a href='https://form-woad-five.vercel.app/' className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live demo</a>
          </div>
        </motion.article>
        <motion.article
         variants={{
          hidden: {opacity: 0, x: -75},
          visible: {opacity:1, x: 0},          
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img className='imgs' src={Poke} alt="" height="250px"/>
          </div>
          <h2>Pokedex</h2>
          <div className="portafolio-item-cta">
            <a href='https://github.com/1Optimus/Pokedex' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <p className='btn btn-primary' onClick={()=>{setActiveModal(true);setDataImg(data[1])}}>Images</p>
          </div>
        </motion.article>
        <motion.article
         variants={{
          hidden: {opacity: 0, y: 75, x:0},
          visible: {opacity:1, y: 0, x: 0},                    
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img className='imgs' src={Onetimesecret} alt=""/>
          </div>
          <h2>One time secret</h2>
          <div className="portafolio-item-cta">
          <a href='https://github.com/1Optimus/onetimesecret' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
          <p className='btn btn-primary' onClick={()=>{setActiveModal(true);setDataImg(data[0])}}>Images</p>
          </div>
        </motion.article>
        <motion.article
         variants={{
          hidden: {opacity: 0, x: 75},
          visible: {opacity:1, x: 0},          
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img className='imgs' src={Urlshortener} alt=""/>
          </div>
          <h2>Url shortener</h2>
          <div className="portafolio-item-cta">
            <a href='https://github.com/1Optimus/urlshortener' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>
            <p className='btn btn-primary' onClick={()=>{setActiveModal(true);setDataImg(data[2])}}>Images</p>
          </div>
        </motion.article>
        <motion.article
         variants={{
          hidden: {opacity: 0, x: -75},
          visible: {opacity:1, x: 0},          
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img className='imgs' src={Residential} alt=""/>
          </div>
          <h2>Residential web app</h2>
          <div className="portafolio-item-cta">  
            <a href='https://github.com/1Optimus/PG-Public' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>      
            <p className='btn btn-primary' onClick={()=>{setActiveModal(true);setDataImg(data[3])}}>Images</p>
          </div>
        </motion.article>
        <motion.article
         variants={{
          hidden: {opacity: 0, y: 75, x:0},
          visible: {opacity:1, y: 0, x: 0},            
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        className='portfolio_item'>
          <div className='portfolio_item-inage'>
            <img className='imgs' src={GCP} alt=""/>
          </div>
          <h2>Gallery web app</h2>
          <div className="portafolio-item-cta">  
            <a href='https://github.com/1Optimus/GCP-project' className='btn'  target="_blank" rel="noopener noreferrer">Github</a>        
            <p className='btn btn-primary' onClick={()=>{setActiveModal(true);setDataImg(data[4])}}>Images</p>
          </div>
        </motion.article>
      </div>
      <Modal img={dataImg} activeModal={activeModal} setActiveModal={setActiveModal}/>
    </section>
  )
}

export default Portafolio
