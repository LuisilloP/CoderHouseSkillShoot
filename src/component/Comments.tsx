import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import CommentBoxes from "./boxes/CommentBoxes";

type Props = {};

const Comments = (props: Props) => {
  return (
    <div className="comments">
      <div className="text-skill">
        <h2>LO QUE DICEN...</h2>
        <h1>
          NUESTROS <span>SKILLSHOOTERS</span>
        </h1>
      </div>
      <div className="comment-boxes">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          grabCursor={true}
          breakpoints={{
            500: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 3.3,
              spaceBetween: 20,
            },
          }}
          className="mySwiperComments"
        >
          <SwiperSlide>
            <CommentBoxes
              id="Iri"
              stars={1}
              comment={
                "Skill Shot me pareció una muy linda experiencia por el hecho de conocer gente nueva y mejorar tus técnicas, ya que no todos jugamos iguales y podemos aprender del otro, me ayudo a mejorar mis habilidades. Es una propuesta muy buena para chicos y chicas que quieren hacer su carrera como futbolista o mejorar sus técnicas e incluso divertirse...  me encanto!!!"
              }
              name="Irina, 13 años "
              ocupation="Jugadora amateur"
            ></CommentBoxes>
          </SwiperSlide>
          <SwiperSlide>
            <CommentBoxes
              id="Nico"
              stars={1}
              comment={
                "Participe algunas veces en Skill Shot y siempre la sensación fue que no quería dejar de jugar, me parece un juego divertido y que sirve mucho para desarrollar nuevas habilidades. Me gustaría participar con mas frecuencia."
              }
              name="Nico"
              ocupation="Freestyler campeón nacional, dos veces subcampeón Latinoamericano."
            ></CommentBoxes>
          </SwiperSlide>
          <SwiperSlide>
            <CommentBoxes
              id="Franco"
              stars={1}
              comment={
                "Me gustó poder enfrentarme con nuevos jugadores, compartir con amigos y todos los premios que nos daban..  También a pesar que a veces me sentía nervioso antes de comenzar cada partido, cada encuentro me hacía mejorar y ganar confianza en mí mismo."
              }
              name="Franco, 9 años"
              ocupation="5 veces campeón de Skill shot."
            ></CommentBoxes>
          </SwiperSlide>
          <SwiperSlide>
            <CommentBoxes
              id="Nico11"
              stars={1}
              comment={
                "Lo que más me gusta de Skill Shot es encontrarme con amigos, superarme en cada partido, la competencia de cada semana. Además me hizo mejorar el dribbling y la precisión para hacer goles. "
              }
              name="Nicolas, 11 años."
              ocupation="3 veces campeón de Skill Shot."
            ></CommentBoxes>
          </SwiperSlide>
          <SwiperSlide>
            <CommentBoxes
              id="Gonza12"
              stars={1}
              comment={
                "La experiencia en Skill Shot fue muy buena me encantó jugar, me ayudó a mejorar mi velocidad al regatear y a tener más agilidad. Lo disfrute mucho con mis amigos y organizadores."
              }
              name="Gonzalo, 12."
              ocupation="jugador de la novena de Talleres de Córdoba. "
            ></CommentBoxes>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Comments;
