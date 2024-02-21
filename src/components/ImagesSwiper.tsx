import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import style from '../styles/imagesSwiper.module.css';

import { Navigation } from "swiper/modules";

interface IImagesSwiperProps {
  images: string[];
}

const ImagesSwiper = ({ images }: IImagesSwiperProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      loop={true}
      className={style.swiper}
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image} className={style.swiperSlide} >
            <img src={image} alt="" className={style.swiperImg} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImagesSwiper;
