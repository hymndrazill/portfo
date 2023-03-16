import "./projects.css"
import React from 'react'
import dashboard from '../../assets/dashboard.png'
import BlogSS from '../../assets/BlogSS.png';
import Quiz from '../../assets/Quiz.png';
import fiverClone from '../../assets/fiverClone.png';
import Booking from '../../assets/Booking.png';
import NetflixClone from '../../assets/NetflixClone.png';
const Projects = () => {

  const data = [
      {
        id:1,
        image: dashboard,
        title: 'Admin Dashboard',
        github: 'https://github.com/hymndrazill/AdminDashboard',
        demo: dashboard
      },
      {
        id:2,
        image: Quiz,
        title: 'Quiz Game',
        github: 'https://github.com/hymndrazill/Quiz',
        demo: Quiz

      },
      {
        id:3,
        image: fiverClone,
        title: 'Fiver Clone UI',
        github: 'https://github.com/hymndrazill/fiverC',
        demo: fiverClone

      },
      {
        id:4,
        image: Booking,
        title: 'Booking.com Clone',
        github: 'https://github.com/hymndrazill/BookingClone',
        demo: Booking

      },
      {
        id:5,
        image: BlogSS,
        title: 'Blog',
        github: 'https://github.com/hymndrazill',
        demo: BlogSS

      },
      {
        id:6,
        image: NetflixClone,
        title: 'Netflix Clone',
        github: 'https://github.com/hymndrazill',
        demo: NetflixClone

      }
  ]


  return (
    <section  id="projects">
        <h5>My Recent Work</h5>
        <h2> Portfolio</h2>
        <div className="container portfolio__container">
            {
              
              data.map(({id, image, title, github, demo}) =>
            
                  <article  key={id} className="portfolio__items">
                <div className="portfolio__item-image">
                  
                          {/*  TAKING SCREENSHOTS OF OTHER PROJECTS TO PUT  HERE.   */}
                <img  src={image} alt={title} />
                </div>
                  <h3> {title}</h3>
                  <div className="portfolio__item_button">
                    <a href={github} className="btn">Github Repo</a>
                    <a href={demo} target='_blank' className="btn">Check it.</a>

                  </div>          
          </article>  
                
              )               
              }
        </div>
    </section >
  )
}

export default Projects