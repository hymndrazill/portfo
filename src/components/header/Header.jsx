import React from 'react'
import "./header.css"
import Buttons from './Buttons'
import HeaderSocials from './HeaderSocials'
import myself  from '../../assets/myself.jpg'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Firas Sriha</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Buttons />

        <div className="me">
          <img src={myself} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <HeaderSocials/>

      </div>
    </header>
  )
}

export default Header