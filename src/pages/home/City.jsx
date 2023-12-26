import React from "react";

import city from "../../data/city.json";
import "./City.css";

const City = () => {
  return (
    <div className="city-list">
      {city.map((item) => (
        <div className="city-item">
          <img src={item.image} alt="City Image" />
          <div className="city-desc">
            <h2>{item.name}</h2>
            <h3>{item.subText}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default City;
