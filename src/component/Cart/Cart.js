import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import img1 from "./CartImages/cartempty.png";
// style
import './Cart.css';
import Footer from "../Home/Footer/Footer";

const Cart = () => {
  // grey color mean function
  // blue color just add these word in length or any whre
  const {
    isEmpty,
    totalItems,
    items,
    removeItem,
    emptyCart,
    cartTotal,
    updateItemQuantity,
  } = useCart();


  // ~~~~~~~~~~~~is empty ~~~~~~~~~~~~~~
  if (isEmpty) {
    return (
      <div className="empty-cart">
        <h3
          style={{
            textAlign: "center",
            color: "black",
            padding: "10px",
            color: "gray",
            fontWeight: "600",
            textTransform: "capitalize",
            width: "400px",
            margin: "auto",
            marginTop: "60px",
          }}
        >
          Your cart is empty back and add what u need ....
          <Link
            to="/Products"
            style={{ textDecoration: "none", color: "rgb(206, 110, 32)" }}
          >
            start now
          </Link>
        </h3>
        <img src={img1} />
        {/* <Footer /> */}
      </div>
    );
  }
// /~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``

// ~~~~~~~~~~~~~~~ cart with items ~~~~~~~~~~~
  return (
<div className="cart">
<div className="cart-fall">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 text-left">
            <h2>shopping cart </h2>
            <h5 style={{ color: "gray" }}>
              {/* Cart ({totalUniqueItems}) */}
              total Items:({totalItems})
            </h5>
          </div>
          <div className=" col-lg-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="card col-lg-12 col-md-8 col-sm-8 p-10"
              >
                <div className="imagesCart col-sm-4 col-md-4">
                  {/* cart image */}
                  <img src={item.img} />
                </div>

                <div className="textsss pb-4 ">
                  {/* text in cart */}
                  <h3>{item.text} </h3>

                  <h6>${item.price}</h6>
                </div>
                <div className="cart-button">
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  > -
                  </button>
                 <span style={{fontSize:"22px",margin:"0 10px 0 5px",fontWeight:"600"}}> {item.quantity}</span>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }>  +
                  </button>
                </div>
              <div >  <button className="cartbtn" onClick={() => removeItem(item.id)}>
                 {/* <FontAwesomeIcon icon={faTrashAlt}/> */}
                 remove
                </button>
              </div></div>
            ))}
             <div className="total-price-cart d-flex">
            <h4>Total price : {cartTotal} $ </h4>
            <button className="btn empty-cart-btn" onClick={() => emptyCart()}>
              empty cart
            </button>
          </div>
          </div>
         
        </div>
      </div>
    </div>
{/* <Footer /> */}
</div> 

);
};

export default Cart;
