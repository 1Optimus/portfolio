<<<<<<< HEAD
import React, { useRef, useContext } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import{ motion } from "framer-motion"
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
=======
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
const Contact = () => {
>>>>>>> 8fbb177c28922f9ed11df08fd706cc3160746421
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ou53lv4', 'template_qz8zvyd', form.current, 'BonBAgqTyQeBtP41h')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
<<<<<<< HEAD
       <h5 style={{ color: darkMode ? "#178fe0" : "#10406a",}}>Get in touch</h5>
       <h2 style={{ color: darkMode ? "#f1f8fe" : "#178fe0",}}>Contact me</h2>
      <div className="container contact_container">
        <motion.div 
        variants={{
          hidden: {opacity: 0, x: -75},
          visible: {opacity:1, x: 0},          
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} className='contact_options'>
          <article className='contact_option'>
            <MdEmail style={{ color:"#178fe0"}} className='contact_option-icon'/>
=======
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className='contact_options'>
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
>>>>>>> 8fbb177c28922f9ed11df08fd706cc3160746421
            <h4>Email</h4>
            <h5>ricperezr@outlook.com</h5>
            <a href="mailto:ricperezr@outlook.com">Send a message</a>
          </article>
          <article className='contact_option'>
<<<<<<< HEAD
            <BsLinkedin  style={{ color:"#178fe0"}} className='contact_option-icon'/>
=======
            <BsLinkedin className='contact_option-icon'/>
>>>>>>> 8fbb177c28922f9ed11df08fd706cc3160746421
            <h4>LinkedIn</h4>
            <h5>Ricardo Pérez Rodriguez</h5>
            <a href="https://www.linkedin.com/in/ricardo-p%C3%A9rez-rodriguez-71900a245/" target="_blank" rel="noreferrer">Go to LinkedIn</a>
          </article>
          <article className='contact_option'>
<<<<<<< HEAD
            <RiWhatsappFill  style={{ color:"#178fe0"}} className='contact_option-icon'/>
=======
            <RiWhatsappFill className='contact_option-icon'/>
>>>>>>> 8fbb177c28922f9ed11df08fd706cc3160746421
            <h4>Whatsapp</h4>
            <h5>+1 (832) 837 3873</h5>
            <a href="https://wa.me/18328373873" target="_blank" rel="noreferrer">Send a message</a>
          </article>
<<<<<<< HEAD
        </motion.div>
        <motion.form 
         variants={{
          hidden: {opacity: 0, x: 75},
          visible: {opacity:1, x: 0},          
        }}      
        initial="hidden"
        whileInView='visible'   
        exit="exit"         
        transition={{ duration: 0.5, delay: 0.35 }} 
        ref={form} 
        style={{ color: darkMode ? "#f1f8fe" : "#178fe0",}}
        onSubmit={sendEmail}>
=======
        </div>
        <form ref={form} onSubmit={sendEmail}>
>>>>>>> 8fbb177c28922f9ed11df08fd706cc3160746421
          <input type="text" name="name" placeholder='Your full name' required/>
          <input type="email" name="email" placeholder='Your email' required/>
          <textarea name="message" rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Sen message</button>
<<<<<<< HEAD
        </motion.form>
=======
        </form>
>>>>>>> 8fbb177c28922f9ed11df08fd706cc3160746421
      </div>
    </section>
  )
}

export default Contact