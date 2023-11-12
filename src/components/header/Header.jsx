<<<<<<< HEAD
import React, {useContext} from 'react'
import './header.css'
import Cta from './Cta.jsx'
import Me from '../../assets/me.png'
import { themeContext } from "../../Context";
const Header = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <header>      
      <div 
      className='container header_container'>
        <h2 style={{ color: darkMode ? "#bddffa" : "#10406a",}}>Hello i'm</h2>
        <h1 style={{ color: darkMode ? "#0a6fbd" : "#178fe0",}}>Ricardo Perez</h1>
        <h5 style={{ color: darkMode ? "#bddffa" : "#10406a",}}>ReactJS Front-End developer</h5>
        <Cta/>
        <div className='me'>
          <img src={Me} alt='me' id="imgMe"/>
=======
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
>>>>>>> 8fbb177c28922f9ed11df08fd706cc3160746421
        </div>
      </div>
    </header>
  )
}

export default Header