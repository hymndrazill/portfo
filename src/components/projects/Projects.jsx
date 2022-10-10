import "./projects.css"
import React from 'react'
import dashboard from '../../assets/dashboard.png'
import myself from '../../assets/myself.jpg'
import BlogSS from '../../assets/BlogSS.png';
import Quiz from '../../assets/Quiz.png';
import guessNumber from '../../assets/guessNumber.png';
import Booking from '../../assets/Booking.png';
import NetflixClone from '../../assets/NetflixClone.png';
const Projects = () => {

  const data = [
      {
        id:1,
        image: dashboard,
        title: 'Admin Dashboard',
        github: 'https://github.com/hymndrazill/AdminDashboard',
      },
      {
        id:2,
        image: Quiz,
        title: 'Quiz Game',
        github: 'https://github.com/hymndrazill/Quiz',
      },
      {
        id:3,
        image: guessNumber,
        title: 'Classic guessMyNumber',
        github: 'https://github.com/hymndrazill/guessMyNumber',
      },
      {
        id:4,
        image: Booking,
        title: 'Booking.com Clone',
        github: 'https://github.com/hymndrazill/BookingClone',
      },
      {
        id:5,
        image: BlogSS,
        title: 'Blog',
        github: 'https://github.com/hymndrazill',
      },
      {
        id:6,
        image: NetflixClone,
        title: 'Netflix Clone',
        github: 'https://github.com/hymndrazill',
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
                  </div>          
          </article>  
                
              )               
              }
        </div>
    </section >
  )
}

export default Projects