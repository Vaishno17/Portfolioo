import React from 'react'
import './about.css'
import {skills_data} from './about_data.js'



// import Swiper core and required modules
import {  Pagination ,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const About = () => {

  return (
    <>
    <section id="about" className="about container"  >
    <div className="section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>An independent and self-motivated student on the quest of an
oppourtinity for an entry-level position in the software
development that can acquiant me with knowledge and
experience. </p>
        </div>
      <div className="container" >

        

        <div className="row col-md-12">

          <div className="col-md-4 shadow rounded">
            <img src="assets/img/about.jpg" className="img-fluid shadow"  style={{width:"95%",height: "95%", margin:"5%"}} />
          </div>

          <div className="col-md-7 pt-4  mt-5 ms-auto">
          
          <h3>Software Developer</h3>
            <p className="fst-italic my-3">
            I'm a 20-year-old Computer Science student with a keen interest in software development and machine learning. I'm deeply passionate about continuously acquiring knowledge in emerging technologies
            </p>
            <div className="row content">
              <div className="col-md-6" data-aos="fade-right">
                <ul>
                  <li><i className="bi bi-rounded-right"></i> <strong>Birthday:</strong> 17 Feb 2004</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Pronoun:</strong> She/her</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Phone:</strong> +91 8080301532</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>City:</strong>  Nashik</li>
                </ul>
              </div>
              <div className="col-md-6" data-aos="fade-right">
                <ul>
                  <li><i className="bi bi-rounded-right"></i> <strong>Age:</strong> 20</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Degree:</strong> Pursuing Bachelors</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Email: </strong> vaishno1702@gmail.com</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>

            <p className="mt-3" data-aos="fade-up">
             <strong>Carrer Objective : </strong> As a beginner in the field of Computer Science, I strive to associate myself with an organization where I can utilize my skills in the best possible manner, which further gives me an opportunity to grow in my career journey while contributing to the development of the organization.
            </p>
          </div>
    </div>
      </div>
    </section> 

    
    <section id="skills" className="skills">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Below is the list of technical skills I am familiar with.</p>
        </div>

        <div className="row skills-content">

        {skills_data.map((item,index)=>{
           const color = item.color;
          return (  
           
            <div className="skill-btn col-md-1 col-sm-6" key={index} style={{backgroundColor:color,}} data-aos="fade-up" data-aos-delay="100">
                <span className="btn-gradient">
                  <i className={item.icon}></i>
                </span>
                <span className="btn-text">{item.name}</span>
            </div>
          )
        })}
        </div>

      </div>
    </section>


    
  
    </>
  )
}

export default About