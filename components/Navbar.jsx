"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, User } from "lucide-react";
import SearchModal from "./searchModal/SearchModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-[100px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="target icon"
              width={150}
              height={24}
              className="ml-1 mr-20 max-sm:max-w-[108px] max-sm:max-h-[20px]"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className="text-white hover:text-[#FDB000] transition-colors"
            >
              Asosiy
            </Link>
            <Link
              href="/all-games"
              className="text-gray-300 hover:text-[#FDB000] transition-colors"
            >
              Barcha o&apos;yinlar
            </Link>
            <Link
              href="/help-me"
              className="text-gray-300 hover:text-[#FDB000] transition-colors"
            >
              Yordam
            </Link>
          </div>

          <div className="flex-1 max-w-lg mx-5 max-sm:flex justify-end">
            <div className="relative max-sm:hidden">
              <input
                type="text"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-md py-2 pl-4 pr-10 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#FDB000]"
                placeholder="Qidirish..."
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white px-4 py-2 sm:hidden"
            >
              <Search className="h-6 w-6" />
            </button>
            <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>

          <div className="flex items-center space-x-10 max-sm:space-x-0">
            {/* <button className="text-gray-300 hover:text-[#FDB000] transition-colors">
              <Heart className="h-6 w-6" />
            </button> */}
            <Link href={"/login"}>
              <button className="max-md:hidden text-gray-300 hover:text-[#FDB000] transition-colors flex gap-2 border border-[#ACACAC] rounded px-4 py-2">
                <User className="h-5 w-[28px]" />
                <p>Kirish</p>
              </button>
            </Link>
            <button className="flex items-center">
              <Image
                src="/flaguz.png"
                alt="Uzbekistan flag"
                width={24}
                height={24}
                className=""
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
