// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import '../styles/swiperBanner.css'
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate();

  return (
        <Swiper 
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide
                onClick={() => console.log('clicked frame 1!')}
            >
                <img src="/images/1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide
                onClick={() => console.log('clicked frame 2!')}
            >
                <img src="/images/2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide
                onClick={() => navigate('/catalogue')}
            >
                <img src="/images/4.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide
                onClick={() => navigate('/catalogue')}
            >
                <img src="/images/5.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide
                onClick={() => console.log('clicked frame 5!')}
            >
                <img src="/images/6.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide
                onClick={() => console.log('clicked frame 6!')}
            >
                <img src="/images/7.jpg" alt="" />
            </SwiperSlide>
        </Swiper>

  );
};

export default Banner;
