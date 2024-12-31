"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

type ImageProp = {
  data?: {
    images: string[];
  } | null;
};


const ImgAlbum = ({ data }: ImageProp) => {
  if (!data?.images || data.images.length === 0) {
    return <p>No images available.</p>; // Handling case when images are missing
  }

  return (
    <div className="w-[300px]">
      <Swiper
        spaceBetween={2}
        slidesPerView={1} 
        navigation 
        pagination={{ clickable: true }} 
        loop 
        centeredSlides 
        grabCursor={true} 
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false, 
          
        }}      >
        {data.images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt={`Product Image ${index + 1}`}
              width={200}
              height={200}
              className="rounded-lg object-fit"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImgAlbum;
