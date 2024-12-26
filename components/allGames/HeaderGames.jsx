"use client";
import { useTranslation } from "react-i18next";
export default function HeaderGames() {
  const { t } = useTranslation();
  return (
    <div className="games_bg">
      <p className="ml-[120px] pt-[340px] text-[#F9F9F9] text-[64px] max-sm:pt-[144px] max-sm:ml-5 max-sm:font-medium max-sm:text-2xl max-sm:leading-[36px]">
        Barcha O&apos;yinlar
      </p>
    </div>
  );
}
