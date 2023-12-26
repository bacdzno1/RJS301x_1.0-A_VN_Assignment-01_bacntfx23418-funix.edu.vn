import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best deals to you</p>
      <div className="form-input">
        <input type="text" placeholder="Your email"></input>
        <button>Subcribe</button>
      </div>
    </div>
  );
};

export default Form;
