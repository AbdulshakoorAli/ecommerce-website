import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white  p-2 shadow-sm">
        <a className="navbar-brand fw-bold fs-4 mx-2" href="#">
          PRELOVED OFFICIALS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0 px-2">
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">
                About <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link">
                Product <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" >
                Contact <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <a
            
            className="btn btn-outline-dark my-2 my-sm-0 me-2"
          >
            <i className="fa fa-sign-in me-1"></i> Sign In
          </a>
        </div>
        <div className="buttons">
          <a
            className="btn btn-outline-dark my-2 my-sm-0 me-2"
          >
            <i className="fa fa-user-plus me-1"></i> Register
          </a>
        </div>
        <div className="buttons">
          <a
            className="btn btn-outline-dark my-2 my-sm-0 me-2"
          >
            <i className="fa fa-shopping-cart me-1"></i> Cart(0)
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
