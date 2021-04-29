import React from "react";
import "./CarouselBanner.css";
const CarouselBanner = () => {
  return (
    <div className="carouselbg">
      <div className="container">
        <h3 className='text-center searchTitle'>Shop With Your Favourite Things</h3>
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="d-flex justify-content-around searchBox">
              <input
                className="form-control mr-sm-2 search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="searchBtn">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;
