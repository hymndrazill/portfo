import React from 'react'
import "./about.css"
import man  from '../../assets/man.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'



const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2> About me</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
            <img src={man} alt="me about image" />
            </div>
          </div>

          <div className='about__content'>
          <div className="about__cards">
                <article className=' about__card'>
                    <FaAward className='about__icon'/>
                    <h5> Experience</h5>
                    <small> 3+ Years working</small>
                </article>
           


            <article className=' about__card'>
              <FiUsers className='about__icon'/>
              <h5> Clients</h5>
              <small> +100 Client Worldwide</small>
            </article>
            
            <article className=' about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5> Projects</h5>
              <small> 20+ </small>
            </article> 
          
            </div>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, architecto voluptate, iste sed enim praesentium facilis, sunt autem reiciendis itaque eaque nulla eos dolore maiores ut alias optio esse deserunt!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
          </div>
        </div>
    </section>
  )
}

export default About