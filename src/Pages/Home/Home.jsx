import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="content">
            <h3>Silver aluminum</h3>
            <h2>Apple Whatch</h2>
            <p>30% off at your first order</p>
            <Link to="/shop" className="link">
              Shop
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left_box">
              <div className="header">
                <div className="heading">
                  <h2>Trending product</h2>
                </div>
                <div className="cate">
                  <h3>New</h3>
                  <h3>Featured</h3>
                  <h3>top selling</h3>
                </div>
              </div>
              <div className="products">
                <div className="container"></div>
              </div>
            </div>
            <div className="right_box"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
