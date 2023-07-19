import React from "react";
import "./Header.css";

import BackImage from "../../assets/Netflix-Background.jpg";
// import { FaGreaterThan } from "react-icons/fa"

const Header = () => {
  return (
    <>
      <div className="container-fluid img-fluid w-100">
        <img src={BackImage} alt="..." className="bg-img" />
      </div>
      <div className="overlay"></div>
      <div className="header-content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form>
            <input type="email" name="email" id="email" className="input" placeholder="Email address" />
            <button className="btn get-started-btn">Get Started</button>
        </form>
      </div>
    </>
  );
};

export default Header;
