import React from "react";
import { Link } from "react-router-dom";
import "./SingleProductCard.css";
const SingleProductCard = ({ singleCard }) => {
  return (
    <div className="d-flex jsutify-content-between product-div pt-4">
      <div className="cardImg">
        <img src={`data:image/png;base64,${singleCard.image.img}`} alt="" />
      </div>
      <div className="card-content">
        <h3 className="pd-name">{singleCard.name}</h3>
        <p className="pd-description">{singleCard.description}</p>
        <div className="buy-div d-flex justify-content-between">
          <Link to={`/productDetail/${singleCard._id}`}>
            <button className="snip0050">
              <i className="ion-ios-cart"></i> Buy Now
            </button>
          </Link>
          <p className="product-price">{singleCard.productPrice}$</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
