import React from 'react'
import Firas_sriha_resume from "../../assets/Firas_sriha_resume.pdf"
const Buttons = () => {
  return (
    <div className='Button'>
        <a href={Firas_sriha_resume} className="btn" download >Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me.</a>
    </div>
  )
}

export default Buttons