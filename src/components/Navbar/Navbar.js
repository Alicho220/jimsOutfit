import React from "react";
import Icon from "../assets/icon2.png";
import Home from "../HomePage/Home";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import About from "../AboutPage/About";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          {/* <a class="navbar-brand nav-link" href={Home}> */}
          <Link to="/">
            <img src={Icon} />
          </Link>
          {/* </a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div class="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  {/* <a href="#"> */}
                  <Link class="nav-link" to="/">
                    Collection
                  </Link>
                  {/* </a> */}
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    Shop
                  </a>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/About">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
