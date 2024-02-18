import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import "swiper/css/pagination";

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
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image} >
            <img src={image} alt="" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', objectPosition: 'center'}} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImagesSwiper;
