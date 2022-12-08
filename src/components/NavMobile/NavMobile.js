import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../sources/house.svg";
import homeFillIcon from "../../sources/house-fill.svg";
import profileIcon from "../../sources/person.svg";
import profileFillIcon from "../../sources/person-fill.svg";
import searchIcon from "../../sources/search.svg";

import "./NavMobile.css";
const NavMobile = ({ position = "fixed" }) => {
  const path = window.location.pathname;
  function focusSearch() {
    const search = document.getElementById("input");
    if (path !== "/") {
      // setTimeout(() => search.focus(), 1500);
    } else {
      search.focus();
    }
    console.log(path)

  }
  return (
    <>
      <nav className="nav-mobile" style={{ position: position }}>
        <ul className="nav-mobile-list">
          <li className="nav-mobile-element noSelect">
            <Link
              className="nav-mobile-element-a"
              to={"/"}
              onClick={() => window.scroll(0, 0)}
            >
              <div>
                <img
                  src={path === "/" ? homeFillIcon : homeIcon}
                  alt={"home"}
                />
                <p>Home</p>
              </div>
            </Link>
          </li>
          <li className="nav-mobile-element noSelect">
            <Link
              className="nav-mobile-element-a"
              to={"/"}
              onClick={() => {
                window.scroll(0, 0);
                focusSearch();
              }}
            >
              <div>
                <img src={searchIcon} alt={"search"} />
                <p>Search</p>
              </div>
            </Link>
          </li>
          <li className="nav-mobile-element noSelect">
            <Link
              className="nav-mobile-element-a"
              to={localStorage.token ? "/profile" : "/login"}
              onClick={() => window.scroll(0, 0)}
            >
              <div>
                <img
                  src={path === "/profile" ? profileFillIcon : profileIcon}
                  alt={"home"}
                />
                <p>Profile</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMobile;
