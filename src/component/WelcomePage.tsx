import React from "react";
import BtnJoinUp from "./btnJoinUp/BtnJoinUp";
const WelcomePage = () => {
  return (
    <div className="welcome">
      <div className="welcome-img font-img-style">
        <div className="text-welcome">
          <h3>Se parte de nuestro circuito de competencia</h3>
          <h1>
            Jugar ahora depende exclusivamente<br></br>de vos.
          </h1>
          <BtnJoinUp classNameBtnSmall=""></BtnJoinUp>
        </div>
        <div className="text-welcomeTwo">
          <h2>
            ¿Sos un apasionado del fútbol pero no tenés un espacio para
            practicar o jugar con tus amigos?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
