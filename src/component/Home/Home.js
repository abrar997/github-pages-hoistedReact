import React from "react";
// home component
import CustomFurniture from "./CustomFurniture/CustomFurniture";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Footer from "./Footer/Footer";
import Subsecribe from "./Subsecribe/Subsecribe";
import Zone from "./Zone/Zone";
import Header from './Header/Header'
const Home = () => {
  return (
    <div>
      <Header />
      <Zone />
      <FeaturedProducts />
      <CustomFurniture />
      <Subsecribe />
      <Footer />
    </div>
  );
};
export default Home;
