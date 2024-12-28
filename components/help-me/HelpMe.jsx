import AccordionComponent from "@/components/accordion/accordion";
import React from "react";
import Image from "next/image";

export default function HelpMeComponent() {
  return (
    <div className="game__content_bg">
      <AccordionComponent />
      <div className="w-full max-w-[1140px] mt-[100px] pb-[100px] mx-auto">
        <p className="text-center font-semibold text-[24px] leading-10 max-sm:text-base">
          Yordam berishga tayyormiz
        </p>
        <div className="mt-10 flex justify-center gap-[30px] mx-auto max-sm:flex-col max-sm:items-center">
          <a
            href="tel:+998901112233"
            target="_blank"
            className="max-w-[360px] w-full bg-white rounded-[20px] p-5 flex gap-5 shadow-custom max-sm:max-w-[260px]"
          >
            <div className="max-sm:flex">
              <Image
                src="/icons/phone-icon.svg"
                width={24}
                height={24}
                alt="phone icon"
              />
            </div>
            <div>
              <p className="font-medium text-xl text-[#313131] leading-[23px] max-sm:text-xs">
                Qo&apos;ngiroq qilish
              </p>
              <p className="mt-5 font-medium text-[24px] leading-[28px] max-sm:mt-2 max-sm:text-base">
                +998 90 111 22 33
              </p>
            </div>
          </a>

          <a
            href="https://t.me/barbossa_gaming"
            target="_blank"
            className="max-w-[360px] w-full bg-white rounded-[20px] p-5 flex gap-5 shadow-custom max-sm:max-w-[260px]"
          >
            <div className="max-sm:flex">
              <Image
                src="/icons/telegram-icon.svg"
                width={24}
                height={24}
                alt="telegram icon"
              />
            </div>
            <div>
              <p className="font-medium text-xl text-[#313131] leading-[23px] max-sm:text-xs">
                Telegram orqali murojaat qilish
              </p>
              <p className="mt-5 font-medium text-[24px] leading-[28px] max-sm:mt-2 max-sm:text-base">
                @barbossa_gaming
              </p>
            </div>
          </a>

          <a
            href="mailto:uzpin@mail.ru"
            target="_blank"
            className="max-w-[360px] w-full bg-white rounded-[20px] p-5 flex gap-5 shadow-custom max-sm:max-w-[260px]"
          >
            <div className="max-sm:flex">
              <Image
                src="/icons/sms-icon.svg"
                width={24}
                height={24}
                alt="sms icon"
              />
            </div>
            <div>
              <p className="font-medium text-xl text-[#313131] leading-[23px] max-sm:text-xs">
                Email orqali yozish
              </p>
              <p className="mt-5 font-medium text-[24px] leading-[28px] max-sm:mt-2 max-sm:text-base">
                uzpin@mail.ru
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
