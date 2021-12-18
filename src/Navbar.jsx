import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import avtar from "./images/image-avatar.png";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 mx">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img
                    src={logo}
                    alt="logo"
                    width="110"
                    height="20"
                    className="d-inline-block align-0"
                  />
                </NavLink>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-5 mb-0 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/collection"
                      >
                        Collections
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/men"
                      >
                        Men
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/women"
                      >
                        Women
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>

                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu"
                        className="nav-link"
                        to="/"
                      >
                        <img src={cart} alt="cart" width="20" height="20" />
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu"
                        className="nav-link"
                        to="/"
                      >
                        <img src={avtar} alt="avtar" width="40" height="30" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
