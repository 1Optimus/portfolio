import React from 'react'
import CV from '../../assets/CV Ricardo Perez.pdf'
const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download="CV Ricardo Perez.pdf" className='btn'>Download CV</a>
        <a href='#contact' className='btn'>Let's talk</a>
    </div>
  )
}

export default Cta