import React from "react";
import "./Navbar.css";
import { MdLocalShipping } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineLogin } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="header_top">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p>Free Shipping When Up to $1000 </p>
          </div>
        </div>
        <div className="mid_header">
          <div className="logo">
            <img src="image/logo.webp" alt="logo" />
          </div>
          <div className="search_box">
            <input type="text" placeholder="search" />
            <button>
              <IoMdSearch />
            </button>
          </div>
          <div className="user">
            <div className="icon">
              <MdOutlineLogin />
            </div>
            <div className="btn">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
