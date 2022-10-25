import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
const Contact = () => {
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
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact_container">
        <div className='contact_options'>
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>ricperezr@outlook.com</h5>
            <a href="mailto:ricperezr@outlook.com">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Ricardo Pérez Rodriguez</h5>
            <a href="https://www.linkedin.com/in/ricardo-p%C3%A9rez-rodriguez-71900a245/" target="_blank" rel="noreferrer">Go to LinkedIn</a>
          </article>
          <article className='contact_option'>
            <RiWhatsappFill className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+1 (832) 837 3873</h5>
            <a href="https://wa.me/18328373873" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required/>
          <input type="email" name="email" placeholder='Your email' required/>
          <textarea name="message" rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Sen message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact