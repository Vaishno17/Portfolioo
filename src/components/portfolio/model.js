import React from 'react'
import { useState } from 'react';

import { Modal, Button } from "react-bootstrap";

const Model = (props) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);

 

  return (
   <>
     <div className="col-md-4 portfolio-item " data-aos='fade-up' data-aos-delay="200">
            <div className="portfolio-wrap">
              <img src={props.img} className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>{props.name}</h4>
                <p>{props.category}</p>
                <div className="portfolio-links">
                    <i className="fa-solid fa-plus"  onClick={()=>setShow(true)}></i>
                  
                </div>
              </div>
            </div>
       </div>

       <Modal show={show} onHide={handleClose} dialogClassName='modal-90w'>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="row portfolio-details ">

<div class="col-lg-8">
  <img src={props.img}  />
  </div>


<div class="col-lg-4">
  <div class="portfolio-info">
    <h3>Project information</h3>
    <ul>
      <li><strong>Category </strong>: {props.category}</li>
      {props.url && <li><strong>Project URL </strong> : <a href="#">{props.url}</a></li>}
      <li><strong>Technologies Used : </strong>  {props.tech}</li>
    </ul>
  </div>
  <div class="portfolio-description">
    <h2>About {props.name}</h2>
    <p>{props.desc} </p>
  </div>
</div>
 </div>
        </Modal.Body>

      </Modal>
   </>
  )
}

export default Model