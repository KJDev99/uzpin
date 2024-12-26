"use client";

import React, { useState } from "react";
import PurchasesModal from "./PurchasesModal";

export default function PurchasesBox() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="w-full max-w-[1200px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Xaridlar tarixi</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white border">
          <thead>
            <tr className="text-left border">
              <th className="py-3 border text-center font-medium">
                &nbsp;&nbsp;&nbsp;
              </th>
              <th className="py-3 border text-center font-medium">Nomi</th>
              <th className="py-3 border text-center font-medium">Promokod</th>
              <th className="py-3 border text-center font-medium">
                To&apos;lov
              </th>
              <th className="py-3 border text-center font-medium">Sana</th>
              <th className="py-3 border text-center font-medium">
                Ko&apos;rish
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                name: "PUBG 60",
                code: 1,
                amount: "25 800 UZS",
                date: "10/12/2024 12:47:56",
              },
              {
                id: 2,
                name: "Free Fire 100+10",
                code: 2,
                amount: "64 000 UZS",
                date: "10/12/2024 12:47:56",
              },
              {
                id: 3,
                name: "PUBG 60",
                code: 1,
                amount: "16 000 UZS",
                date: "10/12/2024 12:47:56",
                hasId: true,
              },
              {
                id: 4,
                name: "PUBG 100",
                code: 1,
                amount: "51 000 UZS",
                date: "10/12/2024 12:47:56",
                hasId: true,
              },
              {
                id: 5,
                name: "Free Fire 100+10",
                code: 1,
                amount: "16 000 UZS",
                date: "10/12/2024 12:47:56",
              },
              {
                id: 6,
                name: "Free Fire 100+10",
                code: 3,
                amount: "16 000 UZS",
                date: "10/12/2024 12:47:56",
              },
              {
                id: 7,
                name: "Free Fire 100+10",
                code: 7,
                amount: "12 900 UZS",
                date: "10/12/2024 12:47:56",
              },
              {
                id: 8,
                name: "PUBG 6000",
                code: 1,
                amount: "90 300 UZS",
                date: "10/12/2024 12:47:56",
                hasId: true,
              },
              {
                id: 9,
                name: "Free Fire 100+10",
                code: 3,
                amount: "16 000 UZS",
                date: "10/12/2024 12:47:56",
              },
              {
                id: 10,
                name: "Free Fire 100+10",
                code: 2,
                amount: "16 000 UZS",
                date: "10/12/2024 12:47:56",
              },
            ].map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-3 border text-center text-sm">{item.id}</td>
                <td className="py-3 border text-center text-sm">{item.name}</td>
                <td className="py-3 border text-center text-sm">{item.code}</td>
                <td className="py-3 border text-center text-sm">
                  {item.amount}
                </td>
                <td className="py-3 border text-center text-sm">{item.date}</td>
                <td className="py-3 border text-center text-sm">
                  <div className="flex items-center justify-center gap-1">
                    {/* {item.hasId && (
                      <span className="text-sm text-gray-500">ID</span>
                    )} */}
                    <button onClick={openModal} className="text-green-600 hover:text-green-700 flex items-center gap-1">
                      Ko&apos;rish
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PurchasesModal isOpen={isOpen} onClose={closeModal}/>
      </div>

      {/* <div className="flex items-center justify-center gap-2 mt-4">
        <button className="p-2 rounded hover:bg-gray-100">
          <svg
            className="w-5 h-5 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        {[1, 2, 3, "...", 23, 24, 25].map((page, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${
              page === 1 ? "bg-yellow-400 text-white" : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="p-2 rounded hover:bg-gray-100">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
}
