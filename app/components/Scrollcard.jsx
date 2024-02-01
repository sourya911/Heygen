"use client";
import "../globals.css";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Scrollcard = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

      <div className="bg-white p-4 grid  card-x">
        <h1 className="text-mn text-2xl font-semibold">{props.no}</h1>
        &nbsp;
        <h2 className="text-black">{props.head}</h2>
        <h2 className="text-gray-600">{props.txt}</h2>
        &nbsp; &nbsp;
        <img src={props.lin} alt="" />
      </div>
    </>
  );
};

export default Scrollcard;
