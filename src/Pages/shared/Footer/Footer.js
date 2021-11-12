import React from "react";

const Footer = () => {
  return (
    <div className="bg-black py-5">
      <div className="container">
        <div className="row text-white">
          <div className="col-md-4">
            <h4>CeramicsShop</h4>
            <p className="fs-6">
            We believe that our beautiful collection should be available for every home. Shop your favorite handmade stoneware online by adding each item to your online shopping basket. If you are looking for a cute gift for a friend, we make sure to gift wrap your items with no extra charges.</p>
          </div>
          <div className="col-md-4">
            {/* <ul>
              <li>
                <link rel="stylesheet" href="/home" />
                Home
              </li>
              <li>
                <link rel="stylesheet" href="/about" />
                About
              </li>
              <li>
                <link rel="stylesheet" href="/services" />
                Services
              </li>
            </ul> */}
          </div>
          <div className="col-md-4 fs-3">
            <h5>Stay with us</h5>
            <i className="bi bi-twitter m-1"></i>
            <i className="bi bi-facebook m-1"></i>
            <i className="bi bi-instagram m-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
