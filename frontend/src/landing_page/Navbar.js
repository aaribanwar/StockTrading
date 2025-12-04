import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom px-5 pb-2 sticky-top bg-white">
      <div className="container-fluid">

        {/* Brand / Logo */}
        <Link className="navbar-brand" to="/signup">
          <img src="media/images/logo.svg" alt="Company logo" style={{ width: "25%" }} />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item px-3">
              <Link className="nav-link active" to="/signup">SignUp</Link>
            </li>

            <li className="nav-item px-3">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item px-3">
              <Link className="nav-link" to="/products">Products</Link>
            </li>

            <li className="nav-item px-3">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item px-3">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

            <li className="nav-item px-3">
              <Link className="nav-link" to="/signup">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
