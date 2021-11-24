import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import { Route } from "react-router";
import Home from "./component/Home/Home";
import Header from "./component/Home/Header/Header";
import About from "./component/About/About";
import Footer from "./component/Home/Footer/Footer";
import Products from "./component/Products/Producrs";
import Cart from "./component/Cart/Cart";
import { CartProvider } from "react-use-cart";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
      
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/About" />
          <Route component={Products} path="/Products" />
          <Route component={Cart} path="/Cart" />
          {/* <Route exact path="/products/:details" component={DetailsProduct} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
