import React from "react";
import { Link } from "react-router-dom";
import "./NavMobile.css"
const NavMobile = ({ position = "sticky" }) => {
  return (
    <>
      <nav className="nav-mobile" style={{position: position}}>
        <ul className="nav-mobile-list">
          <li className="nav-mobile-element noSelect">
            <Link className="nav-mobile-element-a" to={"/"} onClick={()=>window.scroll(0, 0)}><p>Home</p></Link>
          </li>
          <li className="nav-mobile-element noSelect">
            <Link className="nav-mobile-element-a" to={"/"} onClick={()=>window.scroll(0, 0)}><p>Home</p></Link>
          </li>
          <li className="nav-mobile-element noSelect">
            <Link className="nav-mobile-element-a" to={localStorage.token ? "/profile" : "/login"} onClick={()=>window.scroll(0, 0)}><p>Profile</p></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMobile;
