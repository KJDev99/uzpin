import AccordionComponent from "@/components/accordion/accordion";
import React from "react";
import Image from "next/image";

export default function HelpMe() {
  return (
    <div className="game__content_bg">
      <AccordionComponent />
      <div className="w-full max-w-[1140px] mt-[100px] pb-[100px] mx-auto">
        <p className="text-center font-semibold text-[24px] leading-10">
          Yordam berishga tayyormiz
        </p>
        <div className="mt-10 flex justify-center gap-[30px] mx-auto max-sm:flex-col max-sm:items-center">
          <div className="max-w-[360px] w-full bg-white rounded-[20px] p-5 flex gap-5 shadow-custom">
            <div>
              <Image
                src="/icons/phone-icon.svg"
                width={24}
                height={24}
                alt="phone icon"
              />
            </div>
            <div>
              <p className="font-medium text-xl text-[#313131] leading-[23px]">
                Qo&apos;ngiroq qilish
              </p>
              <p className="mt-5 font-medium text-[24px] leading-[28px]">
                +998 90 111 22 33
              </p>
            </div>
          </div>

          <div className="max-w-[360px] w-full bg-white rounded-[20px] p-5 flex gap-5 shadow-custom">
            <div>
              <Image
                src="/icons/telegram-icon.svg"
                width={24}
                height={24}
                alt="telegram icon"
              />
            </div>
            <div>
              <p className="font-medium text-xl text-[#313131] leading-[23px]">
                Telegram orqali murojaat qilish
              </p>
              <p className="mt-5 font-medium text-[24px] leading-[28px]">
                @barbossa_gaming
              </p>
            </div>
          </div>

          <div className="max-w-[360px] w-full bg-white rounded-[20px] p-5 flex gap-5 shadow-custom">
            <div>
              <Image
                src="/icons/sms-icon.svg"
                width={24}
                height={24}
                alt="sms icon"
              />
            </div>
            <div>
              <p className="font-medium text-xl text-[#313131] leading-[23px]">
                Email orqali yozish
              </p>
              <p className="mt-5 font-medium text-[24px] leading-[28px]">
                uzpin@mail.ru
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
