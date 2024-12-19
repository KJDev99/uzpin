import React from "react";
import Image from "next/image";

export default function FreeFireBanner() {
  return (
    <div className="freefire_bg">
      <div className="max-w-7xl mx-auto pt-[48px] max-sm:mx-[30px] max-sm:pt-5">
        <Image
          src="/icons/free_fire_logo.svg"
          width={302}
          height={75}
          className="max-w-[302px] max-h-[75px] max-sm:max-w-[128px] max-sm:max-h-[32px]"
          alt="freefire"
        />
        <h3 className="mt-[91px] font-semibold text-[64px] leading-[75px] text-[#000000] max-sm:mt-[41px] max-sm:text-[24px] max-sm:leading-[28px]">
          Free Fire
        </h3>
        <p className="font-medium text-[32px] leading-[37px] text-[#000000] max-sm:text-base max-sm:leading-[18px]">
          Game Promotions
        </p>
        <button className="bg-[#ffba00] py-3 px-12 mt-8 rounded-[10px] font-semibold text-[20px] leading-[23px] text-[#000000] max-sm:py-[5px] max-sm:px-[15px] max-sm:rounded-[5px] max-sm:text-xs max-sm:mt-3.5">
          Sotib olish
        </button>
      </div>
    </div>
  );
}
