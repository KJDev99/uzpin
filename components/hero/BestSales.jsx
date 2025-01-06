"use client";

import axiosInstance from "@/libs/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function BestSales() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchStats = async () => {
      try {
        const response = await axiosInstance.get(`/client/popular/promocodes`);
        setData(response.data || []);
        console.log(response.data);
      } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-[1400px] mx-auto w-full px-0 pt-14 pb-10 max-sm:pt-6 max-sm:pb-6">
      <h2 className="text-[32px] leading-[37px] font-medium mb-5 text-white ml-10 max-sm:ml-6 max-sm:font-medium max-sm:text-xl">
        {t("best-selling")}
      </h2>
      <div className="pb-6 max-sm:px-6 max-sm:pb-0">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2.2, spaceBetween: 10 },
            640: { slidesPerView: 2.5, spaceBetween: 15 },
            1024: { slidesPerView: 4.5, spaceBetween: 20 },
          }}
        >
          {data.map((promo, index) => (
            <SwiperSlide key={index}>
              <div className="flex-shrink-0 w-[270px] main_card rounded-[10px] max-sm:w-[140px]">
                <div className="p-4 max-sm:p-2.5">
                  <div className="relative aspect-square overflow-hidden">
                    {promo.photo ? (
                      <Image
                        src={`${promo.photo}`}
                        alt={"img"}
                        className="object-cover rounded h-[228px] w-full max-sm:max-w-[120px] max-sm:max-h-[120px]"
                        width={228}
                        height={228}
                      />
                    ) : (
                      <Image
                        src={`/img.png`}
                        alt={"img"}
                        className="object-cover rounded h-[228px] w-full max-sm:max-w-[120px] max-sm:max-h-[120px]"
                        width={228}
                        height={228}
                      />
                    )}
                  </div>
                  <div className="space-y-3 max-sm:px-0 max-sm:pb-0">
                    <div>
                      <h3 className="font-bold text-[24px] leading-[28px] text-white max-sm:font-medium max-sm:text-sm">
                        {promo.name}
                      </h3>
                      <p className="mt-[5px] text-[16px] leading-[18px] text-[#FFBA00] max-sm:text-[10px] font-normal max-sm:hidden">
                        {t("global")}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-[20px] leading-[23px] text-white max-sm:text-xs max-sm:font-medium">
                        {promo.name}
                      </p>
                      <p className="font-normal text-[16px] leading-[18px] text-white max-sm:text-xs max-sm:font-medium">
                        {promo.price} UZS
                      </p>
                    </div>
                    <Link href={`/all-games/${promo.game}`}>
                      <button className="w-full mt-8 bg-[#FFBA00] text-black py-3 font-medium rounded-[10px] text-[20px] leading-[23px] max-sm:text-xs max-sm:py-2">
                        {t("purchase")}
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
