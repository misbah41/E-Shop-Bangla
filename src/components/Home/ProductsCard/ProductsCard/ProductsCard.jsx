import React, { useEffect, useState } from "react";
import Skeleton from "../../../Share/Skeleton/Skeleton";
import SingleProductCard from "../SingleProductCard/SingleProductCard";

const ProductsCard = () => {
  const [fruitProducts, setFruitProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/fruitProducts")
      .then((res) => res.json())
      .then((data) => setFruitProducts(data));
  }, []);

  return (
    <section>
      <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="content-title">
            <h3 className="watertitle">Buy Healthy Friuts</h3>
          </div>
        </div>
      </div>
        <div className="row justify-content-center">
          {fruitProducts.map((singleCard) => (
            <div className="col-lg-6">
              {" "}
              <SingleProductCard
                key={singleCard._id}
                singleCard={singleCard}
              />{" "}
            </div>
          ))}
          {!fruitProducts.length && <Skeleton />}
        </div>
      </div>
    </section>
  );
};

export default ProductsCard;
