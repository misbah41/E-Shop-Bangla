import React from "react";
import "./Home.css";
import CarouselBanner from "../CarouselBanner/CarouselBanner";
import Header from "../../Share/Header/Header";
import Topbar from "../../Topbar/Topbar";
import ProductsCard from "../ProductsCard/ProductsCard/ProductsCard";
import FreshlyBanner from "../FreshlyBanner/FreshlyBanner";
import CardCarousel from "../CardCarousel/CardCarousel";
import DrinkWater from "../Water/DrinkWater";
import GetOffer from "../GetOffer/GetOffer";
import TopFoodList from "../TopFoodList/TopFoodList";
import Footer from "../../Share/Footer/Footer";
import FollowUs from "../FollowUs/FollowUs";

const Home = () => {
  return (
    <>
      <Topbar />
      <Header />
      <CarouselBanner />
      <TopFoodList />
      <ProductsCard />
      <FreshlyBanner />
      <CardCarousel />
      <GetOffer />
      <DrinkWater />
      <FollowUs />
      <Footer />
    </>
  );
};

export default Home;
