import React from "react";
import { Link } from "react-router-dom";

const TopFoodCard = ({ data }) => {
  return (
    <Link className='foodLink'>
      <div className="foodCard">
        <img style={{ height: "60px" }} src={data.foodIcon} alt="" />
        <h4 className="foodtText">{data.foodTitle}</h4>
      </div>
    </Link>
  );
};

export default TopFoodCard;
