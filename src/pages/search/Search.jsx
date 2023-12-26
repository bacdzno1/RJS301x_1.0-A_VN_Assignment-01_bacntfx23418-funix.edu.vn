import React from "react";

import Header from "../home/Header";
import SearchList from "./SearchList";
import Form from "../home/Form";
import Footer from "../home/Footer";
import "./Search.css";
import "../home/Home.css";

const Search = () => {
  return (
    <div className="searchpage">
      <div className="container">
        <Header />
      </div>

      <div className="content">
        <div className="content-search">
          <h2>Search</h2>
          <div>
            <label htmlFor="destination">Destination</label>
            <input type="text" name="destination" id="destination" />
          </div>
          <div>
            <label htmlFor="check-in-date">Check-in Date</label>
            <input type="text" name="check-in-date" id="check-in-date" />
          </div>
          <p>Options</p>
          <div className="options-list">
            <div>
              <label htmlFor="min-price">Min price per night</label>
              <input type="text" name="min-price" id="min-price" />
            </div>
            <div>
              <label htmlFor="max-price">Max price per night</label>
              <input type="text" name="max-price" id="max-price" />
            </div>
            <div>
              <label htmlFor="adult">Adult</label>
              <input type="text" name="adult" id="adult" placeholder="1" />
            </div>
            <div>
              <label htmlFor="children">Children</label>
              <input
                type="text"
                name="children"
                id="children"
                placeholder="0"
              />
            </div>
            <div>
              <label htmlFor="room">Room</label>
              <input type="text" name="room" id="room" placeholder="1" />
            </div>
          </div>

          <button>Search</button>
        </div>

        <SearchList />
      </div>

      <Form />

      <Footer />
    </div>
  );
};

export default Search;
