import React from "react";
import "./Enjoy.css";

import TV from "../../assets/tv.png";
import TVGif from "../../assets/tvgif.gif"

const Enjoy = () => {
  return (
    <div className="enjoy-fluid container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h1>Enjoy on your TV</h1>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={TV} alt="" className="tv-img" />
            <img src={TVGif} alt="video" className="enjoy-video" />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Enjoy;
