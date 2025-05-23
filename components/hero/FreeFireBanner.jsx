"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function FreeFireBanner() {
  const { t } = useTranslation();
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
          {t("freefire")}
        </h3>
        <p className="font-medium text-[32px] leading-[37px] text-[#000000] max-sm:text-base max-sm:leading-[18px]">
          {t("promocode")}
        </p>
        <Link href={"/all-games/8e3cba6c-a5db-4711-a781-c3d35d5eba7d"}>
          <button className="bg-[#ffba00] py-3 px-12 mt-8 rounded-[10px] font-semibold text-[20px] leading-[23px] text-[#000000] max-sm:py-[5px] max-sm:px-[15px] max-sm:rounded-[5px] max-sm:text-xs max-sm:mt-3.5">
            {t("purchase")}
          </button>
        </Link>
      </div>
    </div>
  );
}
