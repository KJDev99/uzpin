"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import axiosInstance from "@/libs/axios";
import { Alert } from "../Alert";
import { useTranslation } from "react-i18next";
import PurchasesModal from "../profile/PurchasesModal";

export function PurchaseModal({
  isOpen,
  onClose,
  cart,
  totalUC,
  totalPrice,
  clear,
  savedCurrency,
}) {
  const { t } = useTranslation();
  const [playerId, setPlayerId] = useState("");

  const [token, setToken] = useState(null);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [isOpenBuy, setIsOpenBuy] = useState(false);
  const [buyCode, setBuyCode] = useState();

  const closeModal = () => {
    setBuyCode(null);
    setIsOpenBuy(false);
    onClose();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProfileData = localStorage.getItem("profileData");
      if (storedProfileData) {
        const parsedProfileData = JSON.parse(storedProfileData);
        setToken(parsedProfileData?.access || null);
      }
    }
  }, []);

  const fetchBuyHandle = async () => {
    const savedCurrency =
      typeof window !== "undefined" ? localStorage.getItem("currency") : "uzs";
    const formattedData = {
      currency: savedCurrency,
      items: cart.map((item) => ({
        promocode: item.id,
        count: item.quantity,
      })),
    };

    try {
      const response = await axiosInstance.post(
        "/client/promocode/buy",
        formattedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // setSuccess(true);
      setBuyCode(response.data[0].id);
      console.log(response.data[0].id);
      setIsOpenBuy(true);
      setIsOpen(true);
    } catch (error) {
      setError(true);
    } finally {
      clear();
      // onClose();
      setError(false);
      // setSuccess(false);
    }
  };
  // const fetchBuyHandleId = async () => {
  //   const formattedData = {
  //     currency: "RUB",
  //     items: cart.map((item) => ({
  //       promocode: item.id,
  //       count: item.quantity,
  //     })),
  //   };

  //   try {
  //     const response = await axiosInstance.post(
  //       "/client/promocode/buy",
  //       formattedData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     setSuccess(true);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setTimeout(() => {
  //       onClose();
  //       setError(false);
  //       setSuccess(false);
  //     }, 3000);
  //   }
  // };

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      open={isOpen}
    >
      {error && (
        <Alert
          status={false}
          title="Mablag’ yetarli emas!"
          message="Iltimos hisobingizni to’ldiring"
        />
      )}
      {success && (
        <Alert
          status={true}
          title="Muvaffaqiyatli bajarildi!"
          message="Iltimos haridingiz tasdiqlanishini kuting"
        />
      )}
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-[white] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] max-sm:w-[95%] max-h-[95%] overflow-auto max-sm:rounded-lg">
        <div>
          <div className="flex items-center justify-center text-2xl font-semibold mt-[40px] max-sm:m-0 max-sm:justify-start max-sm:font-medium max-sm:text-xl">
            {isOpen == 1 && <div>{t("all-games-text10")}</div>}
            {isOpen == 2 && <div>{t("all-games-text11")}</div>}
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground max-sm:top-6"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="pt-4">
              <div className="flex flex-col">
                <div className="flex justify-between font-bold">
                  <div className="flex gap-[10px]">
                    <span className="font-normal">{t("all-games-text8")}</span>
                    {totalUC.toLocaleString()}
                  </div>
                  <div>
                    {totalPrice.toLocaleString()} {savedCurrency}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-8 max-sm:hidden">
              {cart.length > 0 &&
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-[#F4F4F4] py-3 px-5 rounded-[10px] shadow-lg mt-4"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.photo}
                        alt={`${item.amount} UC`}
                        width={35}
                        height={35}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span>
                      {(item.price * item.quantity).toLocaleString()}{" "}
                      {savedCurrency}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {isOpen == 2 && (
            <>
              <div className="space-y-2 flex justify-between items-center">
                <label
                  htmlFor="playerId"
                  className="text-lg font-semibold max-sm:font-normal max-sm:text-base"
                >
                  {t("all-games-text13")}
                </label>
                <input
                  id="playerId"
                  value={playerId}
                  onChange={(e) => setPlayerId(e.target.value)}
                  placeholder={t("all-games-text13")}
                  className="border border-[#E7E7E7] rounded-[5px] py-3 px-5 font-semibold outline-none max-sm:max-w-[163px]"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input id="verify" type="checkbox" className="peer hidden" />
                <label
                  htmlFor="verify"
                  className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center cursor-pointer bg-white peer-checked:bg-yellow-500"
                >
                  <Check className="w-4 h-4" />
                </label>
                <label
                  htmlFor="verify"
                  className="max-sm:text-[14px] max-sm:leading-4"
                >
                  {t("all-games-text14")}
                </label>
              </div>
              <button
                // onClick={fetchBuyHandleId}
                className="w-full py-2 bg-[#FFBA00] rounded text-black font-medium border-b-2 border-[black]"
              >
                {t("all-games-text10")}
              </button>
            </>
          )}

          {isOpen == 1 && (
            <button
              onClick={fetchBuyHandle}
              className="w-full py-2 bg-[#FFBA00] rounded text-black font-medium border-b-2 border-[black]"
            >
              {t("all-games-text10")}
            </button>
          )}
        </div>
      </div>
      <PurchasesModal
        isOpen={isOpenBuy}
        onClose={closeModal}
        selectedPurchase={buyCode}
      />
    </div>
  );
}
