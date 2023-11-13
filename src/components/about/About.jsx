import React, {useContext} from 'react'
import { motion} from "framer-motion"
import './about.css'
import Me from '../../assets/me22.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { themeContext } from "../../Context";
const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section id='about'>
      <h5 style={{ color: darkMode ? "#178fe0" : "#10406a",}}>Get to know</h5>
      <h2 style={{ color: darkMode ? "#f1f8fe" : "#178fe0",}}>About me</h2>
      <div className='container about_container'>
        <motion.div         
            variants={{
            hidden: {opacity: 0, x:-75},
            visible: {opacity:1, x:0},
          }}
          initial="hidden"
          whileInView='visible'   
          exit="exit"         
          transition={{ duration: 0.5, delay: 0.35 }} 
          className='about_me'>
          <div className='about_me-img'>
            <img src={Me} alt='about_me-img'/>
          </div>
        </motion.div>
        <motion.div 
         variants={{
          hidden: {opacity: 0, x:75},
          visible: {opacity:1, x:0},
        }}
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5 style={{color:"#bddffa"}}>Experience</h5>
              <small>2 Years working with ReactJS</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5 style={{color:"#bddffa"}}>Clients</h5>
              <small>1 worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5 style={{color:"#bddffa"}}>Experience</h5>
              <small>10+ proyects completed</small>
            </article>
          </div>
          <p style={{ color: darkMode ? "#178fe0" : "#10406a",}}>Hello my name is Ricardo Perez, I am a bilingual professional motivated to constantly improve, always seeking 
ways to enhance my professional performance. As a developer, I have a special 
ability to quickly grasp complex concepts about projects and turn them into 
efficient, solid, and high-quality code. Passionate about learning, I stay updated
with the latest advances in technology. I am committed to delivering work that 
exceeds expectations and is of the highest caliber, without hesitation to invest 
personal time to achieve it.
</p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </motion.div>
      </div>

    </section>
  )
}

export default About
