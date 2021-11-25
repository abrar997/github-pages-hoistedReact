import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
      <Router>
        <Header />

        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/About" exact />
          <Route component={Products} path="/Products" exact />
          <Route component={Cart} path="/Cart" exact />
          <Route component={Undefined} exact />
          <Route path="/Products/:id" component={DetailsProduct} exact />
        </Switch>
      </Router>
    </CartProvider>
  );
};

export default App;
