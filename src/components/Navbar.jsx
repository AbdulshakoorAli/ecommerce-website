import React from "react";
const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-white  p-2 shadow-sm">
        <a class="navbar-brand fw-bold fs-4 mx-2" href="#">
          PRELOVED OFFICIALS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mx-auto mt-2 mt-lg-0 px-2">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                About <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Product <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Contact <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <a className="btn btn-outline-dark my-2 my-sm-0 me-2">
            <i className="fa fa-sign-in me-1"></i> Sign In
          </a>
        </div>
        <div className="buttons">
          <a className="btn btn-outline-dark my-2 my-sm-0 me-2">
            <i className="fa fa-user-plus me-1"></i> Register
          </a>
        </div>
        <div className="buttons">
          <a className="btn btn-outline-dark my-2 my-sm-0 me-2">
            <i className="fa fa-shopping-cart me-1"></i> Cart(0)
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
