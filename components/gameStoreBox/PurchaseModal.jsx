"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";

export function PurchaseModal({
  isOpen,
  onClose,
  cart,
  totalUC,
  totalPrice,
  openModal,
}) {
  const [playerId, setPlayerId] = useState("");

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      open={isOpen}
    >
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-[white] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] max-sm:w-[95%] max-h-[95%] overflow-auto max-sm:rounded-lg">
        <div>
          <div className="flex items-center justify-center text-2xl font-semibold mt-[40px] max-sm:m-0 max-sm:justify-start max-sm:font-medium max-sm:text-xl">
            <div>Id orqali sotib olish</div>
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
                    <span className="font-normal">Jami:</span>
                    {totalUC.toLocaleString()} UC
                  </div>
                  <div>{totalPrice.toLocaleString()} UZS</div>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-8 max-sm:hidden">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-[#F4F4F4] py-3 px-5 rounded-[10px] shadow-lg mt-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={`${item.amount} UC`}
                      width={40}
                      height={40}
                    />
                    <span>{item.amount} UC</span>
                  </div>
                  <span>
                    {(item.price * item.quantity).toLocaleString()} UZS
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 flex justify-between items-center">
            <label
              htmlFor="playerId"
              className="text-lg font-semibold max-sm:font-normal max-sm:text-base"
            >
              O&apos;yinchi ID ni kiriting:
            </label>
            <input
              id="playerId"
              value={playerId}
              onChange={(e) => setPlayerId(e.target.value)}
              placeholder="ID kiriting"
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
              IDni saqlab qo’yish
            </label>
          </div>

          <button
            onClick={openModal}
            className="w-full py-2 bg-[#FFBA00] rounded text-black font-medium border-b-2 border-[black]"
          >
            Sotib olish
          </button>
        </div>
      </div>
    </div>
  );
}
