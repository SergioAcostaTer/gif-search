import React from "react";
import { Link } from "react-router-dom";
import "./NavMobile.css"
const NavMobile = ({ any }) => {
  return (
    <>
      <nav className="nav-mobile">
        <ul className="nav-mobile-list">
          <li className="nav-mobile-element noSelect">
            <Link className="nav-mobile-element-a" to={"/"} onClick={()=>window.scroll(0, 0)}>Home</Link>
          </li>
          <li className="nav-mobile-element noSelect">
            <Link className="nav-mobile-element-a" to={"/"} onClick={()=>window.scroll(0, 0)}>Home</Link>
          </li>
          <li className="nav-mobile-element noSelect">
            <Link className="nav-mobile-element-a" to={"/login"} onClick={()=>window.scroll(0, 0)}>Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMobile;
