"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import axiosInstance from "@/libs/axios";
import Loader from "../Loader";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function TopGameCards() {
  const { t } = useTranslation();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGames = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/client/games");
      const fetchedGames = response.data.map((game) => ({
        title: game.name,
        image: game.photo,
        id: game.id,
      }));
      setGames(fetchedGames);
    } catch (error) {
      console.error("Error fetching games:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full px-0 py-6">
      <h2 className="barriecito text-[32px] leading-[37px] font-medium mb-4 text-white ml-[140px] max-sm:ml-6 max-sm:text-[20px]">
        {t("popular-games")}
      </h2>
      <div className="pb-6 pl-20 max-sm:pl-[10px]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2.2, spaceBetween: 10 },
            640: { slidesPerView: 2.5, spaceBetween: 15 },
            1024: { slidesPerView: 4.3, spaceBetween: 20 },
          }}
          className='swiper-container'
        >
          {games.map((game, indx) => (
            <SwiperSlide key={indx}>
              <div className="flex-shrink-0 w-[300px] main_card max-sm:w-[162px]">
                <div className="p-4 max-sm:p-[10px]">
                  <div className="relative aspect-square">
                    <Image
                      src={game.image}
                      alt={game.title}
                      className="object-cover w-[270px] h-[311px] rounded-lg max-sm:max-w-[142px] max-sm:max-h-[126px] max-sm:rounded-[5px]"
                      width={270}
                      height={311}
                    />
                  </div>
                  <div className="pt-5 space-y-2 max-sm:p-0 max-sm:pt-[10px] max-sm:space-y-[18px]">
                    <h3 className="font-medium text-[24px] leading-[28px] text-white max-sm:text-sm">
                      {game.title}
                    </h3>
                    <Link href={`/all-games/${game.id}`}>
                      <button className="w-full mt-5 bg-[#FFBA00] text-black py-3 font-medium rounded-[10px] text-xl leading-[23px] max-sm:text-[12px] max-sm:py-2">
                        {t("see-more")}
                      </button>
                    </Link>
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
