import React from 'react'
import { useState } from 'react';
import './portfolio.css'

import Model from './model.js'
import {portfolio_data } from './portfolio_data'

const Portfolio = () => {



  return (
  <>
  <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Projects</h2>
          <p>Here are some of my projects developed by me.</p>
        </div>


        <div className="row portfolio-container">
        {portfolio_data.map((item,index)=>{
          return (
            <Model key={index} img={item.imgSrc} name={item.name} category={item.category} url={item.url} tech={item.tech} desc={item.desc} />
          )
        })}

        </div>

      </div>
    </section>

    
  </>
  )
}

export default Portfolio