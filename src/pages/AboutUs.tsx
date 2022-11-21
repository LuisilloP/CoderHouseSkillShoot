import React from "react";
import Form from "../component/Form";
import { motion } from "framer-motion";
import BtnJoinUp from "../component/btnJoinUp/BtnJoinUp";
import { Helmet, HelmetProvider } from "react-helmet-async";
type Props = {};

const AboutUs = (props: Props) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Helmet>
        <title>Skill Shot | Sobre Nosotros</title>
      </Helmet>
      <div className="AboutUs">
        <div className="AboutUs-img  font-img-style">
          <div className="AboutUs-layer "></div>
          <div className="AboutUs-text-img">
            <h2>Evoluciona tu juego</h2>
            <h1>Conocé nuestra historia</h1>
          </div>
        </div>
        <div className="history">
          <div className="container-player">
            <div className="player-Up"></div>
            <div className="soccer-ball"></div>
          </div>
          <div className="history-text">
            <h2 className="cabin">
              La idea de Skill shot surgió en el año 2021 en plena pandemia de
              COVID 19, Cuando no había eventos deportivos en la televisión y no
              se permitía jugar al fútbol en las calles.
            </h2>
            <p className="cabin-400">
              La pasión del futbolista es inmensa y sin importar cuál sea la
              situación actual del país, el fanático no iba a dejar de jugar al
              deporte rey. Fue en ese preciso momento que Gabriel el fundador
              del proyecto se planteó varias preguntas claves para el desarrollo
              de Skill Shot, entendiendo que el fútbol necesitaba una innovación
              en sus formatos.
              <br /> <br /> Una de las problemáticas que el futbolista amateur
              enfrenta, es que no todos son iguales a la hora de jugar, unos lo
              practican por diversión y otros lo hacen para competir, generando
              conflictos en los grupos por contar con diferentes intereses. Esto
              le había sucedido a Gabriel que se hizo las siguientes preguntas
              ¿Por qué mis resultados dependen en cierta medida de personas que
              no están comprometidas al 100% como yo? ¿Por qué no puedo competir
              solo de manera individual en el deporte que he practicado durante
              toda mi vida? Y la respuesta era clara, el fútbol siempre ha sido
              un deporte colectivo y por ese motivo creo Skill Shot.
              <br /> <br />
              Un circuito de competencias de fútbol que se practica de manera
              individual en la que se mantiene la esencia del deporte
              tradicional, agregándole la chispa de la gambeta y el potrero.
              <br /> <br />
              Junto con sus amigos se puso mano a la obra para crear las bases
              del proyecto, en donde armaron dos minis arcos con unos caños de
              pvc y fueron a probar la idea a la plaza Alberdi de barrio General
              Paz. Inmediatamente captaron la atención de más de 60 niños y
              niñas que quedaron fascinados con la nueva disciplina. Los mismos
              jóvenes les contaban que gracias a los partidos de Skill Shot
              habían mejorado sus habilidades en las competencias del fútbol
              tradicional.
              <br />
              <br /> Gracias a la prueba piloto se dieron cuenta que la idea
              tenía sentido y por ese motivo se pusieron a trabajar en la
              siguiente fase que es fomentar y profesionalizar la disciplina,
              brindando mejores herramientas y servicios para que los jóvenes
              sean protagonistas de su propio juego. <br /> <br />
            </p>
          </div>
          <div className=" text-aling-center">
            <BtnJoinUp classNameBtnSmall=""></BtnJoinUp>
          </div>
          <div className="container-player">
            <div className="player-down"></div>
            <div className="soccer-ball-down"></div>
          </div>
        </div>
        <div className="our-MVVO">
          <div className="mision-color">
            <div className="container-frame">
              <div className="frame-blue"></div>
            </div>
            <div className="mision">
              <div className="name-button">
                <h2>NUESTRA MISIÓN</h2>
                <BtnJoinUp classNameBtnSmall=""></BtnJoinUp>
              </div>
              <div className="text cabin-400">
                <p>
                  Es ser un deporte global, popular e inclusivo que brinde
                  nuevas oportunidades y herramientas a millones de personas.
                  <br /> La formación de deportistas, tanto en lo deportivo como
                  en lo personal, basándonos en educar los valores como el
                  respeto, la igualdad y la importancia del esfuerzo. Fomentando
                  y promocionando la práctica del deporte para contribuir a una
                  mejor salud y bienestar de las personas.
                  <br />
                  <br /> Como institución queremos ser una gestión innovadora,
                  de excelencia, que sirva de ejemplo para el resto de las
                  organizaciones deportivas.
                </p>
                <BtnJoinUp classNameBtnSmall="SpecialButton"></BtnJoinUp>
              </div>
            </div>
            <div className="container-frame">
              <div className="frame-rose"></div>
              <div className="ballon-foot"></div>
            </div>
          </div>
          <div className="vision">
            <div className="name-button">
              <h2>NUESTRA VISIÓN</h2>
              <BtnJoinUp classNameBtnSmall=""></BtnJoinUp>
            </div>
            <div className="text cabin-400">
              <p>
                Ser una organización en continuo crecimiento, con ilusión y
                ambición para asumir nuevos retos, siendo referentes en el
                ámbito deportivo, social y en la formación de deportistas.
              </p>{" "}
              <BtnJoinUp classNameBtnSmall="SpecialButton"></BtnJoinUp>
            </div>
          </div>
          <div className="mision-color">
            <div className="values">
              <div className="name-button">
                <h2>NUESTROS VALORES</h2>
                <BtnJoinUp classNameBtnSmall=""></BtnJoinUp>
              </div>
              <div className="text cabin-400">
                <ul>
                  <li>
                    Respeto: Tratar a los rivales, árbitros, espectadores y
                    organizadores con empatía y respeto siendo conscientes de
                    que todos y todas formamos parte del deporte.
                  </li>
                  <li>
                    Igualdad: Todas las personas, independientemente de su
                    género, raza o condición sexual, son aceptadas en nuestra
                    organización con los mismos derechos. Deben ser tratadas con
                    respeto aceptando sus diferencias.
                  </li>
                  <li>
                    Deportividad: Jugar para ganar pero aceptar siempre la
                    derrota como parte del juego. Practicar el juego limpio y
                    ser muy estricto en cuanto a seguir las reglas del juego.
                  </li>
                  <li>
                    Espíritu de superación: Intentar superarse día a día y no
                    desanimarse cuando se falla. Tener al esfuerzo como el
                    camino para mejorar.
                  </li>
                  <li>Diversión: Divertirse es fundamental y debe</li>
                </ul>
                <BtnJoinUp classNameBtnSmall="SpecialButton"></BtnJoinUp>
              </div>
            </div>
          </div>
          <div className="objetive">
            <div className="name-button">
              <h2>NUESTROS OBJETIVOS</h2>
              <BtnJoinUp classNameBtnSmall=""></BtnJoinUp>
            </div>
            <div className="text cabin-400">
              <ul>
                <li>Tener una estructura sólida.</li>
                <li>
                  Aumentar el sentimiento de pertenencia a la organización y
                  competencia.
                </li>
                <li>
                  Mejorar el ámbito deportivo tanto en formación como en
                  competición para convertirnos en una organización referente en
                  el mundo.
                </li>
                <li>
                  Establecer comportamientos basados en los valores humanos.
                  Aumentar los recursos de la organización para ofrecer mejores
                  servicios.
                </li>
                <li>
                  Crecimiento y evolución de los competidores mediante la
                  diversión y la capacidad de superación.
                </li>
              </ul>
              <BtnJoinUp classNameBtnSmall="SpecialButton"></BtnJoinUp>
            </div>
          </div>
        </div>
        <div className="container-field">
          <div className="field-img"></div>
        </div>
        <div>
          <Form></Form>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
