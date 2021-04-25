import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../Share/Header/Header";
import ProductCheckoute from "../ProductCheckoute/ProductCheckoute";

const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("http://localhost:3500/productById/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <>
      <Header />
      <div className="container">
        <ProductCheckoute product={product} />
      </div>
    </>
  );
};

export default ProductsDetail;
