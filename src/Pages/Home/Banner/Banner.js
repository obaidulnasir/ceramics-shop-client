import React from 'react';
import "./Banner.css";
import Button from 'react-bootstrap/Button';
import background from './banner.jpg'
import { Link } from 'react-router-dom';

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
            <Link to="/products" className="nav-link"><Button className="text-white px-5 py-2 mt-3 " variant="outline-dark"> More Products </Button></Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;