import React from "react";
import { Link } from "react-router-dom";

function Navtabs() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-warning">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item animated bounceIn">
            <Link to="/" className="nav-link">
              Pupster
            </Link>
          </li>
          <li className="nav-item animated bounceIn">
            <Link to="/discover" className="nav-link">
              Discover
            </Link>
          </li>
          <li className="nav-item animated bounceIn">
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navtabs;
