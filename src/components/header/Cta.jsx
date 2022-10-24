import React from 'react'
import CV from '../../assets/CV Ricardo.pdf'
const Cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn'>Let's talk</a>
    </div>
  )
}

export default Cta