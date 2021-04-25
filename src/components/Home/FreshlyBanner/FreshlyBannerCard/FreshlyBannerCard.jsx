import React from "react";

const FreshlyBannerCard = ({ data }) => {
  return (
    <div className="freshlyCard">
      <img src={data.FreshlyBanner} alt="" />
      <div className="freshly-content text-white">
        <h4>{data.freshlyTitle}</h4>
        <p>{data.freshlyDesc}</p>
        <button className='snip0047'>Shop Now <i className="ion-ios-cart"></i></button>
      </div>
    </div>
  );
};

export default FreshlyBannerCard;
