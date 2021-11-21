import React from 'react';
import { Link } from 'react-router-dom';
// style
import './About.css';
// img
import img1 from "./AboutImage/ba.jpeg";
const About = () => {
    return (
      <section className="About-section">
        <h1>
          <Link to="/Home" style={{ paddingRight:"10px",color: "white", textDecoration: "none" }}>
            Home
          </Link>
          / About
        </h1>
        <div>
          {" "}
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>Our Story</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat accusantium sapiente tempora sed dolore esse deserunt
                  eaque excepturi, delectus error accusamus vel eligendi, omnis
                  beatae. Quisquam, dicta. Eos quod quisquam esse recusandae
                  vitae neque dolore, obcaecati incidunt sequi blanditiis est
                  exercitationem molestiae delectus saepe odio eligendi modi
                  porro eaque in libero minus unde sapiente consectetur
                  architecto. Ullam rerum, nemo iste ex, eaque perspiciatis
                  nisi, eum totam velit saepe sed quos similique amet. Ex,
                  voluptate accusamus nesciunt totam vitae esse iste.
                </p>
              </div>
              <div className="col-lg-6"><img src={img1} width="80%" /> </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About
