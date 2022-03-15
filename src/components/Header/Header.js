import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <a className="logo">
        <img
          src="https://mypizza.kg/img/logo--pizza.png"
          alt="logo"
          width="150px"
        />
      </a>
      <nav className="navbar">
        <ul className="list">
          <Link className="list-li" to="/">
            Home
          </Link>
          <Link className="list-li" to="/discounts">
            Discounts
          </Link>
          <Link className="list-li" to="/about">
            About
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
