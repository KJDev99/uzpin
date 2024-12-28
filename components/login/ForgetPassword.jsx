"use client"

import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Toast } from "../Toast";
import axiosInstance from "@/libs/axios";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";
import Image from "next/image";
import {useTranslation} from 'react-i18next'

export default function ForgetPassword({ setLogin, loginCount, setMainEmail }) {
  const {t} = useTranslation()
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const rounter = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue) {
      setError(true);
      setTimeout(() => setError(false), [3000]);
    } else {
      try {
        await axiosInstance.post("client/auth/reset", {
          email: inputValue,
        });
        rounter.push("");
        setLogin(4);
        setMainEmail(inputValue);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        setError(true);
        setTimeout(() => setError(false), [3000]);
      }
      setError(false);
      setLogin(4);
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      {error && (
        <Toast status="false" text={t('login-text16')} />
      )}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md max-sm:p-4 max-sm:shadow-none">
        <div className="flex justify-end mb-[20px] max-sm:hidden">
          <Link href="/">
            <button className="text-[#313131]">
              <X className="h-6 w-6" />
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src='/logo.svg' className="sm:hidden" width={162} height={31} alt="logo" />
          <div className="flex relative items-center justify-center max-sm:mt-[60px]">
            <Link href="/">
              <FaChevronLeft className="h-6 w-6 absolute top-[15%] -left-[15%] sm:hidden" />
            </Link>
            <h2 className="text-[#141311] font-medium text-center text-3xl">
              {t('login-text5')}
            </h2>
          </div>
          <p className="mb-3 text-center text-[#909090] text-sm">
            {t('login-text17')}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-5">
            <label
              className="block text-[#828282] text-sm px-5 pb-2"
              htmlFor="email"
            >
              {t('login-text2')}
            </label>
            <input
              type="text"
              id="email"
              placeholder="example@mail.ru"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg outline-none text-[#000000] ${
                error ? "border-b-2 border-[red]" : "border-[#ACACAC]"
              }`}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1 px-1">
                {t('login-text3')}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFBA00] text-[#313131] py-2 px-4 rounded-lg mt-2 font-medium mb-6 border-2 border-[transparent] border-b-[#313131]"
          >
            {t('login-text18')}
          </button>
        </form>
      </div>
    </div>
  );
}
