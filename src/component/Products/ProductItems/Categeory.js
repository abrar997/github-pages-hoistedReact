import React from "react";
import "./ProductItems.css";

const Categeory = () => {
  return (
    <div className="categ-product">
      <div className="col-lg-12 mt-4">
        <div className="form ">
          <h5>search any thing </h5>
          <input
            type="text"
            placeholder="search .."
            className="position-relative"
          />
          {/* <FontAwesomeIcon icon={faSearch} className="position-absolute left-0 " /> */}
        </div>
        <div className="form mt-4 pt-4">
          <h5>sorted by .. </h5>
          <div className="form-contain">
            <input type="checkbox" id="highest" />
            <label htmlFor="highest">highest price </label>
          </div>

          <div className="form-contain">
            <input type="checkbox" id="lowest" />
            <label htmlFor="lowest">lowest price </label>
          </div>
          <h5 style={{ marginTop: "40px" }}> sorted by color</h5>
          <div className="Color">
            <span className="btn"></span>
            <span className="btn"></span>
            <span className="btn"></span>
            <span className="btn"></span>
            <span className="btn"></span>
          </div>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >company
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                Mu.A
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  fai
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Woo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categeory;
