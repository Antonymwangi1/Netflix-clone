import React from "react";
import "./Watch.css";

import DevicePile from "../../assets/device-pile.png";
import MovieGif from "../../assets/movie.gif"

const Watch = () => {
  return (
    <div className="watch-fluid container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="watch-content">
              <h1>Watch Everywhere</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={DevicePile} alt="..." className="device-pile-img" />
            <img src={MovieGif} alt="..." className="watch-gif" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
