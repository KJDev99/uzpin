"use client";

import { useEffect, useState } from "react";
import BalansCardModal from "./BalansCardModal";
import axiosInstance from "@/libs/axios";
import Loader from "../Loader";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function BalansBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("UZS");
  const [inputValue, setInputValue] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [balance, setBalance] = useState();
  const [token, setToken] = useState(null);
  const [fullname, setFullName] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProfileData = localStorage.getItem("profileData");
      if (storedProfileData) {
        const parsedProfileData = JSON.parse(storedProfileData);
        setToken(parsedProfileData?.access || null);
        setFullName(parsedProfileData?.fullname || null);
      }
    }
  }, []);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  useEffect(() => {
    setLoading(true);
    const fetchHandle = async () => {
      try {
        const response = await axiosInstance.get("/client/balance", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBalance(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchHandle();
    }
  }, [token]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto max-sm:p-0 max-sm:pb-4">
      <div className="px-6 py-4 max-md:border-b max-md:hidden">
        <h2 className="text-xl font-bold md:mb-4">Profil ma&apos;lumotlari</h2>
      </div>
      <Link
        href={"/profile/profile-mobile"}
        className="md:px-6 py-4 max-md:border-b flex items-center max-md:gap-5 md:hidden"
      >
        <IoIosArrowBack className="text-2xl md:hidden" />
        <h2 className="text-xl font-bold md:mb-4">Balans</h2>
      </Link>
      <div className="flex justify-between items-center mt-5 mb-8 max-sm:hidden">
        <h1 className="text-2xl font-semibold">Balans</h1>
        <div className="flex gap-2">
          <button
            onClick={() => handleCurrencyChange("UZS")}
            className={`px-4 py-2 rounded-lg ${
              selectedCurrency === "UZS"
                ? "bg-zinc-800 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            UZS
          </button>
          <button
            onClick={() => handleCurrencyChange("USD")}
            className={`px-4 py-2 rounded-lg ${
              selectedCurrency === "USD"
                ? "bg-zinc-800 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            USD
          </button>
          <button
            onClick={() => handleCurrencyChange("RUB")}
            className={`px-4 py-2 rounded-lg ${
              selectedCurrency === "RUB"
                ? "bg-zinc-800 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            RUB
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-sm:mt-5 max-sm:gap-20">
        <div className="bg-[#FFFCF6] p-6 rounded-2xl shadow-custom max-sm:pt-0 max-sm:pb-[10px] max-sm:px-5">
          <div className="space-y-4 max-sm:space-y-[10px]">
            <h2 className="text-gray-600 max-sm:hidden">Uzpin hamyon</h2>
            <h2 className="sm:hidden font-semibold text-[20px] text-[#313131] mb-[22px]">
              {fullname}
            </h2>
            <div className="flex items-baseline gap-2">
              <p className="sm:hidden font-normal text-[14px] text-[#313131]">
                Joriy balans:
              </p>
              <span className="text-4xl font-bold flex max-sm:font-semibold max-sm:text-[20px] max-sm:ml-[30px]">
                {selectedCurrency == "UZS" && balance?.account_uzs}
                {selectedCurrency == "USD" && balance?.account_usd}
                {selectedCurrency == "RUB" && balance?.account_rub}
              </span>
              <span className="text-gray-600 max-sm:font-medium max-sm:text-sm max-sm:text-[#000000]">
                {selectedCurrency}
              </span>
            </div>
            <div className="text-gray-600 max-sm:hidden">{fullname}</div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Hisobni to&apos;ldirish</h2>

          <div className="flex flex-col sm:hidden">
            <h2>Kiritish valyutasini tanlang:</h2>
            <div className="mt-2.5">
              <button
                onClick={() => handleCurrencyChange("UZS")}
                className={`px-4 py-2 rounded-tl-[5px] rounded-bl-[5px] max-sm:px-5 ${
                  selectedCurrency === "UZS"
                    ? "bg-zinc-800 text-white"
                    : "bg-gray-100 text-[#828282]"
                }`}
              >
                UZS
              </button>
              <button
                onClick={() => handleCurrencyChange("USD")}
                className={`px-4 py-2 max-sm:px-5 ${
                  selectedCurrency === "USD"
                    ? "bg-zinc-800 text-white"
                    : "bg-gray-100 text-[#828282]"
                }`}
              >
                USD
              </button>
              <button
                onClick={() => handleCurrencyChange("RUB")}
                className={`px-4 py-2 rounded-br-[5px] rounded-tr-[5px] max-sm:px-5 ${
                  selectedCurrency === "RUB"
                    ? "bg-zinc-800 text-white"
                    : "bg-gray-100 text-[#828282]"
                }`}
              >
                RUB
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Summani kiriting: {selectedCurrency}
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Summani kiriting..."
                className="w-full p-3 border rounded-lg border-[#E7E7E7] bg-[#F9F9F9] focus:ring-yellow-400"
              />
            </div>
            <button
              onClick={openModal}
              className="w-full py-3 bg-[#FFC149] hover:bg-[#FFB529] text-black font-medium rounded-lg transition-colors"
            >
              To&apos;ldirish
            </button>
          </div>
        </div>
      </div>
      <BalansCardModal
        isOpen={isOpen}
        onClose={closeModal}
        selectedCurrency={selectedCurrency}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}
