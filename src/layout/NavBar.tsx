import { NavLink } from "react-router-dom";
import MenuBar from "../component/menuToggle/MenuBar";
import CrossClose from "../component/menuToggle/CrossClose";
import PagesNav from "./PagesNav";
import { useState } from "react";
import { handleMouseEvent } from "../component/menuToggle/CloseNavMovile";
import LogoSkill from "../assets/logoSkillShot.png";
const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="pagNav-amburger">
          <NavLink to={"/"}>
            <img className="img-logo" src={LogoSkill} alt="logo-nav"></img>
          </NavLink>
          <CrossClose />
          <PagesNav className={`amburger-submenu`}></PagesNav>
        </div>
        <div className="menubar-logo">
          <MenuBar />
          <NavLink to={"/"}>
            {" "}
            <img
              className="img-logo logo_nav"
              src={LogoSkill}
              alt="logo-navTwo"
            ></img>
          </NavLink>
        </div>
        <PagesNav className="pagesNav"></PagesNav>
        <div className="overlay" onClick={handleMouseEvent}></div>
      </nav>
    </header>
  );
};

export default NavBar;
