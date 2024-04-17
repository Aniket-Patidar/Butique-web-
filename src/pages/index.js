import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Main from '@/components/Main'
const inter = Inter({ subsets: ['latin'] })


import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";





export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <>
        <div className=" h-[30vh] md:h-[80vh] lg:h-[100vh] pt-19.5">
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
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper  h-[30vh] md:h-[80vh] lg:h-[100vh]"
          >
            {/* Smaller Device Image for Swiper */}
            {/* <React.Fragment className="hidden">
              <SwiperSlide className="flex justify-center items-center md:hidden">
                <img
                  className="object-cover block md:hidden"
                  src="https://modontrend.com/cdn/shop/files/Spring_is_in_the_air-2024_Main_Carousel_1944x.png?v=1710516051"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center md:hidden">
                <img
                  className="object-cover block md:hidden"
                  src="https://shopthemint.com/cdn/shop/files/Artboard_1_2.5x-100_3fe833ec-f994-429c-a2fb-f9e75af42d6c_1920x.jpg?v=1712067942"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center md:hidden">
                <img
                  className="object-cover block md:hidden"
                  src="https://toycra.com/cdn/shop/files/Toycra_Lego2024_1e4704b9-171a-40a7-afef-baee03d2eefc_1085x603.jpg?v=1711521627"
                  alt=""
                />
              </SwiperSlide>
            </React.Fragment> */}

            {/* Larger Device Image for Swiper */}
            <SwiperSlide className="flex justify-center items-center  md:flex">
              <img
                className="h-full object-cover  md:block"
                src="https://modontrend.com/cdn/shop/files/Spring_is_in_the_air-2024_Main_Carousel_1944x.png?v=1710516051"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center  md:flex">
              <img className="h-full object-cover  md:block"
                src="https://shopthemint.com/cdn/shop/files/Artboard_1_2.5x-100_3fe833ec-f994-429c-a2fb-f9e75af42d6c_1920x.jpg?v=1712067942"

                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center  md:flex">
              <img className="h-full object-cover  md:block"
                src="https://www.shoptheboutique.com/cdn/shop/files/DESKTOP-HEADER-SPRING-2024_1920x900.jpg?v=1712022299"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
