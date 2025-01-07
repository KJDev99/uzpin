"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import axiosInstance from "@/libs/axios";
import { useTranslation } from "react-i18next";

export default function SearchComponent() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery.length > 2) {
        try {
          const response = await axiosInstance.get(
            `/client/games?search=${encodeURIComponent(searchQuery)}`
          );
          setResults(response.data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      } else {
        setResults([]);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchResults();
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleResultClick = (id) => {
    setResults("");
    setIsModalOpen(false);
    router.push(`/all-games/${id}`);
  };

  return (
    <div className="flex-1 max-w-lg mx-5 max-sm:flex justify-end">
      <div className="relative max-sm:hidden">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-800/50 border border-gray-700 rounded-md py-2 pl-4 pr-10 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#FDB000]"
          placeholder={t("search")}
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2">
          <Search className="h-5 w-5 text-gray-400" />
        </button>
        {results.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-gray-800 border border-gray-700 rounded-md mt-1 z-10">
            {results.map((result) => (
              <div
                key={result.id}
                onClick={() => handleResultClick(result.id)}
                className="px-4 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer"
              >
                {result.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-white px-4 py-2 sm:hidden"
      >
        <Search className="h-6 w-6" />
      </button>
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed top-[30px] max-w-[355px] mx-auto inset-0 bg-black bg-opacity-0 flex items-start justify-center z-50"
        >
          <div
            className="bg-white p-[6px] pr-5 rounded-lg w-96 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[46px] py-[13px] px-5 border border-gray-300 rounded-lg outline-none"
                placeholder={t("search")}
              />
              <Search className="w-6 h-6" />
            </div>
            {results.length > 0 && (
              <div className="mt-2">
                {results.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => handleResultClick(result.id)}
                    className="px-4 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer"
                  >
                    {result.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
