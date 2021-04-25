import React from "react";
import "./GetOffer.css";

const GetOffer = () => {
  return (
    <section className='getofferbg'>
      <div className="container">
        <h3 className='getTitle'>Buy Today And Get 15% Off</h3>
        <p className='getPost'>
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras
          ultricies ligula sed magna dictum <br/>porta. Praesent sapien massa,
          convallis a pellentesque nec, egestas non nisi.
        </p>
        <button className='getBtn'>Get Offer Today</button>
      </div>
    </section>
  );
};

export default GetOffer;
