import React from 'react'
import FirasSriha from "../../assets/FirasSriha.pdf"
const Buttons = () => {
  return (
    <div className='Button'>
        <a href={FirasSriha} className="btn" download >Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me.</a>
    </div>
  )
}

export default Buttons