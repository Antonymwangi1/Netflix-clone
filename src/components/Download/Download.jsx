import React from "react";
import "./Download.css";

import Mobile from "../../assets/mobile.jpg";
import BoxShot from "../../assets/boxshot.png";
import Gif from "../../assets/download_gif.gif";

const Download = () => {
  return (
    <div className="container-fluid download-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={Mobile} alt="..." className="mobile-img" />
            <div className="card card-body d-flex">
              <img src={BoxShot} alt="" className="boxshot-img" />
              <div className="stranger">
                <p style={{ padding: "0", margin: "0" }}>Stranger Things</p>
                <p className="text-primary">Downloading...</p>
              </div>
              <div className="download-animation">
                <img src={Gif} alt="download gif" className="gif" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="download-content">
              <h1>Download your shows to watch offline</h1>
              <p>
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default Download;
