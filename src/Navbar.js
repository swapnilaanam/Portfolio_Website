import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="position-relative">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent border-bottom border-top">
        <div className="container-fluid mx-3 d-flex justify-content-between align-items-start">
          <Link className="navbar-brand px-2" to="/">
            Swaperi
          </Link>
          <div
            id="navbarContainer"
            className="d-flex flex-column align-items-end"
          >
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavigation"
              aria-controls="navbarNavigation"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavigation">
              <ul className="navbar-nav">
                <li className="nav-item d-flex justify-content-end">
                  <Link className="nav-link bg-dark px-3 me-1 rounded-1 active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item d-flex justify-content-end">
                  <Link className="nav-link bg-dark px-3 me-1 rounded-1" to="/project">
                    Project
                  </Link>
                </li>
                <li className="nav-item d-flex justify-content-end">
                  <Link className="nav-link bg-dark px-3 me-1 rounded-1" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item d-flex justify-content-end">
                  <Link className="nav-link bg-dark px-3  rounded-1" to="/hire">
                    Hire Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
