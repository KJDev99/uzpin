import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const games = [
  {
    title: "Mobile Legends",
    image: "/img.png",
    currency: "Diamonds",
    range: "56 - 12 000",
  },
  {
    title: "PUBG",
    image: "/img.png",
    currency: "UC",
    range: "60 - 8 100",
  },
  {
    title: "STEAM",
    image: "/img.png",
    currency: "STEAM promokod",
    range: "5$ - 100$",
  },
  {
    title: "Free Fire",
    image: "/img.png",
    currency: "Diamonds",
    range: "100 - 2 000",
  },
  {
    title: "STEAM",
    image: "/img.png",
    currency: "STEAM promokod",
    range: "5$ - 100$",
  },
  {
    title: "STEAM",
    image: "/img.png",
    currency: "STEAM promokod",
    range: "5$ - 100$",
  },
];

export default function AllGames() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 rounded-lg game__content_bg md:px-[120px] pb-[100px] pt-[30px]">
      {games.map((game, index) => (
        <div
          key={index}
          className="overflow-hidden hover:shadow-lg transition-shadow duration-200 bg-white rounded-lg"
        >
          <div className="p-0">
            <div className="flex items-start gap-4 p-4 h-max">
              <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover w-[200px] h-[200px]"
                />
              </div>
              <div className="flex flex-col w-full h-[200px]">
                <h3 className="text-[28px] font-bold">{game.title}</h3>
                <p className="text-lg text-[#313131] mt-1 grow">
                  {game.range} {game.currency}
                </p>
                <Link href="/all-games/1">
                  <button className="w-full px-4 py-3 text-yellow-500 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-end group">
                    <span>Ko&apos;proq ko&apos;rish</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
