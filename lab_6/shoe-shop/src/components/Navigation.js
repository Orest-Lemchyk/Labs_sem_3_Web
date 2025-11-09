import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <nav className="nav">
      <ul>
      <li> <Link to="/">Home</Link></li>
      <li> <Link to="/catalog">Catalog</Link></li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
