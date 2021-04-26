/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Garden1 from "../../garden/garden1.jpg";
import Garden2 from "../../garden/garden2.jfif";
import Garden3 from "../../garden/garden3.jpg";
import Garden4 from "../../garden/garden4.jpg";
import Garden5 from "../../garden/garden5.jpg";
import Garden6 from "../../garden/garden6.jpg";
import './FollowUs.css'
const FollowUs = () => {
  return (
    <section className="container-fluid pb-5 pt-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="follow-div">
            <h3 className='follow-title'>
              Follow Us On <br /> Facebook
            </h3>
            <button className='follow-button'>Follow Us</button>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
              <div className="imgBox">
                <a className='followimg' href="#">
                  {" "}
                  <img src={Garden6} alt="" />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
              <div className="imgBox">
                <a className='followimg' href="#">
                  {" "}
                  <img src={Garden2} alt="" />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
              <div className="imgBox">
                <a className='followimg' href="#">
                  {" "}
                  <img src={Garden3} alt="" />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
              <div className="imgBox">
                <a className='followimg' href="#">
                  {" "}
                  <img src={Garden4} alt="" />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
              <div className="imgBox">
                <a className='followimg' href="#">
                  {" "}
                  <img src={Garden5} alt="" />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
              <div className="imgBox">
                <a className='followimg' href="#">
                  {" "}
                  <img src={Garden1} alt="" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
