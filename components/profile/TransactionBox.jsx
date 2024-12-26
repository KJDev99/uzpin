"use client";

import React, { useState } from "react";
import TransactionModal from "./TransactionModal";

export default function TransactionBox() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tranzaksiyalar</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-[#ACACAC] border-collapse rounded-lg ">
          <thead className="bg-[#F9F9F9]">
            <tr className="text-left border border-[#ACACAC] ">
              <th className="py-3 text-center font-medium border border-[#ACACAC]">
                Amaliyot
              </th>
              <th className="py-3 text-center font-medium border border-[#ACACAC]">
                Summa
              </th>
              <th className="py-3 text-center font-medium border border-[#ACACAC]">
                Valyuta
              </th>
              <th className="py-3 text-center font-medium border border-[#ACACAC]">
                Chek
              </th>
              <th className="py-3 text-center font-medium border border-[#ACACAC]">
                Sana
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                action: "Hisob to'ldirildi",
                amount: "1 000",
                currency: "USD",
                hasCheck: true,
                date: "2024-01-24 14:03:25",
                status: "success",
              },
              {
                action: "Sotib olindi",
                amount: "16 000",
                currency: "UZS",
                hasCheck: false,
                date: "2024-1-24 14:03:25",
                status: "warning",
              },
              {
                action: "Hisob to'ldirildi",
                amount: "100 000",
                currency: "UZS",
                hasCheck: true,
                date: "2024-11-3 14:03:25",
                status: "success",
              },
              {
                action: "Bekor qilindi",
                amount: "100 000",
                currency: "USD",
                hasCheck: true,
                date: "2024-11-24 14:03:25",
                status: "error",
              },
              {
                action: "Sotib olindi",
                amount: "16 000",
                currency: "UZS",
                hasCheck: false,
                date: "2024-05-11 14:03:25",
                status: "warning",
              },
              {
                action: "Sotib olindi",
                amount: "16 000",
                currency: "USD",
                hasCheck: false,
                date: "2024-11-24 14:03:25",
                status: "warning",
              },
              {
                action: "Hisob to'ldirildi",
                amount: "1 000",
                currency: "USD",
                hasCheck: true,
                date: "2024-2-19 14:03:25",
                status: "success",
              },
              {
                action: "Hisob to'ldirildi",
                amount: "100 000",
                currency: "UZS",
                hasCheck: true,
                date: "2024-11-24 14:03:25",
                status: "success",
              },
            ].map((item, index) => (
              <tr
                key={index}
                className="border border-[#ACACAC] hover:bg-gray-50"
              >
                <td className="py-3 text-center border border-[#ACACAC]">
                  <span
                    className={`${
                      item.status === "success" && "text-green-600"
                    } ${item.status === "warning" && "text-orange-600"} ${
                      item.status === "error" && "text-red-600"
                    }`}
                  >
                    {item.action}
                  </span>
                </td>
                <td className="py-3 text-center border border-[#ACACAC]">
                  {item.amount}
                </td>
                <td className="py-3 text-center border border-[#ACACAC]">
                  {item.currency}
                </td>
                <td className="py-3 text-center flex justify-center">
                  {item.hasCheck && (
                    <svg
                      onClick={openModal}
                      className="w-5 h-5 text-gray-400 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </td>
                <td className="py-3 text-center border border-[#ACACAC]">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TransactionModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}
