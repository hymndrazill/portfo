import "./navbar.css"
import React from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdMessage,MdOutlineWork} from 'react-icons/md'
import { useState } from "react"
const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} 
      className={activeNav === '#' ? 'active' : ''}>
         <AiOutlineHome/>
         </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}
      > <AiOutlineUser/>
      </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' : ''}> 
      <BiBook/>
      </a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}> 
      <MdMessage/>
      </a>


    </nav>
  )
}

export default Navbar