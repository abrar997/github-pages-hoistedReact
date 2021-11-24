import React from "react";
import { faDirections, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "./Data";
import "./ProductItems.css";
import { useCart} from 'react-use-cart'
const ProductsItemsColumn = () => {
  const { addItem,items } = useCart();
  return (
    <div className="Cards-Column">
      {products.data.map((item, ind) => {
        return (
          <div key={ind} className="card">
            <div className="image-card">
              <img src={item.img} />
            </div>

            <div className="card-contain">
              <p>{item.text} </p>
              <h6>${item.price} </h6>
              <button>
                <FontAwesomeIcon icon={faDirections} title="Details" />
              </button>
            </div>
            <div className="shopping-icon-card">
              <button 
              onClick={() => addItem(item)}
              >
                <FontAwesomeIcon icon={faShoppingCart} title="add to card" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsItemsColumn;
