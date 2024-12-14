"use client";

import Image from "next/image";
import { Diamond, Gamepad2 } from "lucide-react";

const promoCodes = [
  {
    game: "PUBG Mobile",
    currency: "UC",
    amount: 60,
    price: 12900,
    image: "/img.png",
    region: "Global",
  },
  {
    game: "Mobile Legends",
    currency: "Diamonds",
    amount: 100,
    price: 80900,
    image: "/img.png",
    region: "Global",
  },
  {
    game: "Free Fire",
    currency: "Diamonds",
    amount: 100,
    price: 100000,
    image: "/img.png",
    region: "Global",
  },
  {
    game: "PUBG Mobile",
    currency: "UC",
    amount: 180,
    price: 25900,
    image: "/img.png",
    region: "Global",
  },
  {
    game: "Mobile Legends",
    currency: "Diamonds",
    amount: 100,
    price: 80900,
    image: "/img.png",
    region: "Global",
  },
];

export default function BestSales() {
  return (
    <div className="w-full px-0 pt-14 pb-10">
      <h2 className="text-2xl font-bold mb-4 text-white ml-[140px]">
        Eng ko&apos;p sotilgan promokodlar
      </h2>
      <div className="overflow-x-auto pb-6 px-20">
        <div className="flex space-x-4 min-w-full snap-mandatory">
          {promoCodes.map((promo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[270px] snap-center main_card rounded-[10px]"
            >
              <div className="p-4 ">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={promo.image}
                    alt={promo.game}
                    className="object-cover rounded h-[228px] w-full"
                    width={228}
                    height={228}
                  />
                  <div className="absolute bottom-1 pb-5 rounded-b left-[50%] flex items-center justify-center gap-2 translate-x-[-50%] bg_linear_card w-full">
                    {promo.currency === "Diamonds" ? (
                      <Image
                        src={"/diamond.png"}
                        height={97}
                        width={134}
                        className="w-[134px] h-[97px]"
                        alt="diamong"
                      />
                    ) : (
                      <Image
                        src={"/uc.png"}
                        height={109}
                        width={122}
                        className="w-[122px] h-[109px]"
                        alt="diamong"
                      />
                    )}
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      {promo.game}
                    </h3>
                    <p className="text-sm text-[#FFBA00]">{promo.region}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-zinc-400">
                      {promo.amount} {promo.currency}
                    </p>
                    <p className="font-semibold text-white">
                      {promo.price} UZS
                    </p>
                  </div>
                  <button className="w-full bg-[#FFBA00] text-black py-3 font-medium rounded-[10px] text-lg">
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
