import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBitcoin } from "react-icons/fa";
import { Button } from "../Button-components/Button";

import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //för att toggla FaBars och FaTimes ikonerna
  const handleClick = () => {
    setClick(!click);
  };
  //för att stänga mobila menyn på olika ställen som visas efter att ha togglat FaBars
  const closeBarsMenu = () => {
    setClick(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container container">
          {/* loggan länkar hem */}
          <Link to="/" className="navbar-logo" onClick={closeBarsMenu}>
            <FaBitcoin className="navbar-icon" />
            BitByBit
          </Link>
          {/* skifta mellan  react iconerna onClick med hjälp av handleClick funtionen som används för att toggla */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item">
              {/* hem länken länkar också hem */}
              <Link to="/" className="navbar-links" onClick={closeBarsMenu}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/market"
                className="navbar-links"
                onClick={closeBarsMenu}
              >
                Market
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/services"
                className="navbar-links"
                onClick={closeBarsMenu}
              >
                Services
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/about"
                className="navbar-links"
                onClick={closeBarsMenu}
              >
                About
              </Link>
            </li>
            <li className="navbar-button">
              {button ? (
                <Link to="/sign-up" className="button-link">
                  <Button buttonStyle="button-outline" onClick={closeBarsMenu}>
                    SIGN UP
                  </Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="button-link">
                  <Button
                    buttonStyle="button-outline"
                    buttonSize="button-responsive"
                  >
                    SIGN UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
