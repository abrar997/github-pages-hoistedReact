import React, { Fragment } from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import { Route } from "react-router";
import Home from "./component/Home/Home";
import { CartProvider } from "react-use-cart";
import DetailsProduct from "./component/Products/DetailsProduct";
import About from "./component/About/About";
import Products from "./component/Products/Producrs";
import Cart from "./component/Cart/Cart";
import Header from "./component/Home/Header/Header";
import Undefined from "./component/Undefined/Undefined";

const App = () => {
  return (
    <>
      {" "}
      <Router>
        <CartProvider>
          <Switch>
            <Route component={Home} path="./"  />
            <Route component={Home} path="/Home" />
            <Route component={About} path="/About" />
            <Route component={Products} path="/Products" />
            <Route component={Cart} path="/Cart" />
            <Route component={Undefined}  />
            {/* <Route path="/Products/:id" component={DetailsProduct} /> */}
          </Switch>
        </CartProvider>
      </Router>
    </>
  );
};

export default App;
