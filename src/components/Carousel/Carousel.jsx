// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/Offer10.png";
import image2 from "../../assets/Offer20.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="carousel">
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      allowTouchMove
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={image1} alt="image1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="image2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image1} alt="image1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="image2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image1} alt="image1" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}