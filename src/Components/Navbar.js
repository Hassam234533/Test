import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <div className="container-fluid">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="container-fluid">
          <Link className="nav-link active" aria-current="page" to="/NewPage">
            NewPages
          </Link>
        </div>
      </div>
    </nav>
  );
}
