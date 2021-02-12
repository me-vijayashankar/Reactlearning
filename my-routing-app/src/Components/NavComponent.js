import React from "react";
import "./NavCss.css";
import { Link } from "react-router-dom";

function NavComponent() {
  const navItemStyle = {
    margin: "1vh",
    fontWeight: 600,
    height: "15px",
    padding: "5px",
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <h3>
        <Link to="/" style={navItemStyle}>
          Home
        </Link>
      </h3>
      <ul className="nav-link">
        <li>
          <Link to="/shop" style={navItemStyle}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/contact" style={navItemStyle}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavComponent;
