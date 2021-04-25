import React from "react";
import "./TopFoodList.css";
import cheers from "../../foods/cheers.svg";
import cola from "../../foods/cola.svg";
import hamburger from "../../foods/hamburger.svg";
import orange from "../../foods/orange.svg";
import pizza from "../../foods/pizza.svg";
import TopFoodCard from "./TopFoodCard/TopFoodCard";
const TopFoodList = () => {
  const foodData = [
    {
      foodTitle: "Cheers",
      foodIcon: cheers,
    },
    {
      foodTitle: "Cocacola",
      foodIcon: cola,
    },
    {
      foodTitle: "Burger",
      foodIcon: hamburger,
    },
    {
      foodTitle: "Orange",
      foodIcon: orange,
    },
    {
      foodTitle: "Pizza",
      foodIcon: pizza,
    }
  ];
  return (
    <div className="container mb-5 pb-3 mt-5">
      <div className="row justify-content-center">
        {foodData.map((data) => (
          <div className="col-sm-4 col-md-3 col-lg-2">
            {" "}
            <TopFoodCard data={data} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFoodList;
