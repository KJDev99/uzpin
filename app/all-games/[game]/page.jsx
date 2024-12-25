"use client";
import GameInfo from "@/components/gameStoreBox/GameInfo";
import GameStore from "@/components/gameStoreBox/GameStore";
import axiosInstance from "@/libs/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GameDetails() {
  const [data, setData] = useState([]);

  const pathname = useParams();
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axiosInstance.get(
          `/client/games/${pathname.game}/detail`
        );
        setData(response.data || []);
        console.log(response.data);
      } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <div className="game__content_bg">
        <GameStore data={data} />
        <GameInfo data={data} />
      </div>
    </div>
  );
}
