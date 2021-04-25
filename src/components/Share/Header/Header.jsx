import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./HeaderData";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header>
      <nav className="navigation">
        <div className="container">
          <ul className="menu ">
            <div className="categories">
              <li className="categoreiItems">
                <FontAwesomeIcon icon={faThLarge} /> Categories
              </li>
            </div>
            {Navbar.map((navData) => (
              <li key={navData.menuItem} className={navData.menuClass}>
                <Link className={navData.cName} to={navData.path}>
                  {navData.menuItem}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
