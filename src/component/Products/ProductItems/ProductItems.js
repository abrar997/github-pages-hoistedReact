import React from "react";
import {
  faDirections,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "./Data";
import "./ProductItems.css";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";



const ProductItems = () => {
  const {addItem,items}=useCart();
  return (
    <div className="cards">
      {products.data.map((item, ind) => {
        return (
          <div className="card col-lg-4" key={ind}>
            <img src={item.img} />
            <div className="card-contain">
              <p>{item.text} </p>
              <h6>$ {item.price} </h6>
            </div>
            <div className="shopping-cart btn">
              <FontAwesomeIcon
                className="shopping-icon"
                icon={faShoppingCart}
                onClick={() => addItem(item, 1)}
              />
            </div>
            <button className="btn-detail" title="Details" nmmb>
              <Link to={`/Products/${item.id}`}>
                {/* <Link to={"/Products/"+item.id}> */}
                <FontAwesomeIcon icon={faDirections} />
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductItems;
