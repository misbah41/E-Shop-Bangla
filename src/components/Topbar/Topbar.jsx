import React from "react";
import "./Topbar.css";
import logo from "./logo.png";
const Topbar = () => {
  return (
    <div className="container-fluid">
      <div className="topbar">
        <div className="logoBox">
          <img
            style={{ width: "120px" }}
            className="img-fluid"
            src={logo}
            alt=""
          />
        </div>
        <div>
          <form className="form-inline my-2 my-lg-0">
            <input
              className=" searchInput form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="searchBtn"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="cartDiv">
          <h4>Your Items</h4>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
