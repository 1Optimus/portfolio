/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Ricardo</a>

      <ul className='permanLinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="#"><FaAward/></a>
        <a href="#"><FiUsers/></a>
        <a href="#"><VscFolderLibrary/></a>
      </div>
    </footer>
  )
}

export default Footer
