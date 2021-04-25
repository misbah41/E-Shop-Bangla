import React, { useEffect, useState } from "react";
import Skeleton from "../../Share/Skeleton/Skeleton";
import DrinkCard from "./DrinkCard/DrinkCard";
import "./DrinkWater.css";
const DrinkWater = () => {
  const [waters, setWaters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/drinkWater")
      .then((res) => res.json())
      .then((data) => setWaters(data));
  }, []);

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-sm-8">
          <div className="content-title">
            <h3 className='watertitle'>Drinking Water...</h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {waters.map((waterData) => (
          <div className="col-sm-6 col-md-4 col-lg-3">
            {" "}
            <DrinkCard key={waterData._id} waterData={waterData} />{" "}
          </div>
        ))}

        {!waters.length && <Skeleton />}
      </div>
    </div>
  );
};

export default DrinkWater;
