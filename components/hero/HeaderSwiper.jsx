"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "PUBG Mobile",
    subtitle: "O'yin promokodlari",
    buttonText: "Sotib olish",
    image: "/herobg.png",
  },
  {
    id: 2,
    title: "Free Fire",
    subtitle: "Game Promotions",
    buttonText: "Buy Now",
    image: "/herobg1.png",
  },
  {
    id: 3,
    title: "Battlegrounds",
    subtitle: "Special Offers",
    buttonText: "Get Now",
    image: "/herobg2.png",
  },
  {
    id: 4,
    title: "PUBG PC",
    subtitle: "Limited Time Deals",
    buttonText: "Purchase",
    image: "/herobg3.png",
  },
  {
    id: 5,
    title: "Mobile Legends",
    subtitle: "New Season Offers",
    buttonText: "Buy",
    image: "/herobg4.png",
  },
];

const HeaderSwiper = () => {
  return (
    <div className='sm:hidden'>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.07}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-[5px]">
              <Image
                className="w-[340px] h-[200px] rounded-[5px]"
                src={src.image}
                alt={src.title}
                width={340}
                height={200}
              />
              <h3 className="absolute top-[20px] left-[20px] font-semibold text-[24px] leading-[28px] text-[#ffffff]">
                {src.title}
              </h3>
              <p className="absolute top-[48px] left-[20px] font-medium text-[16px] leading-[18px] text-[#ffffff]">
                {src.subtitle}
              </p>
              <button className="absolute bottom-[20px] left-[20px] font-medium text-xs py-[5px] px-[14px] bg-[#ffba00] rounded-[5px]">
                {src.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderSwiper;
