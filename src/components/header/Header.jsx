import React from 'react'
import './header.css'
import Cta from './Cta.jsx'
import Me from '../../assets/me.png'
const Header = () => {
  return (
    <header>      
      <div className='container header_container'>
        <h5>Hello i'm</h5>
        <h1>Ricardo Perez</h1>
        <h5 className='text-light'>ReactJS Front-End developer</h5>
        <Cta/>
        <div className='me'>
          <img src={Me} alt='me'/>
        </div>
      </div>
    </header>
  )
}

export default Header