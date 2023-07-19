import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/Netflix_logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container d-flex align-items-center">
          <div className='logo'>
            <a href="/">
              <img src={Logo} alt="..." className='logo-img' />
            </a>
          </div>
          <button className="btn sign-in-btn">Sign In</button>
        </div>
    </div>
  )
}

export default Navbar