"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiUser } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import axiosInstance from "@/libs/axios";
import SearchComponent from "./searchModal/SearchComponent";
import CurrencySelector from "./CurrencySelector";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const [profileData, setProfileData] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setSelectedLang(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    } else {
      setSelectedLang("uz");
      i18n.changeLanguage("uz");
    }
    setProfileData(JSON.parse(localStorage.getItem("profileData")));
  }, [i18n, pathname]);

  const [selectedLang, setSelectedLang] = useState("uz");
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    // { code: "uz", flag: "/flaguz_converted.webp", alt: "Uzbekistan flag" },
    // { code: "ru", flag: "/flagru_converted.webp", alt: "Russia flag" },
    // { code: "en", flag: "/flagen_converted.webp", alt: "English flag" },
    { code: "uz", flag: "/flaguz.svg", alt: "Uzbekistan flag" },
    { code: "ru", flag: "/flagru.svg", alt: "Russia flag" },
    { code: "en", flag: "/flagen.svg", alt: "English flag" },
  ];

  const handleLanguageChange = (code) => {
    setSelectedLang(code);
    i18n.changeLanguage(code);
    setIsHovered(false);
    localStorage.setItem("language", code);
    window.location.reload();
    setIsOpen(false);
  };

  return (
    <nav className="bg-black border-b border-gray-800 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-[100px] max-md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="target icon"
              width={150}
              height={24}
              className="ml-1 mr-20 max-sm:mr-5 max-sm:max-w-[108px] max-sm:max-h-[20px]"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-10 font-medium text-[20px] leading-[23px]">
            <Link
              href="/"
              className="text-[#acacac] hover:text-[#FDB000] transition-colors"
            >
              {t("home")}
            </Link>
            <Link
              href="/all-games"
              className="text-[#acacac] hover:text-[#FDB000] transition-colors"
            >
              {t("all_games")}
            </Link>
            <Link
              href="/help-me"
              className="text-[#acacac] hover:text-[#FDB000] transition-colors"
            >
              {t("help")}
            </Link>
          </div>
          <div className="flex-1 max-w-lg mx-5 max-sm:mx-0 max-sm:flex justify-end">
            <SearchComponent />
          </div>
          <div className="flex max-md:w-max items-center space-x-8 max-sm:space-x-0 justify-between">
            {profileData ? (
              <>
                <Link href={"/profile"}>
                  <button className="max-md:hidden text-[black] font-medium grow transition-colors flex gap-2 border bg-[#FFBA00] border-[#FFBA00] rounded px-4 py-2">
                    <PiUser className="h-5 text-[16px] font-bold" />
                    {!isHovered && (
                      <p className="font-bold">
                        {profileData.fullname.split(" ")[0].length > 10
                          ? profileData.fullname.split(" ")[0].slice(0, 10)
                          : profileData.fullname.split(" ")[0]}
                      </p>
                    )}
                  </button>
                </Link>
              </>
            ) : (
              <Link href={"/login"}>
                <button className="max-md:hidden text-[#ACACAC] font-medium transition-colors flex gap-2 border border-[#ACACAC] rounded px-4 py-2">
                  <PiUser className="h-5 text-lg font-bold" />
                  {!isHovered && <p>{i18n.t("login")}</p>}
                </button>
              </Link>
            )}
            <div className="relative">
              <div className="text-left">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 px-4 py-2 text-[#ffba00] font-medium uppercase rounded-md shadow-md"
                >
                  <Image
                    src={
                      languages.find((lang) => lang.code === selectedLang).flag
                    }
                    alt={
                      languages.find((lang) => lang.code === selectedLang).code
                    }
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  {languages.find((lang) => lang.code === selectedLang).code}
                </button>

                {isOpen && (
                  <ul className="absolute z-10 left-0 mt-2 w-22 bg-white border rounded-md shadow-lg">
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        className="uppercase flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleLanguageChange(lang.code)}
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.code}
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                        {lang.code}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* <select
              className="md:block font-medium transition-colors flex gap-2 rounded px-2 py-2 uppercase outline-none bg-[#ffba00] text-black"
              value={selectedLang}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  <Image
                    src={lang.flag}
                    alt={lang.alt}
                    width={24}
                    height={24}
                  />
                  {lang.code}
                </option>
              ))}
            </select> */}

            {/* <div
              className={`relative flex  justify-end  transition-all ${
                isHovered ? "w-[150px] max-md:w-max" : "w-max"
              }`}
              onClick={() => setIsHovered((prev) => !prev)}
            >
              <button className="flex grow-1 w-7 items-center justify-end">
                <Image
                  src={
                    languages.find((lang) => lang.code === selectedLang).flag
                  }
                  alt={languages.find((lang) => lang.code === selectedLang).alt}
                  width={28}
                  height={20}
                  className="cursor-pointer w-7"
                />
              </button>

              <div
                className={`absolute z-[999] max-md:flex max-md:flex-col max-md:top-4 max-md:pt-3 w-max  flex gap-2 transition-all duration-300 translate-x-2 ${
                  isHovered
                    ? "right-[43px] max-md:right-[30%]"
                    : "right-[-240px]"
                }`}
              >
                {languages
                  .filter((lang) => lang.code !== selectedLang)
                  .map((lang) => (
                    <Image
                      key={lang.code}
                      src={lang.flag}
                      alt={lang.alt}
                      width={24}
                      height={24}
                      className="cursor-pointer transition-transform  h-5 w-7 "
                      onClick={() => handleLanguageChange(lang.code)}
                    />
                  ))}
              </div>
            </div> */}
          </div>
          <CurrencySelector />
        </div>
      </div>
    </nav>
  );
}
