"use client";

import Link from "next/link";
import Image from "next/image";

export default function BottomNavbar() {
  return (
    <div className="md:hidden max-w-[335px] flex justify-between gap-[22px] bg-white rounded-[10px] fixed bottom-5 left-0 right-0 mx-auto z-50 py-[9px] px-[20px]">
      <Link href="/">
        <div className="flex flex-col items-center">
          <Image src="/home-icon.svg" width={24} height={24} alt="home icon" />
          <p className="font-normal text-[#ffba00] text-xs leading-[14px] mt-1">
            Bosh sahifa
          </p>
        </div>
      </Link>
      <Link href="/all-games">
        <div className="flex flex-col items-center">
          <Image
            src="/allgames-icon.svg"
            width={24}
            height={24}
            alt="home icon"
          />
          <p className="font-normal text-xs leading-[14px] mt-1">
            Barcha o&apos;yinlar
          </p>
        </div>
      </Link>
      <Link href="/help-me">
        <div className="flex flex-col items-center">
          <Image src="/heart-icon.svg" width={24} height={24} alt="home icon" />
          <p className="font-normal text-xs leading-[14px] mt-1">Sevimlilar</p>
        </div>
      </Link>
      <Link href="/login">
        <div className="flex flex-col items-center">
          <Image src="/user-icon.svg" width={24} height={24} alt="home icon" />
          <p className="font-normal text-xs leading-[14px] mt-1">Profil</p>
        </div>
      </Link>
    </div>
  );
}
