import React from "react";
import "./Profile.css";

import ProfileImage from "../../assets/kids.png";

const Profile = () => {
  return (
    <div className="container-fluid profile-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={ProfileImage} alt="..." className="profile-img" />
          </div>
          <div className="col-lg-6">
            <div className="profile-content">
              <h1>Create profiles for kids</h1>
              <p>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
