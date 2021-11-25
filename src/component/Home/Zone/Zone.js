import React from "react";
// react-router
import { Link } from "react-router-dom";
// style
import "./StyleZone.css";
// img
import img1 from "./ZoneImages/img1.jpeg";
import img2 from "./ZoneImages/hero-bcg-2.78991864.jpeg";
const Zone = () => {
  return (
    <section className="zone-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xs-12 col-sm-12 col-md-12 col-xl-6 text-zone">
            <h1>Design Your Comfort Zone</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <Link to="/Products">
              <button>start now</button>
            </Link>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12 col-xl-6 image-zone">
            <img src={img1} width="76%" className="position-relative img1" />
            <img src={img2} width="15%" className="position-absolutes img2" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Zone;
