"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { GoTrash } from "react-icons/go";
import { PurchaseModal } from "./PurchaseModal";
import { Alert } from "../Alert";
import axiosInstance from "@/libs/axios";
import Loader from "../Loader";
import { useTranslation } from "react-i18next";

export default function GameStore({ data }) {
  const { t } = useTranslation();
  const [cart, setCart] = useState([]);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  // const [showModalMessage, setShowModalMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState([]);

  const fetchStats = async () => {
    setLoading(true);
    if (data.id) {
      try {
        const response = await axiosInstance.get(
          `/client/promocodes/${data.id}`
        );
        setCode(response.data || []);
      } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    fetchStats();
  }, [data]);

  const updateQuantity = (packageId, increment) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === packageId);
      if (!existingItem) {
        if (!increment) return prevCart;
        const newItem = {
          ...code.find((p) => p.id === packageId),
          quantity: 1,
        };
        return [...prevCart, newItem];
      }

      if (increment) {
        return prevCart.map((item) =>
          item.id === packageId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        if (existingItem.quantity === 1) {
          return prevCart.filter((item) => item.id !== packageId);
        }
        return prevCart.map((item) =>
          item.id === packageId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const getQuantity = (packageId) => {
    return cart.find((item) => item.id === packageId)?.quantity || 0;
  };

  const totalUC = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const ClearTash = () => {
    setCart([]);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div
        className="game_bg"
        style={{
          backgroundImage: `url(${data.cover})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="max-w-[1200px] border-b border-[#828282] mx-auto font-sans max-sm:px-4 max-sm:py-5">
        <div className="grid grid-cols-5">
          <h1 className="col-span-5 text-3xl font-bold mt-10 mb-5 ml-[40px] max-sm:hidden">
            {data.name}
          </h1>
          <p className="col-span-5 mb-2 text-2xl font-medium text-[#313131] max-sm:text-xl max-sm:text-[#000000] max-sm:mb-[10px]">
            {data.name} {t("all-games-text1")}
          </p>
          <p className="col-span-3 text-lg text-[#313131] mb-[10px] max-sm:text-sm max-sm:col-span-5">
            {t("all-games-text2")} {data.name} {t("all-games-text3")}
          </p>
          <p className="col-span-3 text text-[#313131] mb-10 flex justify-center items-start gap-[10px] max-sm:col-span-5 max-sm:text-sm max-sm:leading-[14px]">
            <Image
              src="/Info.svg"
              alt="info"
              width={16}
              height={16}
              className="mt-1"
            />
            {t('all-games-text4')}
          </p>
        </div>
        <div className="grid grid-cols-5 gap-[50px] mb-[40px]">
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-sm:grid-cols-2 max-sm:col-span-5 max-sm:gap-2">
            {code.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-lg p-4 border hover:border-[#FFBA00] transition-all ease-linear bg-white max-sm:p-0 h-max"
              >
                <div className="flex flex-col max-sm:px-[10px] max-sm:pb-[10px] max-sm:pt-5">
                  {pkg.photo ? (
                    <Image
                      src={pkg.photo}
                      alt={`${pkg.name} UC`}
                      width={190}
                      height={190}
                      className="mb-4 w-full max-sm:w-[126px] h-[190px] max-sm:h-[126px] max-sm:mx-auto"
                    />
                  ) : (
                    <Image
                      src="/uccard.png"
                      alt={`${pkg.name} UC`}
                      width={190}
                      height={190}
                      className="mb-4 w-full max-sm:w-[126px] max-sm:h-[126px] max-sm:mx-auto"
                    />
                  )}
                  <h3 className="text-xl font-bold mb-2 max-sm:font-medium max-sm:text-sm">
                    {pkg.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-[#313131] text-sm mb-4 max-sm:text-xs max-sm:leading-[14px]">
                      {pkg.price.toLocaleString()} UZS
                    </p>
                    <p className="text-[#828282] text-xs mb-4 max-sm:text-[10px] max-sm:leading-[11px]">
                    {t('all-games-text5')} {pkg.count}
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <button
                      className={`px-2 py-1 text-[28px] max-sm:p-0 ${
                        getQuantity(pkg.id) === 0
                          ? "opacity-40 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => updateQuantity(pkg.id, false)}
                      disabled={getQuantity(pkg.id) === 0}
                    >
                      -
                    </button>
                    <span className="px-[45px] py-2 border rounded-[10px] bg-[#F4F4F4] border-t-[#ACACAC] text-lg max-sm:py-[7px] max-sm:px-[35px]">
                      {getQuantity(pkg.id)}
                    </span>
                    <button
                      className={`px-2 py-1 text-[28px] max-sm:p-0 ${
                        getQuantity(pkg.id) >= pkg.count
                          ? "opacity-40 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => updateQuantity(pkg.id, true)}
                      disabled={getQuantity(pkg.id) >= pkg.count}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`col-span-2 bg-[#F9F9F9] rounded-lg shadow-lg p-6 h-max max-sm:fixed bottom-[110px] left-0 right-0 w-[90%] mx-auto max-sm:col-span-5 max-sm:${
              cart.length > 0 ? "block" : "hidden"
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium">{t('all-games-text6')}</h2>
              <div className="flex cursor-pointer" onClick={() => ClearTash()}>
                <p className="text-[#828282] flex gap-[10px] items-center max-sm:text-sm max-sm:leading-4">
                  <GoTrash />
                  {t('all-games-text7')}
                </p>
              </div>
            </div>
            {cart.length > 0 ? (
              <>
                <div className="mt-2 mb-8">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center bg-[#F4F4F4] py-3 px-5 rounded-[10px] shadow-lg mt-4 max-sm:hidden"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src="/uccard.png"
                          alt={`${item.name} UC`}
                          width={40}
                          height={40}
                        />
                        <span>{item.name}</span>
                      </div>
                      <span>
                        {(item.price * item.quantity).toLocaleString()} UZS
                      </span>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex flex-col">
                      <span className="max-sm:hidden">{t('all-games-text8')}</span>
                      <div className="flex justify-between font-bold max-sm:font-medium max-sm:leading-[18px]">
                        <div className="sm:hidden">{t('all-games-text9')}</div>
                        <div>{totalPrice.toLocaleString()} UZS</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-2 max-sm:flex max-sm:items-center max-sm:gap-5 max-sm:mt-[11px] max-sm:space-y-0">
                  <button
                    onClick={() => setShowPurchaseModal(1)}
                    className="w-full py-2 bg-[#FFBA00] rounded text-black font-medium mb-[10px] border-b-2 border-[black] max-sm:m-0"
                  >
                    {t('all-games-text10')}
                  </button>
                  <button
                    onClick={() => setShowPurchaseModal(2)}
                    className="w-full py-2 bg-[#FFBA00] rounded text-black font-medium border-b-2 border-[black]"
                  >
                    {t('all-games-text11')}
                  </button>
                </div>
              </>
            ) : (
              <div
                className={`w-full flex mt-[60px] mb-[110px] justify-center max-sm:${
                  cart.length > 0 ? "flex" : "hidden"
                }`}
              >
                <Image src="/nocard.svg" alt="Clear" width={98} height={89} />
              </div>
            )}
          </div>
        </div>

        {showPurchaseModal && (
          <PurchaseModal
            isOpen={showPurchaseModal}
            onClose={() => setShowPurchaseModal(false)}
            cart={cart}
            totalUC={totalUC}
            totalPrice={totalPrice}
            clear={() => ClearTash()}
          />
        )}
      </div>
    </>
  );
}
