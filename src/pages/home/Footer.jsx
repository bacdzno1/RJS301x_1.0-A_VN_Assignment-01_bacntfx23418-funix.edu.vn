import React from "react";

import footer from "../../data/footer.json";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {footer.map((item) => (
        <div className="footer-list">
          {item.col_values.map((value) => (
            <p>
              <a href="#">{value}</a>
            </p>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
