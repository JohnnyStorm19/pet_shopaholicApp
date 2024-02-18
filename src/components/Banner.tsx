// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import style from '../styles/swiperBanner.module.css'

const Banner = () => {

  return (
        <Swiper 
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('on swiper: ', swiper)}
            modules={[Autoplay]}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            className={style.swiperContainer}
        >
            <SwiperSlide
                onClick={() => console.log('clicked frame 1!')}
                className={style.swiperSlide}
            >
                <img src="/images/Frame_1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide
                onClick={() => console.log('clicked frame 2!')}
                className={style.swiperSlide}
            >
                <img src="/images/Frame_3.jpg" alt="" />
            </SwiperSlide>
        </Swiper>

  );
};

export default Banner;
