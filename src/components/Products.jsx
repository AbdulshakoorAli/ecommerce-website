import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let mounter = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      if (mounter) {
        const response = await fetch("https://fakestoreapi.com/products");
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        mounter = false;
      };
    };

    getProducts();
  }, []);

  const filterProduct = (categrey) => {
    // const Updated_data = setFilter((x) => x.category == categrey);
    // setData(Updated_data);
  };

  const Loading = () => {
    return <>Loading....</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={filterProduct("Men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={filterProduct("Women's clothing")}
          >
            Women's clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={filterProduct("Jewellary")}
          >
            Jewellary
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={filterProduct("Electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-1">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text fw-bolder fs-4">
                      $ {product.price}
                    </p>
                    <NavLink
                      to={`products/${product.id}`}
                      className="btn btn-dark"
                    >
                      BUY NOW
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-5 text-center fw-bolder">LATEST PRODUCTS</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
