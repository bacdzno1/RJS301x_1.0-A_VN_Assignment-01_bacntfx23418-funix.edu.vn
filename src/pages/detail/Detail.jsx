import React from "react";

import Header from "../home/Header";
import Form from "../home/Form";
import Footer from "../home/Footer";
import detail from "../../data/detail.json";
import "./Detail.css";

const Detail = () => {
  return (
    <div className="detail-page">
      <div className="container">
        <Header />
      </div>

      <div className="content">
        <h1 className="detail-name">{detail.name}</h1>
        <div className="detail-address">
          <i className="fa fa-location-arrow"></i>
          <p>{detail.address}</p>
        </div>
        <p className="detail-distance">{detail.distance}</p>
        <p className="detail-price">{detail.price}</p>
        <button className="btn-booking">Reverse or Book now</button>
        <div className="detail-photos">
          {detail.photos.map((item) => (
            <img src={`${item}`} />
          ))}
        </div>
        <div className="detail-booking">
          <div className="detail-booking__desc">
            <h1 className="detail-booking__title">{detail.title}</h1>
            <p className="detail-booking__description">{detail.description}</p>
          </div>
          <div className="detail-booking__price">
            <h3 className="detail-booking__price-title">
              Perfect for a 9-night stay!
            </h3>
            <p className="detail-booking__price-description">
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <div className="detail-nine_night_price">
              <span>{`$${detail.nine_night_price} `}</span>
              <span>(9 nights)</span>
            </div>
            <button>Reverse or Book now</button>
          </div>
        </div>
      </div>

      <Form />

      <Footer />
    </div>
  );
};

export default Detail;
