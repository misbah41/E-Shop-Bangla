import React from "react";
import { Link } from "react-router-dom";
import "./DrinkCard.css";
const DrinkCard = ({ waterData }) => {
  return (
    <div className="waterCard">
      <p className="discount">
        {waterData.discount}% {waterData.productsOff}
      </p>
      <div className="waterimg">
        <img
          style={{ height: "200px" }}
          src={`data:image/png;base64,${waterData.image.img}`}
          alt=""
        />
      </div>
      <div className="drink-content">
        <h4 className="waterPdName">{waterData.name}</h4>
        <h5 className="priceDrink">$ {waterData.productPrice}</h5>
        <Link to={`/productDetail/${waterData._id}`}>
          <button className="water-btn">Buy Now</button>
        </Link>
        <br />
        <button className="drink-btn quick-btn ">Quick View</button>
      </div>
    </div>
  );
};

export default DrinkCard;
