import React from 'react'
import "./about.css"
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'
import me from "../../assets/me.jpg"


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2> About me</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
            <img src={me} alt="me about image" />
            </div>
          </div>

          <div className='about__content'>
          <div className="about__cards">
            <article className=' about__card'>
                <FaAward className='about__icon'/>
                <h5> Experience</h5>
                <small> 0-1 Years working</small>
            </article>
      
            <article className=' about__card'>
              <FiUsers className='about__icon'/>
              <h5> Clients</h5>
              <small> 2</small>
            </article>
            
            <article className=' about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5> Projects</h5>
              <small> 20+ </small>
            </article> 
          
            </div>
            <p>
            Hello! The name is Firas Sriha, i'm software engineer,
             a Tech enthusiast, a javascript lover,
              a reactjs dreamer, a person who wants to leave his print in the world.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
          </div>
        </div>
    </section>
  )
}

export default About