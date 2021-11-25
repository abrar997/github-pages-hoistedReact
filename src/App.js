import React, { Fragment } from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router";
import { Route } from "react-router";
import Home from "./component/Home/Home";
import Header from "./component/Home/Header/Header";
import About from "./component/About/About";
import Products from "./component/Products/Producrs";
import Cart from "./component/Cart/Cart";
import { CartProvider } from "react-use-cart";
import Undefined from "./component/Undefined/Undefined";
import DetailsProduct from "./component/Products/DetailsProduct";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route component={Home} path="/" exact />
          {/* <Route component={Undefined}  /> */}
          <Route path="/Products/:id" component={DetailsProduct} />   
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
