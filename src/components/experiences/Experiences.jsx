<<<<<<< HEAD
import React, {useContext} from 'react'
import{ motion } from "framer-motion"
import './experiences.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import { themeContext } from "../../Context";
const Experiences = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section id='experiences'>
      <h5 style={{ color: darkMode ? "#178fe0" : "#10406a",}}> What skills i have</h5>
      <h2 style={{ color: darkMode ? "#f1f8fe" : "#178fe0",}}> My experience</h2>
      <div className='container experience_container'>
        <motion.div 
        variants={{
          hidden: {opacity: 0, x: -75},
          visible: {opacity:1, x: 0},          
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        className='experience_frontend'>
=======
import React from 'react'
import './experiences.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experiences = () => {
  return (
    <section id='experiences'>
      <h5> What skills i have</h5>
      <h2> My experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
>>>>>>> 8fbb177c28922f9ed11df08fd706cc3160746421
          <h3>Frontend development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>HMTL5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
<<<<<<< HEAD
        </motion.div>
        <motion.div 
        variants={{
          hidden: {opacity: 0, x: 75},
          visible: {opacity:1, x: 0},
          exit: { opacity: 0, x: 75 }
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        className='experience_backend'>
=======
        </div>
        <div className='experience_backend'>
>>>>>>> 8fbb177c28922f9ed11df08fd706cc3160746421
        <h3>Backtend development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>GCP</h4>
                <small className='text-light'>beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>Docker</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>beginner</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              <div>
                <h4>MySql and Oracle</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>
          </div>
<<<<<<< HEAD
        </motion.div>
=======
        </div>
>>>>>>> 8fbb177c28922f9ed11df08fd706cc3160746421
      </div>
    </section>
  )
}
<<<<<<< HEAD
//transition={{ duration: 0.5, delay: 0.25, repeatType:"reverse", repeat:1 }}
=======

>>>>>>> 8fbb177c28922f9ed11df08fd706cc3160746421
export default Experiences