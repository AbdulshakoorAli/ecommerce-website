import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loader, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-5">
          <img src={product.image} alt="product" height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5"> {product.title} </h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star" />
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead text-justify">{product.description}</p>
          <NavLink to="/hello" className="btn btn-outline-black px-4 ">
            Add to Cart
          </NavLink>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container py-5">
        <div className="row py-5">{loader ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};

export default Product;
