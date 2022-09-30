import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'
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
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>HTML</h4>
              <small className='text-light'>Experienced </small>
            </article> 
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>CSS</h4>
              <small className='text-light'>Experienced </small>
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Javascript</h4>
              <small className='text-light'>Experienced </small>
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Reactjs</h4>
              <small className='text-light'>Experienced </small>
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>TailwindCss</h4>
              <small className='text-light'>Experienced </small>
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Jquery</h4>
              <small className='text-light'>Experienced </small>
            </article> 
          </div>
        </div>

        <div className="experience__backend">
        <h3> Backend development</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Nodejs</h4>
              <small className='text-light'>Experienced </small>
            </article> 
             <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Express</h4>
              <small className='text-light'>Experienced </small>
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Javascript</h4>
              <small className='text-light'>Experienced </small>
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Ruby On Rails</h4>
              <small className='text-light'>Experienced </small>
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>MongoDb</h4>
              <small className='text-light'>Experienced </small>
            </article> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>SQL</h4>
              <small className='text-light'>Experienced </small>
            </article> 
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience