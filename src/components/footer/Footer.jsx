import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> Hymndrazill</a>
        <ul className='permalinks'>
          <li> <a href="#">Home</a></li>
          <li> <a href="#about">About</a></li>
          <li> <a href="#experience">Experience</a></li>
          <li> <a href="#projects">Projects</a></li>
          <li> <a href="#contact">Contact</a></li>

        </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/"> <FaFacebookF/></a>
        <a href="https://github.com/hymndrazill"><FaGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Hymndrazill &reg;</small>
      </div>


    </footer>
  )
}

export default Footer