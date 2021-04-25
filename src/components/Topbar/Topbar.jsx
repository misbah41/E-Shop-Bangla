import React from "react";
import "./Topbar.css";
import logo from "./logo.png";
const Topbar = () => {
  return (
    <div className="topbar d-flex justify-content-around">
      <div className="logoBox">
        <img style={{width:'120px'}} className="img-fluid" src={logo} alt="" />
      </div>
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="cartDiv">
        <h4>Your Items</h4>
      </div>
    </div>
  );
};

export default Topbar;
