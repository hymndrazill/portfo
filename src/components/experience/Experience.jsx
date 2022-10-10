import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'
import {DiHtml5,DiNodejsSmall} from 'react-icons/di'
import {SiCss3,SiJquery,SiTailwindcss,SiExpress,SiFlutter,
  SiRubyonrails,SiMongodb,SiSqlite} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2> My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend development</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <DiHtml5 className='experience__details-icon' />
              <h4>HTML5</h4>
            </article> 
             <article className='experience__details'>
              <SiCss3 className='experience__details-icon' />
              <h4>CSS</h4>
            </article> 
            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon' />
              <h4>Javascript</h4>
            </article> 
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <h4>Reactjs</h4>
            </article> 
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon' />
              <h4>TailwindCss</h4>
            </article> 
            <article className='experience__details'>
              <SiJquery className='experience__details-icon' />
              <h4>Jquery</h4>
            </article> 
          </div>
        </div>

        <div className="experience__backend">
        <h3> Backend development</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <DiNodejsSmall className='experience__details-icon' />
              <h4>Nodejs</h4>
            </article> 
             <article className='experience__details'>
              <SiExpress className='experience__details-icon' />
              <h4>Express</h4>
            </article> 
            <article className='experience__details'>
              <SiFlutter className='experience__details-icon' />
              <h4>FLUTTER</h4>
            </article> 
            <article className='experience__details'>
              <SiRubyonrails className='experience__details-icon' />
              <h4>Ruby On Rails</h4>
            </article> 
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon' />
              <h4>MongoDb</h4>
            </article> 
            <article className='experience__details'>
              <SiSqlite className='experience__details-icon' />
              <h4>SQL</h4>
            </article> 
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience