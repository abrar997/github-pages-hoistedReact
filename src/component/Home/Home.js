import React from "react";
// home component
import CustomFurniture from "./CustomFurniture/CustomFurniture";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Subsecribe from "./Subsecribe/Subsecribe";
import Zone from "./Zone/Zone";
const Home = () => {
  return (
    <div>
      <Zone />
      <FeaturedProducts />
      <CustomFurniture />
      <Subsecribe />
    </div>
  );
};
export default Home;
