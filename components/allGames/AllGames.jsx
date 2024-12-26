"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Loader from "../Loader";
import axiosInstance from "@/libs/axios";

export default function AllGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axiosInstance.get("/client/games");
        setGames(response.data);
      } catch (err) {
        setError("Ma'lumotlarni olishda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-sm:grid-cols-2 gap-10 p-5 rounded-lg game__content_bg md:px-[120px] pb-[100px] pt-[30px] max-sm:pt-6 max-sm:pb-4 max-sm:px-4 max-sm:gap-4">
      {games.map((game) => (
        <div
          key={game.id}
          className="overflow-hidden hover:shadow-lg transition-shadow duration-200 bg-white rounded-lg max-sm:rounded-[10px] max-sm:max-w-[166px] max-md:mx-auto"
        >
          <Link href={`/all-games/${game.id}`} className="p-0">
            <div className="flex items-start gap-4 p-4 h-max max-sm:flex-col max-sm:p-[10px] max-sm:gap-[10px]">
              <div className="relative rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={game.photo}
                  alt={game.name}
                  width={200}
                  height={200}
                  className="object-cover w-[200px] h-[200px] max-sm:w-[146px] max-sm:h-[126px]"
                />
              </div>
              <div className="flex flex-col w-full h-[200px] max-sm:h-auto">
                <h3 className="text-[28px] text-[#313131] font-bold max-sm:font-medium max-sm:text-sm grow">
                  {game.name}
                </h3>
                <div>
                  <button className="w-full px-4 py-3 text-[#acacac] hover:text-[#ffba00] transition-colors duration-200 flex items-center justify-end group max-sm:hidden">
                    <span>Ko&apos;proq ko&apos;rish</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <button className="max-w-[146px] w-full mt-[18px] rounded-[5px] py-2 bg-[#ffba00] font-medium text-xs sm:hidden">
                    <span>Ko&apos;proq ko&apos;rish</span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
