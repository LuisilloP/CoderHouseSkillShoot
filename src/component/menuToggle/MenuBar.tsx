import React, { MouseEvent } from "react";

const MenuBar = () => {
  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    const navAmburger = document.querySelector(".pagNav-amburger");
    const overlay = document.querySelector(".overlay");
    overlay?.classList.add("displayBlock");
    navAmburger?.classList.add("open");
  };
  return (
    <button
      className="button-menu"
      aria-label="menu-amburguesa"
      onClick={handleMouseEvent}
    >
      <svg viewBox="0 0 100 80" width="25" height="20" fill="#fff">
        <rect width="100" height="13" rx="10"></rect>
        <rect y="30" width="100" height="13" rx="10"></rect>
        <rect y="60" width="100" height="13" rx="10"></rect>
      </svg>
    </button>
  );
};
export default MenuBar;
