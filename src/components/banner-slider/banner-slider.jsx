import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerItem from "../common/banner-item";

export default function BannerSlider() {
  const navigate = useNavigate();

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <BannerItem
          myFunc={() => {
            navigate("/1");
          }}
          img={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem
          myFunc={() => {
            navigate("/1");
          }}
          img={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem
          myFunc={() => {
            navigate("/1");
          }}
          img={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem
          myFunc={() => {
            navigate("/1");
          }}
          img={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem
          myFunc={() => {
            navigate("/1");
          }}
          img={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem
          myFunc={() => {
            navigate("/1");
          }}
          img={true}
        />
      </SwiperSlide>
    </Swiper>
  );
}
