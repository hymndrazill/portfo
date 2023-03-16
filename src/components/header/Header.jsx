import React, { useEffect } from 'react'
import "./header.css"
import Buttons from './Buttons'
import HeaderSocials from './HeaderSocials'
import TypeIt from "typeit-react";

const Header = () => {

 
  return (
    <header>
      <div className="container header__container">
        <h5 >Hello I'm </h5>
        <h1>Firas Sriha</h1>
        <h5 className='text-light'></h5>
        <div>
        <TypeIt
          options={{
          strings: ["Software Engineer",'FullStack Js','Javascript Enthusiast'],
          speed: 50,
          loop: true,
          waitUntilVisible: true,
          
        }}
        /> 
        </div>
         
        <Buttons />


        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <HeaderSocials/>

      </div>
    </header>
  )
}

export default Header