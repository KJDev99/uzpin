"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function TopGiftCard() {
  const { t } = useTranslation();

  const games = [
    {
      title: "Google Play",
      image: "/play-market_converted.webp",
      link: "#",
    },
    {
      title: "iTunes",
      image: "/itunes_converted.webp",
      link: "#",
    },
    {
      title: "STEAM",
      image: "/steam_converted.webp",
      link: "#",
    },
    {
      title: "Play Station",
      image: "/playstation_converted.webp",
      link: "#",
    },
    {
      title: "Google Play",
      image: "/play-market_converted.webp",
      link: "#",
    },
    {
      title: "iTunes",
      image: "/itunes_converted.webp",
      link: "#",
    },
    {
      title: "STEAM",
      image: "/steam_converted.webp",
      link: "#",
    },
    {
      title: "Play Station",
      image: "/playstation_converted.webp",
      link: "#",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto w-full px-0 pt-14 pb-10 max-sm:pt-4 max-sm:pb-6">
      <h2 className="text-[32px] leading-[37px] font-medium mb-5 text-white ml-10 max-sm:ml-6 max-sm:mb-4 max-sm:text-xl max-sm:font-medium">
        {t("best-seller")}
      </h2>
      <div className="pb-6 max-sm:px-[10px]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2.1, spaceBetween: 10 },
            400: { slidesPerView: 2.3, spaceBetween: 10 },
            640: { slidesPerView: 2.5, spaceBetween: 15 },
            992: { slidesPerView: 3.3, spaceBetween: 20 },
            1200: { slidesPerView: 3.9, spaceBetween: 10 },
            1300: { slidesPerView: 4.2, spaceBetween: 20 },
          }}
          className="swiper-container"
        >
          {games.map((game, indx) => (
            <SwiperSlide key={indx}>
              <div className="flex-shrink-0 w-[300px] main_card rounded-[30px] max-sm:w-[162px] max-sm:rounded-[10px]">
                <div className="p-4 max-sm:p-[10px]">
                  <div className="relative aspect-square">
                    <Image
                      src={game.image}
                      alt={game.title}
                      className="object-cover rounded-[25px] h-[270px] w-[270px] max-sm:w-[142px] max-sm:h-[138px] max-sm:rounded-[5px]"
                      width={270}
                      height={270}
                    />
                  </div>
                  <div className="p-4 space-y-2 max-sm:pl-0 max-sm:pb-0 max-sm:pt-2.5">
                    <h3 className="font-medium text-2xl text-white max-sm:font-medium max-sm:text-sm">
                      {game.title}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
