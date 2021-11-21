import {
  faDirections,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// style
import "./FeaturedProducts.css";
// img
import img1 from "./FeaturedProductsImages/p1.jpg";
import img2 from "./FeaturedProductsImages/p2.jpg";
import img3 from "./FeaturedProductsImages/p3.jpg";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([
    { img: img1, p: "Entertainment center", h6: "$599.99" },
    { img: img2, p: "high-back bench", h6: "$399.99" },
    { img: img3, p: "Modern Bookshelf", h6: "$319.99" },
  ]);
  
  return (
    
    <section className="FeaturedProducts">
      <div className="container">
        <div className="row">
          <h1>Featured Products</h1>
          <p>some of our prducts categeories loream with us ... </p>
          <div className="d-flex">
            {featuredProducts.map((item) => {
              return (
                <div className="card col-lg-4 col-sm-12">
                  <div className="card-image">
                    <img src={item.img} />
                  </div>
                  <div className="card-cotaine">
                    <p>{item.p}</p>
                    <h6>{item.h6}</h6>
                  </div>
                  <div className="display-div btn">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </div>
                </div>
              );
            })}
          </div>

          <button>
            view all products <FontAwesomeIcon icon={faDirections} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
