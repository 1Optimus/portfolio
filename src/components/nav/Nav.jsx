/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import './nav.css'
import{ motion } from "framer-motion"
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {BiMessageAltDetail} from 'react-icons/bi'
import {HiTemplate} from 'react-icons/hi'
const Nav = () => {
  const [active, setActive]= useState('#')
  return (
    <motion.nav
    initial={{ y: -275, x: -200}}
    animate={{ y: 0}}
    transition={{ duration: 2 }} 
    >
      <a 
      href="#" 
      className={active==="#"?('active'):('')}
      onClick={()=>setActive("#")}
      ><AiOutlineHome/></a>
      <a 
      href='#about' 
      className={active==="#about"?('active'):('')}
      onClick={()=>setActive("#about")}
      ><AiOutlineUser/></a>
      <a 
      href='#experiences' 
      className={active==="#experiences"?('active'):('')}
      onClick={()=>setActive("#experiences")}
      ><BsFillBookFill/></a>
      <a 
      href='#portfolio' 
      className={active==="#portfolio"?('active'):('')}
      onClick={()=>setActive("#portfolio")}
      ><HiTemplate/></a>
      <a 
      href='#contact' 
      className={active==="#contact"?('active'):('')}
      onClick={()=>setActive("#contact")}
      ><BiMessageAltDetail/></a>
    </motion.nav>
  )
}

export default Nav