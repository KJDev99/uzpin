"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";

export default function BottomNavbar() {
  const pathname = usePathname();
  const isActive = (path) => {
    switch (path) {
      case "/":
        return "home";
      case "/all-games":
        return "allgames";
      case "/help-me":
        return "helpme";
      case "/login":
        return "login";
      case "/profile":
      case "/profile/balance":
      case "/profile/purchases":
      case "/profile/transactions":
      case "/profile/logout":
        return "profile";
    }
  };
  const [profileData, setProfileData] = useState();
  useEffect(() => {
    setProfileData(JSON.parse(localStorage.getItem("profileData")));
  }, []);

  const active = isActive(pathname);
  return (
    <div className="md:hidden max-w-[335px] flex justify-between gap-[22px] bg-white rounded-[10px] fixed bottom-5 left-0 right-0 mx-auto z-50 pt-[10px] pb-[26px] px-[20px]">
      <Link href="/">
        <div className="flex flex-col items-center">
          {active === "home" ? (
            <Image
              src="/home-icon1.svg"
              width={24}
              height={24}
              alt="home icon"
            />
          ) : (
            <Image
              src="/home-icon.svg"
              width={24}
              height={24}
              alt="home icon"
            />
          )}

          <p
            className={`font-normal text-xs leading-[14px] mt-1 ${
              active === "home" ? "text-[#FFBA00]" : "text-[#828282]"
            }`}
          >
            Bosh sahifa
          </p>
        </div>
      </Link>
      <Link href="/all-games">
        <div className="flex flex-col items-center">
          {active === "allgames" ? (
            <Image
              src="/allgames-icon1.svg"
              width={24}
              height={24}
              alt="home icon"
            />
          ) : (
            <Image
              src="/allgames-icon.svg"
              width={24}
              height={24}
              alt="home icon"
            />
          )}
          <p
            className={`font-normal text-xs leading-[14px] mt-1 ${
              active === "allgames" ? "text-[#FFBA00]" : "text-[#828282]"
            }`}
          >
            Barcha o&apos;yinlar
          </p>
        </div>
      </Link>
      <Link href="/help-me">
        <div className="flex flex-col items-center">
          <IoIosHelpCircleOutline
            className={`font-normal text-2xl  ${
              active === "helpme" ? "text-[#FFBA00]" : "text-[#828282]"
            }`}
          />
          <p
            className={`font-normal text-xs leading-[14px] mt-1 ${
              active === "helpme" ? "text-[#FFBA00]" : "text-[#828282]"
            }`}
          >
            Yordam
          </p>
        </div>
      </Link>
      {profileData ? (
        <Link href="/profile">
          <div className="flex flex-col items-center">
            {active === "profile" ? (
              <Image
                src="/user-icon1.svg"
                width={24}
                height={24}
                alt="home icon"
              />
            ) : (
              <Image
                src="/user-icon.svg"
                width={24}
                height={24}
                alt="home icon"
              />
            )}
            <p
              className={`font-normal text-xs leading-[14px] mt-1 ${
                active === "profile" ? "text-[#FFBA00]" : "text-[#828282]"
              }`}
            >
              {profileData.fullname || "profile"}
            </p>
          </div>
        </Link>
      ) : (
        <Link href="/login">
          <div className="flex flex-col items-center">
            {active === "login" ? (
              <Image
                src="/user-icon1.svg"
                width={24}
                height={24}
                alt="home icon"
              />
            ) : (
              <Image
                src="/user-icon.svg"
                width={24}
                height={24}
                alt="home icon"
              />
            )}
            <p
              className={`font-normal text-xs leading-[14px] mt-1 ${
                active === "login" ? "text-[#FFBA00]" : "text-[#828282]"
              }`}
            >
              Profil
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
