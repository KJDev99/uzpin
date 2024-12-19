import React from "react";
import Image from "next/image";

export default function PubgBanner() {
  return (
    <div className="pubg_bg">
      <div className="max-w-7xl mx-auto pt-[48px] max-sm:mx-[30px] max-sm:pt-5">
        <Image
          src="/icons/pubg_logo.svg"
          width={330}
          height={104}
          className="max-w-[330px] max-h-[104px] max-sm:max-w-[126px] max-sm:max-h-[40px]"
          alt="pubg"
        />
        <h3 className="mt-[75px] font-semibold text-[64px] leading-[75px] text-[#000000] max-sm:text-[24px] max-sm:leading-[28px] max-sm:mt-[38px]">
          PUBG Mobile
        </h3>
        <p className="font-medium text-[32px] leading-[37px] text-[#000000] max-sm:text-base max-sm:leading-[18px]">
          O’yin promokodlari
        </p>
        <button className="bg-[#ffba00] py-3 px-12 mt-8 rounded-[10px] font-semibold text-[20px] leading-[23px] text-[#000000] max-sm:py-[5px] max-sm:px-[15px] max-sm:rounded-[5px] max-sm:text-xs max-sm:mt-2.5">
          Sotib olish
        </button>
      </div>
    </div>
  );
}
