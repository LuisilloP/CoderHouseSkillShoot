import React from "react";
import BtnJoinUp from "./btnJoinUp/BtnJoinUp";

type Props = {};

const SectionOne = (props: Props) => {
  return (
    <div className="section-one">
      <div className="text-divider blue-divider"></div>
      <div className="team-photo">
        <div className="frame-red"></div>
      </div>
      <div className="font-color-red">
        <div className="soccer-field">
          <div className="soccer-girl">
            <div className="text-color-red">
              <h2 className="h2-section-one">
                ¿Querés participar en torneos de fútbol pero no logras armar un
                equipo?
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="font-color-white">
        <div className="frame-red"></div>
        <div className="text-color-white">
          <h1 className="h2-section-one">
            ¡Organizarte con tus amigos es una tarea imposible!
          </h1>
        </div>
        <div className="boys">
          <div className="btn-div">
            <BtnJoinUp classNameBtnSmall=""></BtnJoinUp>
          </div>
        </div>
      </div>
      <div className="rectangle-blue">
        <div className="text-rectangle">
          <h2 className="first-text cabin ">Inspírate y domina el juego</h2>
          <h2 className="second-text cabin">
            ¡Sé parte del circuito de competencia y la comunidad de Skillshot!
          </h2>
          <h3 className="third-text cabin">Participa en torneos</h3>
          <div className="ul-container">
            <ul>
              <li>
                <div className="soccer-ball soccer-add"></div>{" "}
                <p>Fútbol individual</p>
              </li>
              <li className="soccer-ball soccer-normal"></li>
              <li>
                <div className="soccer-ball soccer-add"></div>{" "}
                <p>Fútbol mixto</p>
              </li>
              <li className="soccer-ball soccer-normal"></li>
              <li>
                <div className="soccer-ball soccer-add"></div>{" "}
                <p>Fútbol 2 vs. 2</p>
              </li>
            </ul>
            <ul className="ul-two">
              <li>
                {" "}
                <div className="soccer-ball soccer-add"></div>{" "}
                <p>Practicar de manera individual </p>
              </li>
              <li className="soccer-ball soccer-normal"></li>
              <li>
                {" "}
                <div className="soccer-ball soccer-add"></div>
                <p>Alquilar espacios para jugar</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
