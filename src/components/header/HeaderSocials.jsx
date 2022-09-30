import {FaLinkedinIn,FaGithub,FaTwitter } from 'react-icons/fa'
import React from 'react'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com " target="_blank"> <FaLinkedinIn/></a>
        <a href="https://github.com" target="_blank"> <FaGithub/></a>
        <a href="https://twitter.com" target="_blank"> <FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials