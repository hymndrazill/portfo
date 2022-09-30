import "./projects.css"
import React from 'react'
import myself  from '../../assets/myself.jpg'


const Projects = () => {

  const data = [
      {
        id:1,
        image: myself,
        title: 'Some Project that is going to be changed',
        github: 'https://github.com/hymndrazill',
        demo: 'https://github.com/hymndrazill'
      },
      {
        id:2,
        image: myself,
        title: 'Some Project that is going to be changed',
        github: 'https://github.com/hymndrazill',
        demo: 'https://github.com/hymndrazill'
      },
      {
        id:3,
        image: myself,
        title: 'Some Project that is going to be changed',
        github: 'https://github.com/hymndrazill',
        demo: 'https://github.com/hymndrazill'
      },
      {
        id:4,
        image: myself,
        title: 'Some Project that is going to be changed',
        github: 'https://github.com/hymndrazill',
        demo: 'https://github.com/hymndrazill'
      },
      {
        id:5,
        image: myself,
        title: 'Some Project that is going to be changed',
        github: 'https://github.com/hymndrazill',
        demo: 'https://github.com/hymndrazill'
      },
      {
        id:6,
        image: myself,
        title: 'Some Project that is going to be changed',
        github: 'https://github.com/hymndrazill',
        demo: 'https://github.com/hymndrazill'
      }
  ]

  return (
    <section  id="projects">
        <h5>My Recent Work</h5>
        <h2> Portfolio</h2>
        <div className="container portfolio__container">
            {
              
              data.map(({id, image, title, github, demo}) =>
            
                  <article className="portfolio__items">
                <div className="portfolio__item-image">
                  
                          {/*  TAKING SCREENSHOTS OF OTHER PROJECTS TO PUT  HERE.   */}
                <img src={image} alt={title} />
                </div>
                  <h3> {title}</h3>
                  <div className="portfolio__item_button">
                    <a href={github} className="btn">Github Repo</a>
                    <a href={demo} target='_blank' className="btn btn-primary"> Live Demo</a>
                  </div>          
          </article>  
                
              )               
              }
        </div>
    </section >
  )
}

export default Projects