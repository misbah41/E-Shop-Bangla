/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterSocial = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-md-6 pl-5">
        <div className="d-flex">
          <a href="https://www.facebook.com/" className="snip1180 ">
            {" "}
            <FontAwesomeIcon icon={faFacebookF} />{" "}
          </a>
          <a href="https://www.facebook.com/" className="snip1180 ">
            {" "}
            <FontAwesomeIcon icon={faTwitter} />{" "}
          </a>
          <a href="https://www.facebook.com/" className="snip1180 ">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </a>
        </div>
        <p className="text-white ml-4">
          Signup and get <br />
          exclusive offers and coupon codes
        </p>
        <button className=" ml-4">Sign Up</button>
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-around privacy">
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
