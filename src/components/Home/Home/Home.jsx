import React from "react";
import CarouselBanner from "../CarouselBanner/CarouselBanner";
import Header from "../../Share/Header/Header";
import Topbar from "../../Topbar/Topbar";
import ProductsCard from "../ProductsCard/ProductsCard/ProductsCard";
import FreshlyBanner from "../FreshlyBanner/FreshlyBanner";
import CardCarousel from "../CardCarousel/CardCarousel";
import DrinkWater from "../Water/DrinkWater";
import GetOffer from "../GetOffer/GetOffer";

const Home = () => {
  return (
    <>
      <Topbar />
      <Header />
      <CarouselBanner />
      <ProductsCard />
      <FreshlyBanner />
      <CardCarousel />
      <GetOffer />
      <DrinkWater />
    </>
  );
};

export default Home;
