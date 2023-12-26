import React from "react";

import hotel from "../../data/hotel_list.json";
import "./Hotel.css";

const Hotel = () => {
  return (
    <div className="hotel-list">
      <h2>Home guests love</h2>
      {hotel.map((item) => (
        <div className="hotel-item">
          <img src={item.image_url}></img>
          <div className="hotel-desc">
            <h3>
              <a href="/detail">{item.name}</a>
            </h3>
            <p>{item.city}</p>
            <h4>{`Starting from $${item.price}`}</h4>
            <div className="hotel-rating">
              <p>{item.rate}</p>
              <p>{item.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotel;
