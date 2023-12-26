import React from "react";

import DateRangeComponent from "./DateRange";
import Header from "./Header";
import City from "./City";
import Type from "./Type";
import Hotel from "./Hotel";
import Form from "./Form";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Header />
      </div>

      <div className="content">
        <City />

        <Type />

        <Hotel />
      </div>

      <Form />

      <Footer />

      <DateRangeComponent />
    </div>
  );
};

export default Home;
