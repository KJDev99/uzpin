"use client";

import axiosInstance from "@/libs/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../Loader";

export default function BestSales() {
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
    <div className="w-full px-0 pt-14 pb-10 max-sm:pt-6 max-sm:pb-6">
      <h2 className="text-2xl font-bold mb-4 text-white ml-[140px] max-sm:ml-6 max-sm:font-medium max-sm:text-xl">
        Eng ko&apos;p sotilgan promokodlar
      </h2>
      <div className="overflow-x-auto pb-6 px-20 max-sm:px-6 max-sm:pb-0">
        <div className="flex space-x-4 min-w-full snap-mandatory">
          {data.map((promo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[270px] snap-center main_card rounded-[10px] max-sm:w-[140px]"
            >
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
                  <div className="absolute bottom-1 pb-5 rounded-b left-[50%] flex items-center justify-center gap-2 translate-x-[-50%] bg_linear_card w-full max-sm:hidden">
                    <Image
                      src={"/uc.png"}
                      height={109}
                      width={122}
                      className="w-[122px] h-[109px]"
                      alt="diamong"
                    />
                  </div>
                </div>
                <div className="p-4 space-y-3 max-sm:px-0 max-sm:pb-0">
                  <div>
                    <h3 className="font-semibold text-lg text-white max-sm:font-medium max-sm:text-sm">
                      {promo.name}
                    </h3>
                    <p className="text-sm text-[#FFBA00] max-sm:text-[10px] font-normal max-sm:hidden">
                      Global
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-[#FFBA00] max-sm:text-[10px] font-normal sm:hidden">
                      Global
                    </p>
                    <p className="text-sm text-zinc-400 max-sm:text-xs max-sm:font-medium max-sm:hidden">
                      {promo.name}
                    </p>
                    <p className="font-semibold text-white max-sm:text-xs max-sm:font-medium">
                      {promo.price} UZS
                    </p>
                  </div>
                  <button className="w-full bg-[#FFBA00] text-black py-3 font-medium rounded-[10px] text-lg max-sm:text-xs max-sm:py-2">
                    Sotib olish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
