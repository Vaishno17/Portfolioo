import React , {useState ,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.css';

import Nav from './components/nav/nav.js'
import Home from './components/home/home.js'
import About from "./components/about/about.js";
import Resume from "./components/resume/resume.js";
import Services from "./components/services/services.js";
import Portfolio from "./components/portfolio/portfolio.js";
import Contact from "./components/contact/contact.js"
import Footer from './components/footer/footer.js';
import Pre from './components/pre.js';
import ScrollToTop from './components/scrollToTop.js'
import Bubbles from './components/bubbles/bubbles.js' 

//import ScrollToTop from "react-scroll-to-top";


import "./App.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Awards from "./components/about/Awards.js";
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  mirror:true,
  delay : 100
});


const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Pre load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
       <ScrollToTop />
        <Nav />
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Awards />
        <Contact />
        <Footer />
        
      </div>
  

    
    </>
  )
}

export default App