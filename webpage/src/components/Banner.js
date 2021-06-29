import React from "react";
 import {
    FaGithub,
    FaInstagram,

} from "react-icons/fa";
const Banner = () => {
//   const [state] = React.useState({
//     title: "I am Jonathan Doe",
//     text:
//       "i,m Jonathan, professional web developer with long time \
//     experience in this field​",
//     image: "/images/man-01.png",
//   });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                  <a href="https://www.instagram.com/vinod4saini/" target="blank"> <FaInstagram className="headerIcon" /></a>
                    
                  </li>
                  <li>
                  <a href="https://github.com/vinodsainii" target="blank"> <FaGithub className="headerIcon" /></a>
                    
                  </li>
                </ul>
                <h1>I am Vinod Saini</h1>
                <p>Web Doveloper</p>
                
              </div>
            </div>
          </div>
          <div className="col-6">
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Banner;