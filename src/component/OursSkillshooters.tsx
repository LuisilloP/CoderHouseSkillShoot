import React, { useEffect } from "react";
import BtnJoinUp from "./btnJoinUp/BtnJoinUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, EffectFade, Autoplay, Navigation } from "swiper";
import jsonCarousel from "../db/UrlPhotos.json";

const OursSkillshooters = () => {
  return (
    <div className="OurSkillShooters">
      <div className="btn-div">
        <BtnJoinUp classNameBtnSmall=""></BtnJoinUp>
      </div>
      <h1>
        NUESTROS <span>SKILLSHOOTERS</span>
      </h1>
      <div className="image-swiper">
        <Swiper
          keyboard={true}
          navigation={true}
          modules={[Keyboard, EffectFade, Autoplay, Navigation]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="mySwiperSkill"
        >
          {jsonCarousel.images.map((image, i) => (
            <SwiperSlide key={image.id}>
              <img
                src={`${image.url}`}
                id={image.id}
                alt={image.description}
                className="image-slide"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OursSkillshooters;
