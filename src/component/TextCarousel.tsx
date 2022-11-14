import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Keyboard, EffectFade,Autoplay,Pagination } from 'swiper';

type Props = 
{
    images:Array<string>;
    ides:Array<string>;
}

const TextCarousel = ({images,ides}: Props) => {
    useEffect(()=>
  {
    images.forEach((image,i) => {
        const imageSelector = document.getElementById(ides[i]) as HTMLImageElement 
      
        imageSelector.src = image
    });
   
    
  },)
  return (
    <div className='Text-Carousel'>
        <div className='title-textCaroulse'>
            <h1>AHORA JUGAR DEPENDE EXCLUSIVAMENTE DE VOS</h1>
            <h2>Se parte del circuito de competencia y la comunidad de Skillshot</h2>
        </div>
        <div className='text-imageCarousel'>
            <div className='text-ul vertical-center'>
                <ul>
                    <li><h3>Practicar de manera individual</h3></li>
                    <li><h3>Participar en torneos de futbol individual, futbol mixto y futbol 2 vs 2</h3></li>
                    <li><h3>Alquilar espacios para jugar</h3></li>
                </ul>
            </div>
            <div className='image-swiper'>
                <Swiper
                    keyboard={true}
                    modules={[ Keyboard, EffectFade,Autoplay,Pagination]}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                   
                    className="mySwiper"
                    pagination={{
                        clickable: true,
                      }}
                >
                    {ides.map((id) => (
                        <SwiperSlide key={id}>
                            <img
                                id={id}
                                alt="images-lide"
                                className='image-slide'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default TextCarousel