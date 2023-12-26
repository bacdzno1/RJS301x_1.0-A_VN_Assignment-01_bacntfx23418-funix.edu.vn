import React from "react";

import search from "../../data/search.json";
import "./SearchList.css";

const SearchList = () => {
  return (
    <div className="search-list">
      {search.map((item) => (
        <div className="search-item">
          <img src={item.image_url}></img>
          <div className="search-item__detail">
            <h2 className="search-item__name">{item.name}</h2>
            <p className="search-item__distance">{`${item.distance} from center`}</p>
            <p className="search-item__tag">{item.tag}</p>
            <h3 className="search-item__description">{item.description}</h3>
            <p className="search-item__type">{item.type}</p>
            <div
              className={`${
                !item.free_cancel && "hide"
              } search-item__free-cancel`}
            >
              <h3>Free cancellation</h3>
              <p>You can cancel later, so lock in this great price today!</p>
            </div>
          </div>
          <div className="search-item__feedback">
            <div className="search-item__rating">
              <p className="search-item__text">{item.rate_text}</p>
              <p className="search-item__point">{item.rate}</p>
            </div>
            <h2 className="search-item__price">{`$${item.price}`}</h2>
            <p className="search-item__include">Includes taxes and fees</p>
            <button>See availability</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
