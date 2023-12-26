import React, { useState } from "react";

import "./NavBarItem.css";
import data from "../../data/navBar.json";

const NavBarItem = () => {
  return (
    <ul className="navbar-list">
      {data.map((item) => (
        <li className={`${item.active ? "active" : ""}`}>
          <a href="#">
            <i className={`fa ${item.icon} `}></i>
            <span>{item.type}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavBarItem;
