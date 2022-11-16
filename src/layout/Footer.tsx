import React from "react";
import { NavLink } from "react-router-dom";
import Tiktok from "../assets/tik-tokTwo.png";
import Instagram from "../assets/instagram.png";
import LogoSkill from "../assets/logoSkillShot.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-footer">
          <NavLink to={"/"}>
            <img
              className="img-logo-footer"
              src={LogoSkill}
              alt="logo-footer"
            ></img>
          </NavLink>
        </div>
        <div className="follow-logos">
          <p>Síguenos en</p>
          <a
            href="https://www.instagram.com/skillshot1vs1/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR3h9zNW5HMn_QhggVZh2brsLR0oqtXiT1QiUw0t6FRmLpxH4qOrK81EsXc"
            target="_blank"
          >
            <img className=" logo" src={Instagram} alt="instagram-logo" />
          </a>
          <a href="https://www.tiktok.com/@skillshot1vs1" target="_blank">
            <img className=" logo" src={Tiktok} alt="tiktok-logo" />
          </a>
        </div>
        <div className="text-divider"></div>
        <div className="text-footer">
          <p>2022 Skill Shot Todos los derechos reservados</p>
          <p>
            <NavLink to="/AvisoPrivacidad">Aviso de privacidad</NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
