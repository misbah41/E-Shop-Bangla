import React from "react";
import "./Footer.css";
import FooterCard from "./FooterCard/FooterCard";
import FooterSocial from "./FooterSocial/FooterSocial";

const Footer = () => {
  const footerData = [
    {
      footerTitle: "Information",
      footerLink1: "Home",
      footerLink2: "About",
      footerLink3: "Service",
      footerLink4: "Shop",
      footerLink5: "Today Offers",
    },
    {
      footerTitle: "Top Categories",
      footerLink1: "Men's Offer",
      footerLink2: "Deals",
      footerLink3: "Local Market",
      footerLink4: "Food Offers",
      footerLink5: "Drink Water Offers",
    },
    {
      footerTitle: "Others Info",
      footerLink1: "Ceheckout",
      footerLink2: "Cart",
      footerLink3: "Product",
      footerLink4: "Legal",
      footerLink5: "Blogs",
    },
  ];
  return (
    <footer>
      <div className="container pb-5">
        <div className="row">
          {footerData.map((data) => (
            <div className="col-sm-12 col-md-4 ">
              {" "}
              <FooterCard data={data} />{" "}
            </div>
          ))}
        </div>
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
