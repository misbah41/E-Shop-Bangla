import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";
import ProductCheckoute from "../ProductCheckoute/ProductCheckoute";

const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://peaceful-caverns-55095.herokuapp.com/productById/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <>
      <Header />
      <div className="container">
        <ProductCheckoute product={product} />
      </div>
      <Footer/>
    </>
  );
};

export default ProductsDetail;
