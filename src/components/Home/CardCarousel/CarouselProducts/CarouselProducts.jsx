import React from "react";
import './CarouselProducts.css'
const CarouselProducts = ({drinkData}) => {
  return (
    <div className='carouselCard pt-5'>
      <img style={{ height:'200px'}} src={`data:image/png;base64,${drinkData.image.img}`} alt="" />
      <div className="drink-content">
        <h4 className='carouselPdName'>{drinkData.name}</h4>
        <h5 className='priceDrink'>$ {drinkData.productPrice}</h5>
        <button className='drink-btn'>Add To Cart</button><br/>
        <button className='drink-btn quick-btn '>Quick View</button>
      </div>
    </div>
  );
};

export default CarouselProducts;
