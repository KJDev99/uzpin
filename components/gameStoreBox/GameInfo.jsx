"use client";
import React, { useState } from "react";

export default function GameInfo() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="max-w-[1200px] mx-auto mt-10 pb-[100px] max-sm:px-4">
      <div className="block lg:hidden">
        <div className="flex justify-between mb-[14px] border-b font-medium text-sm">
          <button
            className={`py-2 w-[50%] text-start ${
              activeTab === "description"
                ? "border-b-2 border-black"
                : "border-b-[0.5px] border-[#313131]"
            }`}
            onClick={() => setActiveTab("description")}
          >
            O'yin Tavsifi
          </button>
          <button
            className={`py-2 w-[50%] text-start ${
              activeTab === "promo"
                ? "border-b-2 border-black"
                : "border-b-[0.5px] border-[#313131]"
            }`}
            onClick={() => setActiveTab("promo")}
          >
            PUBG Mobile UC (Global) promokodni faollashtirish
          </button>
        </div>
      </div>

      {/* Content for max-sm screens */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          className={`mb-8 ${
            activeTab === "description" ? "block" : "hidden"
          } lg:block`}
        >
          <h2 className="text-xl font-bold mb-4 max-sm:hidden">
            O&apos;yin tavsifi
          </h2>
          <div className="prose prose-gray max-w-none max-sm:text-sm">
            <p>
              PUBG MOBILE - Tencent Games ostida Lightspeed & Quantum Studios
              tomonidan mustaqil ravishda ishlab chiqilgan va rasmiy
              PLAYERUNKNOWN&apos;S BATTLEGROUNDS litsenziyasi ostida
              litsenziyalangan mobil Battle Royal o&apos;yini. U butun dunyo
              bo&apos;ylab 2018 yil mart oyida chiqarilgan. Unreal Engine 4
              o&apos;yin mexanizmi bilan yaratilgan PUBG MOBILE
              o&apos;yinchilarga vizual sifat, xaritalar, tortishish tajribasi
              va boshqa masalalar bo&apos;yicha keng qamrovli va real Battle
              Royale tajribasini taklif qilishga qaratilgan.
            </p>
            <p>
              Yuz nafar o&apos;yinchi hayajonli va qiziqarli sayohatni boshlash
              uchun jang maydoniga tushadi. Har bir o&apos;yinchi omon qolishga
              yordam beradigan materiallarni toplashi kerak, shuningdek, jang
              maydonidagi oxirgi jamoa bo&apos;lish uchun xarita sharoitlari,
              transport vositalari va narsalardan maksimal darajada foydalanishi
              kerak. Yurak urishingizni tezlashtirin va o&apos;yin maydoni
              torayguncha hushyor bo&apos;ling.
            </p>
            <p>
              O&apos;yinchilar uchun Erangel, Miramar, Sanhok, Livik va boshqa
              ko&apos;plab xaritalar mavjud.
            </p>
          </div>
        </div>
        <div
          className={`mb-8 ${
            activeTab === "promo" ? "block" : "hidden"
          } lg:block`}
        >
          <h2 className="text-xl font-bold mb-4 max-sm:hidden">
            PUBG Mobile UC (Global) promokodni faollashtirish
          </h2>
          <p className="mb-0 max-sm:text-sm">
            Quyidagi link orqali o&apos;tib promokodni faollashtirishingiz
            mumkin
          </p>
          <a
            href="https://www.midasbuy.com/midasbuy/tr/redeem/pubgm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[black] font-bold mb-5 break-all max-sm:font-semibold max-sm:text-sm"
          >
            https://www.midasbuy.com/midasbuy/tr/redeem/pubgm
          </a>

          <div className="mt-4 aspect-video w-full">
            <iframe
              width="100%"
              height="335px"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="UC NASIL YÜKLENİR?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg max-sm:rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
