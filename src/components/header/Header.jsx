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
        <h5 style={{ color: darkMode ? "#bddffa" : "#10406a",}}>Full stack developer with ReactJS & NodeJS</h5>
        <Cta/>
        <div className='me'>
          <img src={Me} alt='me' id="imgMe"/>
        </div>
      </div>
    </header>
  )
}

export default Header