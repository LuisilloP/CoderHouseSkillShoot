import React, {MouseEvent }  from 'react'

export const handleMouseEvent = (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const navAmburger = document.querySelector(".pagNav-amburger");
    const overlay = document.querySelector(".overlay");
    navAmburger?.classList.add("closed") 
    navAmburger?.classList.remove("open");
    overlay?.classList.remove("displayBlock");
  };  
