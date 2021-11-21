import React from "react";
// style
import "./Footer.css"; 
import { faFacebook, faInstagram, faSnapchat, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div class=" item social m-auto">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faSnapchat} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p class="copyright">© 2021 code/Mu. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
