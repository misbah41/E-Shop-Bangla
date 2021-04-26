import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselProducts from "./CarouselProducts/CarouselProducts";

const CardCarousel = () => {
  const [drinkProduct, setDrinkProduct] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-caverns-55095.herokuapp.com/drinkProducts")
      .then((res) => res.json())
      .then((data) => setDrinkProduct(data));
  }, []);

  return (
    <div className="mb-2 pb-5 container bg-light">
      <div className="row">
        <div className="col-sm-8">
          <div className="content-title">
            <h3 className="watertitle">Cool Drink And Fruits Juice</h3>
          </div>
        </div>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {drinkProduct.map((drinkData) => (
          <CarouselProducts key={drinkData._id} drinkData={drinkData} />
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default CardCarousel;
