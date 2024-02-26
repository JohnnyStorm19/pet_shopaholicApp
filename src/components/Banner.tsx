// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "../styles/swiperBanner.css";
import { useNavigate } from "react-router-dom";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
];

const Banner = () => {
  const navigate = useNavigate();

  const handleBannerClick = (image: string) => {
    if (image === '/images/4.jpg' || image === '/images/5.jpg') {
        console.log('Banner clicked')
        navigate('/catalogue');
    }
  }

  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image} onClick={() => handleBannerClick(image)}>
            <img src={image} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;
