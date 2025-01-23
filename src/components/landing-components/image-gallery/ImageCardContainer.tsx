"use client";

import { FlexChild } from "../..";
import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { imageData } from "./imageData";

const swiperBreakpoints = {
  100: {
    slidesPerView: 1,
  },
  320: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
};

const ImageCardContainer: FC = ({}) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        style={{ marginTop: "2rem" }}
        loop={true} // Enables infinite looping
        breakpoints={swiperBreakpoints}
        autoplay={{
          delay: 0, // No delay between transitions
          disableOnInteraction: false,
        }}
        speed={6500}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        //navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {imageData.map((image, index) => (
          <SwiperSlide
            key={image?.id}
            className={index % 2 === 0 ? "even-slide" : "odd-slide"}
          >
            <img src={image.url} alt={`Slide ${image.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageCardContainer;
