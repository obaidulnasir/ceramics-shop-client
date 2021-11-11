import React from "react";

const Footer = () => {
  return (
    <div className="bg-black py-5">
      <div className="container">
        <div className="row text-white">
          <div className="col-md-4">
            <h4>CeramicsShop</h4>
            <p className="fs-6">
            Come explore beaches, old growth forests, tea plantations and swarming cities on a private Bangladesh tour with a friendly local guide.
            </p>
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
