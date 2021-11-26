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
import { useCart } from "react-use-cart";
const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, img: img1, text: "Entertainment center", price: "599.99" },
    { id: 2, img: img2, text: "high-back bench", price: "399.99" },
    { id: 3, img: img3, text: "Modern Bookshelf", price: "319.99" },
  ]);
  
  const {addItem,items}=useCart()
  return (
    
    <section className="FeaturedProducts">
      <div className="container">
        <div className="row">
          <h1>Featured Products</h1>
          <p>some of our prducts categeories loream with us ... </p>
          <div className="cards d-flex">
            {featuredProducts.map((item,ind) => {
              return (
                <div className="card col-lg-4 col-xs-12  col-sm-12" key={ind}>
                  <div className="card-image">
                    <img src={item.img} />
                  </div>
                  <div className="card-cotaine">
                    <p>{item.text}</p>
                    <h6>${item.price}</h6>
                  </div>
                  <div
                    className="display-div btn"
                    onClick={() => addItem(item,1)}
                  >
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
