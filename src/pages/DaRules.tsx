import React from "react";
import Form from "../component/Form";
import { motion } from "framer-motion";
import BtnJoinUp from "../component/btnJoinUp/BtnJoinUp";
import { Helmet } from "react-helmet-async";
type Props = {};

const DaRules = (props: Props) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Helmet>
        <title>Skill Shoot | Reglamento</title>
      </Helmet>
      <div className="daRules">
        <div className="daRules-img font-img-style">
          <div className="daRules-text-img">
            <h1>Conocé nuestro reglamento</h1>
          </div>
        </div>
        <div className="rules">
          <div className="container-field">
            <div className="field-img"></div>
          </div>
          <div className="text-rules cabin position-relative ">
            <p>
              Skil Shot es un deporte que puede ser jugado entre dos o cuatro
              personas, es decir, se juega de forma individual 1 contra 1, o en
              parejas 2 contra 2.
            </p>
            <p>
              El objetivo de Skill Shot es convertir suficientes goles para
              ganar un duelo, a su vez el que más duelos tenga es el que se
              queda con la victoria.
            </p>
          </div>
          <div className="reglamentOne-img position-relative "></div>
        </div>
        <div className="rulesTwo position-relative ">
          <div className="text-rules cabin">
            <p>
              El partido se juega en un campo rectangular, que Mide entre 10 y
              12 metros de largo y entre 6 y 8 metros De ancho. El cual está
              marcado con líneas blancas. Hay dos porterías, una en cada extremo
              del campo, que miden 1 metro de largo y de alto.
            </p>
            <p>
              El partido está compuesto por cuatro tiempos de Cinco minutos cada
              uno, conocidos como duelos. Los Cuales se subdividen en puntos,
              estos se obtienen Convirtiendo goles y ganando el duelo.
            </p>
          </div>
          <div className="reglament-two-img">
            <div className="reglamentTwo-img reglament-imag"></div>
            <div className="reglamentThree-img reglament-imag"></div>
          </div>
        </div>
        <div className="rulesThree position-relative ">
          <div className="ruleThree-text cabin">
            <p>
              GANAR UN DUELO TE BRINDA 2 PUNTOS.
              <br /> EMPATAR 1 PUNTO.
              <br /> PERDER 0 PUNTOS.
            </p>
          </div>
          <div className="reglamentFour-img reglament-imag"></div>
        </div>

        <div className="button-container">
          <BtnJoinUp classNameBtnSmall=""></BtnJoinUp>
          <div className="soccer-player"></div>
          <div className="frame-blue"></div>
        </div>
        <div className="general-rules-color">
          <div className="general-rules">
            <h1>REGLAS GENERALES</h1>
            <ol>
              <li>
                El partido comienza con dos jugadores parados espalda con
                espalda en el medio de la cancha con una pelota entre ellos.
                Cuando el árbitro inicia el juego los jugadores pueden girar y
                pelear por la posesión.
              </li>
              <li>
                Se marcará gol cuando el balón pase la línea de meta y entre al
                arco, siempre cuando no haya falta o una intervención o
                manipulación en el juego.
              </li>
              <li>
                Existen 5 tipos de goles, cada uno con su respectiva puntuación.
              </li>
              <li>
                Cuando se convierte un gol, los jugadores deben retomar el juego
                desde su portería. El que recibe el gol sale con el balón en sus
                pies.
              </li>
              <li>
                Esta prohibido en cualquier instancia del juego tocar el fútbol
                con las manos.
              </li>
              <li>
                Si un jugador saca de juego el balón por detrás de su propia
                línea de meta, se otorga un saque de esquina/córner.
              </li>
              <li>
                Si el balón cruza las líneas laterales del campo se produce un
                saque de banda, que debe ser jugado con el pie.
              </li>
              <li>
                No se permite discusión. Los árbitros siempre tienen la última
                palabra.
              </li>
              <li>Falta pequeña = balón para el contrario.</li>
              <li>
                Con faltas duras, se cobra penal que deberá ser cobrado de mitad
                de cancha y la portería sin portero, es un tiro directo al arco.
              </li>
              <li>
                Existen 5 maneras de ejecutar un penal y cada una tiene su
                respectiva puntuación.
              </li>
              <li>
                Después de ejecutar un penal, la pelota deja de estar en juego
                para el pateador.
              </li>
              <li>
                Los árbitros pueden optar en cualquier punto del juego
                descalificar a un jugador en casos extremos como violencia,
                escupir o falta de respeto continua sobre cualquier persona.
              </li>
              <li>
                Si un jugador es expulsado, el juego se termina automáticamente
                con victoria para el que no recibió tarjeta.
              </li>
            </ol>
          </div>
          <div className="button-container-rose">
            <BtnJoinUp classNameBtnSmall=""></BtnJoinUp>
            <div className="frame-rose"></div>
          </div>
        </div>
        <div className="scores">
          <h1>PUNTUACIONES</h1>
          <div className="goal-penalty">
            <div className="container-score">
              <h2>GOLES</h2>
              <div className="name-point">
                <div className="name center-div">
                  <h2>común</h2>
                </div>
                <div className="point center-div">
                  <h2>1</h2>
                </div>
              </div>
              <div className="name-point">
                <div className="name center-div">
                  <h2>caño</h2>
                </div>
                <div className="point center-div">
                  <h2>2</h2>
                </div>
              </div>
              <div className="name-point">
                <div className="name center-div">
                  <h2>taco</h2>
                </div>
                <div className="point center-div">
                  <h2>3</h2>
                </div>
              </div>
              <div className="name-point">
                <div className="name center-div">
                  <h2>rabona</h2>
                </div>
                <div className="point center-div">
                  <h2>4</h2>
                </div>
              </div>
              <div className="name-point">
                <div className="name center-div">
                  <h2>cabeza</h2>
                </div>
                <div className="point center-div">
                  <h2>5</h2>
                </div>
              </div>
            </div>
            <div className="container-score">
              <h2>PENALES</h2>
              <div className="name-point">
                <div className="name center-div">
                  <h2>común</h2>
                </div>
                <div className="point center-div">
                  <h2>1</h2>
                </div>
              </div>
              <div className="name-point">
                <div className="name center-div">
                  <h2>panenkka</h2>
                </div>
                <div className="point center-div">
                  <h2>2</h2>
                </div>
              </div>
              <div className="name-point">
                <div className="name center-div">
                  <h2>taco</h2>
                </div>
                <div className="point center-div">
                  <h2>3</h2>
                </div>
              </div>
              <div className="name-point">
                <div className="name center-div">
                  <h2>rabona</h2>
                </div>
                <div className="point center-div">
                  <h2>4</h2>
                </div>
              </div>
              <div className="name-point">
                <div className="name center-div">
                  <h2>cabeza</h2>
                </div>
                <div className="point center-div">
                  <h2>5</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="cabin point-text">
            <p>
              Las reglas del tiempo de juego y el formato de duelos están
              sujetas a cambios en las diferentes competiciones, ya sean copas,
              ligas u otros formatos. Le recomendamos consultarlo con el torneo
              organizado al que Participa.
            </p>
          </div>
          <div className="text-aling-center">
            <BtnJoinUp classNameBtnSmall=""></BtnJoinUp>
          </div>
        </div>
        <div>
          <Form></Form>
        </div>
      </div>
    </motion.div>
  );
};

export default DaRules;
