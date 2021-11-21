import React from "react";
import { faAlignJustify, faShoppingCart, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// style
import "./Header.css";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Fragment } from "react";
const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <NavLink
                className="navbar-brand"
                to="/Home"
                title="just try we believe that you can do it"
              >
                code / <sapn style={{ color: "rgb(206, 110, 32)" }}>Mu.</sapn>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon mt-2">
                  <FontAwesomeIcon icon={faAlignJustify} />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/Home"
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/About" className="nav-link" href="#">
                      about
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Products" className="nav-link" href="#">
                      products
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className=" navbar-icons">
                <li className="btn position-relative">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    style={{ color: "rgba(0, 0, 0, 0.842)" }}
                  />
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    style={{ backgroundColor: " rgb(206, 110, 32)" }}
                  >
                    1<span class="visually-hidden">unread messages</span>
                  </span>
                </li>
                <li className="btn" title="sign up">
                  <FontAwesomeIcon
                    icon={faUserTie}
                    style={{ color: "rgba(0, 0, 0, 0.842)" }}
                  />
                </li>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
