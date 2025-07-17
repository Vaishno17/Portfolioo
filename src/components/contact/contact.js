import React,  { useRef }  from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vxr2w6s', 'template_r74itul', form.current, 'SFH5vTOy6te6wOTRi')
      .then((result) => {
          console.log(result.text);
          alert('Submitted');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
          


          <section id="contact" className="contact">
            <div className="container contact-form" >
            <div className="section-title " data-aos="fade-up">
                    <h2>Contact Me</h2>
                    <p>Reach out to me at below places.</p>
                    </div>
            <div className='row'>        
              <div className='col-md-7' data-aos="fade-right">
                <form  ref={form} onSubmit={sendEmail} id="contact">
                  <div className="my-5">
                    <div className=" shadow rounded p-5">
                      
                        <div className=" mb-3">
                          <label className="form-label">Your name</label>
                          <input type="text" id="from_name" name="from_name" className="form-control"
                          placeholder="Enter Your Name" required/>
                        </div>

                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" id="email" name="email" className="form-control"
                          placeholder="name@gmail.com" required/>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Subject</label> 
                        <input type="text" id="subject" name="subject" className="form-control"
                          placeholder="Enter Subject" required/>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea id="message" name="message" className="form-control" placeholder="Write your Query here" cols="3" required></textarea>
                      </div>
                      
                      <div className="d-grid gap-2 col-6 mx-auto">
                        <input  className="btn" type="submit" onClick={sendEmail} ></input>  
                      </div>
                    </div>

                  </div>

                </form>
          		</div>
             
                  <div className="col-md-5 ms-auto d-flex align-items-stretch"data-aos="fade-right" >
								<div className="info-wrap  p-5">

                <div className="section-title ">
                    <h2>Lets's get in touch</h2>
                    </div>
				        	<div className="w-100 my-2 d-flex align-items-start">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-map-marker"></span>
				        		</div>
				        		<div className="text ps-3">
					            <p><span>Address:</span> Trimuri Chowk, Dhanakwadi ,Pune-411043</p>
					          </div>
				          </div>
				        	<div className="w-100 my-2 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-phone"></span>
				        		</div>
				        		<div className="text ps-3">
					            <p><span>Phone:</span> <a href="tel:08698648377">+91 8698648377</a></p>
					          </div>
				          </div>
				        	<div className=" w-100 my-2 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-paper-plane"></span>
				        		</div>
				        		<div className="text ps-3">
					            <p><span>Email:</span> <a href="mailto:kolhem10@gmail.com">kolhem10@gmail.com</a></p>
					          </div>
				          </div>
				        	<div className=" w-100 my-2 d-flex align-items-center">
				        		<div className="icon d-flex align-items-center justify-content-center">
				        			<span className="fa fa-globe"></span>
				        		</div>
				        		<div className="text ps-3">
					            <p><span>Website:</span> <a href="https://630f48b04b042e13c46f2a00--mayurikolhe.netlify.app/">mayurikolhe.netlify.app/</a></p>
					          </div>
				          </div>
			          </div>
							</div>
                </div>
               
                </div>
          
          </section>

    </>
  )
}

export default Contact