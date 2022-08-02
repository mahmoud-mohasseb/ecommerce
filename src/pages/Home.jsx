import React from "react";
import Float from "../components/Float";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Feature from "../components/Feature";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Float />
      <Navbar />
      <Carousel />
      <Categories />
      <Feature />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
