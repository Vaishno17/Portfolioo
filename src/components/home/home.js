import React from 'react'
import './home.css'

import { Typewriter,useTypewriter } from "react-simple-typewriter"

const Home = () => {

  const {text} = useTypewriter({
    words: [ " MERN Stack Developer."," Web Developer ", "Machine learning learner"],
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
    })

  return (
    <>
     <section id="hero" className="d-flex align-items-center" style={{background: "url('./assets/img/hero.jpg') top right",backgroundSize : "cover"}}>
    <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
      <h1> Vaishnavi Matsagar</h1>
      <h2>I'm a <span> {text} </span> </h2>
      <div className='row'>
      <a href="#about" className="col btn-about">About Me</a>
      <a href="assets/resume.pdf" download className="col btn-about">DownloadCV</a>
      </div>
    </div>
  </section>
    </>
  )
}

export default Home