import React from "react";

import NavBarItem from "./NavBarItem";
import DateRangeComponent from "./DateRange";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Header.css";

const Header = () => {
  const handlerSearchPage = () => {
    window.location.replace("/search");
  };

  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    console.log(item.selection);
    setRange(item.selection);
  };

  return (
    <header className="homepage">
      <div className="homepage-navbar">
        <h2 className="homepage-navbar__title">Booking Website</h2>
        <div className="homepage-navbar__user">
          <button className="homepage-navbar__user-register">Register</button>
          <button className="homepage-navbar__user-login">Login</button>
        </div>
      </div>
      <NavBarItem />

      <div className="homepage-header">
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>
          Get rewarded for your travels - unclock instant savings of 10% or more
          with a free account
        </p>
        <button className="btn">Sign in / Register </button>
        <div className="homepage-header__input">
          <div className="homepage-header__input-destination">
            <i className="fa fa-bed"></i>
            <input type="text" placeholder="Where are you going?"></input>
          </div>

          <div className="homepage-header__input-calendar">
            <i className="fa fa-calendar"></i>

            <input
              value={`${format(range.startDate, "dd/MM/yyyy")} - ${format(
                range.endDate,
                "dd/MM/yyyy"
              )}`}
              readOnly
              onClick={() => (!isOpen ? setIsOpen(true) : setIsOpen(false))}
            />

            {isOpen && (
              <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                showSelectionPreview={true}
                className="date"
                minDate={new Date()}
                onChange={handleSelect}
                ranges={[range]}
                months={2}
                direction="horizontal"
              />
            )}
          </div>

          <div className="homepage-header__input-book">
            <i className="fa fa-female"></i>
            <input
              type="text"
              placeholder="1 adult - 0 children - 1 room"
            ></input>
          </div>
          <button className="btn" onClick={handlerSearchPage}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
