import React from "react";
import "./FreshlyBanner.css";
import FreshlyBanner1 from "../../../components/images/smallbanner1.jpg";
import FreshlyBanner2 from "../../../components/images/smallbanner2.jpg";
import FreshlyBannerCard from "./FreshlyBannerCard/FreshlyBannerCard";

const freshlyData = [
  {
    freshlyTitle: "Freshly Picked Vegetables",
    freshlyDesc:
      "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
    FreshlyBanner: FreshlyBanner1,
    id: "893027536",
  },
  {
    freshlyTitle: "Freshly Picked Fruits",
    freshlyDesc:
      "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus",
    FreshlyBanner: FreshlyBanner2,
    id: "7635286372",
  },
];

const FreshlyBanner = () => {
  return (
    <section className="mt-5 pt-3 mb-5 pb-3">
      <div className="container">
        <div className="row">
          {freshlyData.map((data) => (
            <div className="col-md-6">
              {" "}
              <FreshlyBannerCard key={data.id} data={data} />{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreshlyBanner;
