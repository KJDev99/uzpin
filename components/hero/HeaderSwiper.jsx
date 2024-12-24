"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useState, useEffect } from "react";
import axiosInstance from "@/libs/axios";
import Link from "next/link";
import Loader from "../Loader";

const HeaderSwiper = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axiosInstance.get("/client/banner");
        const banners = response.data.map((banner) => ({
          id: banner.id,
          title: banner.name || "No Title",
          subtitle: "O'yin promokodlari!",
          buttonText: "Sotib olish",
          image: banner.cover,
        }));
        setSlides(banners);
      } catch (error) {
        console.error("Error fetching banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="sm:hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={1.07}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative rounded-[5px]">
              <Image
                className="w-[340px] h-[200px] rounded-[5px]"
                src={slide.image}
                alt={slide.title}
                width={340}
                height={200}
              />
              <h3 className="absolute top-[20px] left-[20px] font-semibold text-[24px] leading-[28px] text-[#ffffff]">
                {slide.title}
              </h3>
              <p className="absolute top-[48px] left-[20px] font-medium text-[16px] leading-[18px] text-[#ffffff]">
                {slide.subtitle}
              </p>
              {/* <Link href={`/all-games/${slide.id}`}> */}
              <button className="absolute bottom-[20px] left-[20px] font-medium text-xs py-[5px] px-[14px] bg-[#ffba00] rounded-[5px]">
                {slide.buttonText}
              </button>
              {/* </Link> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSwiper;
