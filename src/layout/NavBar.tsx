import { NavLink } from "react-router-dom";
import MenuBar from "../component/menuToggle/MenuBar";
import CrossClose from "../component/menuToggle/CrossClose";
import PagesNav from "./PagesNav";
import { useState } from "react";
import { handleMouseEvent } from "../component/menuToggle/CloseNavMovile";
const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="pagNav-amburger">
          <NavLink to={"/"}>
            <img className="img-logo" alt="logo-nav"></img>
          </NavLink>
          <CrossClose />
          <PagesNav className={`amburger-submenu`}></PagesNav>
        </div>
        <div className="menubar-logo">
          <MenuBar />
          <NavLink to={"/"}>
            {" "}
            <img className="img-logo logo_nav" alt="logo-navTwo"></img>
          </NavLink>
        </div>
        <PagesNav className="pagesNav"></PagesNav>
        <div className="overlay" onClick={handleMouseEvent}></div>
      </nav>
    </header>
  );
};

export default NavBar;
