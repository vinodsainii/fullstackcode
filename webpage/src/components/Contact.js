import React from "react";
import {
    FaGithub,
  FaInstagram,
  
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/78.png" alt="Logo" />
              </div>
              <p>
                <h1>Contect me</h1>
              </p>
              <ul className="contactCircles">
                
                <li>
                  <a href="https://www.instagram.com/vinod4saini/" target="blank"> <FaInstagram className="contactIcon" /></a>
                    
                  </li>
                  <li>
                  <a href="https://github.com/vinodsainii" target="blank"> <FaGithub className="contactIcon" /></a>
                    
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;