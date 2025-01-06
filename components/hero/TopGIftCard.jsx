"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function TopGiftCard() {
  const { t } = useTranslation();

  const games = [
    {
      title: "Google Play",
      image: "/play-market.png",
      link: "#",
    },
    {
      title: "iTunes",
      image: "/itunes.png",
      link: "#",
    },
    {
      title: "STEAM",
      image: "/steam.png",
      link: "#",
    },
    {
      title: "Play Station",
      image: "/playstation.png",
      link: "#",
    },
    {
      title: "Google Play",
      image: "/play-market.png",
      link: "#",
    },
    {
      title: "iTunes",
      image: "/itunes.png",
      link: "#",
    },
    {
      title: "STEAM",
      image: "/steam.png",
      link: "#",
    },
    {
      title: "Play Station",
      image: "/playstation.png",
      link: "#",
    },
  ];

  return (
    <div className="w-full px-0 pt-14 pb-10 max-sm:pt-4 max-sm:pb-6">
      <h2 className="text-[32px] leading-[37px] font-medium mb-5 text-white ml-[140px] max-sm:ml-6 max-sm:mb-4 max-sm:text-xl max-sm:font-medium">
        Bestseller Gift Cards
      </h2>
      <div className="overflow-x-auto scrollbar-hide pb-6 px-20 max-sm:px-[10px]">
        <div className="flex space-x-4 min-w-full  snap-mandatory">
          {games.map((game, indx) => (
            <div
              key={indx}
              className="flex-shrink-0 w-[300px] snap-center main_card rounded-[30px] max-sm:w-[162px] max-sm:rounded-[10px]"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
}
