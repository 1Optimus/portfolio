/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Ricardo Perez</a>

      <ul className='permanLinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer
