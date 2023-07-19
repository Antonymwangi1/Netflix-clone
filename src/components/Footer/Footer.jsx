import React from "react";
import "./Footer.css";

import { FaGlobe } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-fluid container-fluid">
      <div className="container">
        <p>
          <a href="https://help.netflix.com/en/contactus">
            Questions? Contact us
          </a>
        </p>
        <div className="row">
          <div className="col-lg-4">
            <ul>
              <li>
                <a href="https://help.netflix.com/en/node/412">FAQ</a>
              </li>
              <li>
                <a href="https://media.netflix.com/en/">Media Center</a>
              </li>
              <li>
                <a href="https://devices.netflix.com/en/">Ways to Watch</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="https://fast.com/">Speed Test</a>
              </li>
            </ul>
            <button className="lang-btn btn">
              <FaGlobe /> English
            </button>
          </div>
          <div className="col-lg-4">
            <ul>
              <li>
                <a href="https://help.netflix.com/en/">Help center</a>
              </li>
              <li>
                <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/termsofuse">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/corpinfo">
                  corporate Information
                </a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/notices">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <ul>
              <li>
                <a href="https://www.netflix.com/ke/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">
                  Account
                </a>
              </li>
              <li>
                <a href="https://jobs.netflix.com/">Jobs</a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/privacy">Privacy</a>
              </li>
              <li>
                <a href="https://help.netflix.com/en/contactus">Contact Us</a>
              </li>
              <li>
                <a href="https://www.netflix.com/ke/browse/genre/839338">
                  Only on Netflix
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
