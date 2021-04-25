import React from "react";
import "./ProductCheckoute.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

const ProductCheckoute = ({ product }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <div className="detail-img">
            <InnerImageZoom
              src={`data:image/png;base64,${product.image?.img}`}
              zoomSrc={`data:image/png;base64,${product.image?.img}`}
              zoomType="hover"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-content">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>Price : {product.productPrice}$</h4>
            <p>
              <strong>Categorie</strong> : {product.categories}
            </p>
            <p>
              <strong>Tags</strong> : {product.tags}
            </p>
            <p>
              <strong>Discount</strong> : {product.discount}%{" "}
              {product.productsOff}
            </p>
            {product.categories === "fruit" && (
              <select className="form-control mb-4" name="cars" id="cars">
                <option>Select Amount</option>
                <option value="1 Kilo">1 Kilo</option>
                <option value="2 Kilos">2 Kilos</option>
                <option value="3 Kilos">3Kilos</option>
                <option value="4 Kilos">4Kilos</option>
                <option value="5 Kilos">5Kilos</option>
              </select>
            )}
            <button className="checkoutBtn">Checkoute</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckoute;
