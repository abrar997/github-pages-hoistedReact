import React from "react";
import img1 from "./imagenotfound/img2.png";
import { Link, NavLink } from "react-router-dom";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";

const error_page = {
  textAlign: "center",
  marginTop: "200px",
  textTransform: "capitalize",
};
const Undefined = () => {
  return (
    <>
      <Header />
      <div style={error_page}>
        <div className="container">
          <div className="row">
            <h1>
              welcome in our shop ,enjoy shopping with us.
              <br />
              <NavLink to="/Home" activeClassName="mt-4">start shopping now</NavLink>
            </h1>
            <img src={img1} style={{ width: "50%", margin: "auto" }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Undefined;
