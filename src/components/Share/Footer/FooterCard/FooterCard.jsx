import React from "react";
import { Link } from "react-router-dom";

const FooterCard = ({ data }) => {
  return (
    <div>
      <h5 className='footer-title  text-white'>{data.footerTitle}</h5>
      <ul className='footerLink'>
        <li className='footer-item'>
          <Link>{data.footerLink1}</Link>
        </li>
        <li className='footer-item'>
          <Link>{data.footerLink2}</Link>
        </li>
        <li className='footer-item'>
          <Link>{data.footerLink3}</Link>
        </li>
        <li className='footer-item'>
          <Link>{data.footerLink4}</Link>
        </li>
        <li className='footer-item'>
          <Link>{data.footerLink5}</Link>
        </li>
      </ul>    
    </div>
  );
};

export default FooterCard;
