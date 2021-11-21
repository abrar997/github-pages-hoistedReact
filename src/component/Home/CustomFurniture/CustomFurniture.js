import React, { useState } from "react";
import "./CustomFurniture.css";
import {
  faCompass,
  faFeatherAlt,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomFurniture = () => {
  return (
    <section className="CustomFurniture">
      <div className="container">
        <div className="row">
          <div className="d-flex CustomFurniture-explain">
            <h1>
              Custom Furniture
              <br />
              built only for you
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur.
            </p>
          </div>
          <div className="d-flex">
            <div className="card col-lg-4">
             <h3> <FontAwesomeIcon icon={faCompass} /></h3>
              <h1>Mission</h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum debitis consectetur reprehenderit non aliquam voluptates
                dolore aut vero consequuntur.
              </h6>
            </div>
            <div className="card col-lg-4">
           <h3>   <FontAwesomeIcon icon={faGem} /></h3>
              <h1>vision</h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum debitis consectetur reprehenderit non aliquam voluptates
                dolore aut vero consequuntur.
              </h6>
            </div>
            <div className="card col-lg-4">
          <h3>    <FontAwesomeIcon icon={faFeatherAlt} /> </h3>
              <h1>history</h1>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum debitis consectetur reprehenderit non aliquam voluptates
                dolore aut vero consequuntur.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomFurniture;
