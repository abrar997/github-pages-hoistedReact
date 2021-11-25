import React from "react";
import products from "./ProductItems/Data";
import { useParams } from "react-router-dom";

const DetailsProduct = () => {
  const {id} = useParams();
  return (
    <div className="container">
      <div className="row">
        {products.data
        //   .filter((card) => card.id === id)
          .map((cardDetail, ind) => {
            return (
              <div key={ind}>
                <img src={cardDetail.img} />
                <h1>{cardDetail.text} </h1>
                <p>{cardDetail.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DetailsProduct;
