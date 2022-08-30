import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="card bg-dark text-white border-0">
        <img
          className="card-img"
          src="assets/bg.jpg"
          alt="Card image"
          height="650px"
        />
        <div className="card-img-overlay container d-flex justify-content-center flex-column">
          <h5 className="card-title display-4 mb-0 fw-bolder">
            NEW SEASON ARRIVAL
          </h5>
          <p className="card-text fs-2 ">CHECK OUT ALL TRENDS</p>
        </div>
      </div>
      <Products />
    </>
  );
};

export default Home;
