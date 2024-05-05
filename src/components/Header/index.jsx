import React from "react";
import { Link } from "react-router-dom";
import './index.css'

const Header = () => {
  return (
    <div>
      <nav className="nav-bar-cont">
        <ul className="nav-bar">
          <li>
            <Link to={"/"}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                className="n-logo"
                alt="web logo"
              />
            </Link>
          </li>

          <li><Link to={"/"} className="link">Home</Link></li>
          <li><Link to={"/jobs"} className="link">Jobs</Link></li>

          <li>
            <button className="btn btn-primary">Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
