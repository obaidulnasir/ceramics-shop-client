import React from 'react';
import "./Banner.css";
import Button from 'react-bootstrap/Button';
import background from './banner.jpg'

const Banner = () => {
    return (
        <div>
            <div>
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="banner-images d-flex align-items-center justify-content-center"
        >
          <div className="text-center">
              <p className="text-white">Timeless Shap</p>
            <h1 className="my-2 text-white fw-bolder">ELIGANTLY DESIGN POTS</h1>
            {/* <input placeholder="Search" className="input-field border w-75" type="text" /> */}
            <Button className="text-white px-5 py-2 mt-3 " variant="outline-dark"> Explore </Button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;