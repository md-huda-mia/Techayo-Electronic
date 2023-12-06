import React from "react";
import "./Navbar.css";
import { MdLocalShipping } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineLogin } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
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

          {isAuthenticated ? (
            <div className="user">
              <div className="icon">
                <RiLogoutBoxLine />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }>
                  LogOut
                </button>
              </div>
            </div>
          ) : (
            <div className="user">
              <div className="icon">
                <MdOutlineLogin />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}
        </div>
        <div className="last_header">
          <div className="user_profile">
            {isAuthenticated ? (
              <>
                <div className="icon">
                  <CiUser />
                </div>
                <div className="info">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </>
            ) : (
              <>
                <div className="icon">
                  <CiUser />
                </div>
                <div className="info">
                  <p>Please login</p>
                </div>
              </>
            )}
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/collection" className="link">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="offer">
            <p>flat 10% over all iphone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
