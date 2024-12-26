"use client";

import { useEffect, useState } from "react";
import BalansCardModal from "./BalansCardModal";
import axiosInstance from "@/libs/axios";

export default function BalansBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("UZS");
  const [inputValue, setInputValue] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [balance, setBalance] = useState();
  const [token, setToken] = useState(null);
  const [fullname, setFullName] = useState(null);

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
      }
    };
    fetchHandle();
  }, [token]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
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

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#FFFCF6] p-6 rounded-2xl shadow-sm">
          <div className="space-y-4">
            <h2 className="text-gray-600">Uzpin hamyon</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">
                {selectedCurrency == "UZS" && balance?.account_uzs}
                {selectedCurrency == "USD" && balance?.account_usd}
                {selectedCurrency == "RUB" && balance?.account_rub}
              </span>
              <span className="text-gray-600">{selectedCurrency}</span>
            </div>
            <div className="text-gray-600">{fullname}</div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Hisobni to&apos;ldirish</h2>
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
      />
    </div>
  );
}
