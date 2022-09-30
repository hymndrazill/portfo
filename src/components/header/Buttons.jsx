import React from 'react'
import SrihaFiras_Resume from "../../assets/SrihaFiras_Resume.pdf"
const Buttons = () => {
  return (
    <div className='Button'>
        <a href={SrihaFiras_Resume} className="btn" download >Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me.</a>

    </div>
  )
}

export default Buttons