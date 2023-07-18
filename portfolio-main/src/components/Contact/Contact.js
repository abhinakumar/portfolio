import React, { Component } from 'react';
import { SocialIconGroupLight } from '../Icon';
import styles from './Contact.module.css';
// import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';
class Contact extends Component {
  render() {
    return (
      <div
        className="bg-primary py-10 px-4 md:px-0 text-center md:mt-10 "
        id="contact"
      >
        <h4 className="text-white text-2xl md:text-3xl font-extrabold font-display mb-8">
          Interested in collaborating?
        </h4>
        <div className=" w-full mt-10 md:w-1/3 mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center pb-8 border-b border-borderLight">
          {/* <p className={`text-primaryLight text-m mr-3 ${styles.email} mb-4`}>
           <a href="">
           abhinavkumar0157@gmail.com
           </a>
             
          </p> */}
          <div>
          <ReactWhatsapp  style={{fontWeight:"bold",color:"white",fontSize:"30px",cursor:"pointer"}} number="8986113432" message="Hello World!!!">Contact on Whatsapp</ReactWhatsapp>
           
          </div>
        </div>
      
      </div>
    );
  }
}

export default Contact;
