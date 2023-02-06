import React from 'react'
import './about.css'
import Me from '../../assets/me22.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-img'>
            <img src={Me} alt='about_me-img'/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2 Years working with ReactJS</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>1 worldwide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Experience</h5>
              <small>10+ proyects completed</small>
            </article>
          </div>
          <p>Hello my name is Ricardo Perez, I am a bilingual, enthusiastic and autodidactic programmer who likes to program, I was born in Guatemala but I am currently a resident in the United States, currently I finished my degree in systems engineering and I am finishing the first year of my master in information security, I have developed several personal projects in ReactJS, with that experience I started working in Telus international as a ReactJS developer but I had to resign because I moved to another country. Due to the systems engineering career I have learned a lot more as I describe below, not only I have experience in front-end but it is the knowledge that I have fresh at the moment.</p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
