import React from 'react'
import './resume.css'

import {education,experience} from './resume_data'

const resume = () => {
  return (
    <>
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
        <div className="col-md-6">

            <h3 className="resume-title">Education</h3>
            {education.slice(0).reverse().map((item,index)=>{
            return (
            <div className="resume-item " data-aos="fade-right" key={index}>
              <h4>{item.edu}</h4>
              <h5>{item.year}</h5>
              <p><em>{item.name}</em></p>
              <p>{item.status}</p>
            </div>
            )
            })}
         </div>

         <div className="col-md-6" >
            <h3 className="resume-title">Professional Experience</h3>
            {experience.slice(0).reverse().map((item,index)=>{
            return (
            <div className="resume-item" data-aos="fade-right" key={index}>
              <h4>{item.designation}</h4>
              <h5>{item.period}</h5>
              <p><em>{item.company}</em></p>
              
              <ul>
                {item.description.map((item,index)=>{
                  return(
                  <li key={index}>{item}</li>
                  )
                })}                           
              </ul>
            </div>
            )
            })}
          </div>
         
        </div>

      </div>
    </section>
    </>
  )
}

export default resume