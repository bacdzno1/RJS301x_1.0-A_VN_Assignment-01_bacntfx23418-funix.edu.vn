import React from "react";

import typeOf from "../../data/type.json";
import "./Type.css";

const Type = () => {
  return (
    <div className="type-list">
      <h2>Browse by property type</h2>
      {typeOf.map((item) => (
        <div className="type-item">
          <img src={item.image}></img>
          <div className="type-desc">
            <h3>{item.name}</h3>
            <p>{`${item.count} ${item.name.toLowerCase()}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Type;
