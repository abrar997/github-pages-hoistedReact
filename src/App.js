import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import { Route } from "react-router";
import Home from "./component/Home/Home";
import Header from "./component/Home/Header/Header";
import About from "./component/About/About";
import Footer from "./component/Home/Footer/Footer";
import Products from "./component/Products/Producrs";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Home} path="/Home" />
        <Route component={About} path="/About" />
        <Route component={Products} path="/Products" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
