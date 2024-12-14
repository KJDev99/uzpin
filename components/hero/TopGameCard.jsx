import Image from "next/image";

const games = [
  {
    title: "Mobile Legends",
    image: "/img.png",
    link: "#",
  },
  {
    title: "PUBG Mobile",
    image: "/img.png",
    link: "#",
  },
  {
    title: "STEAM",
    image: "/img.png",
    link: "#",
  },
  {
    title: "Free Fire",
    image: "/img.png",
    link: "#",
  },
  {
    title: "Mobile Legends",
    image: "/img.png",
    link: "#",
  },
  {
    title: "PUBG Mobile",
    image: "/img.png",
    link: "#",
  },
  {
    title: "STEAM",
    image: "/img.png",
    link: "#",
  },
  {
    title: "Free Fire",
    image: "/img.png",
    link: "#",
  },
];

export default function TopGameCards() {
  return (
    <div className="w-full px-0 py-6">
      <h2 className="text-2xl font-bold mb-4 text-white ml-[140px]">
        Ommabop o&apos;yinlar
      </h2>
      <div className="overflow-x-auto pb-6 pl-20">
        <div className="flex space-x-4 min-w-full  snap-mandatory">
          {games.map((game, indx) => (
            <div
              key={indx}
              className="flex-shrink-0 w-[300px] snap-center main_card"
            >
              <div className="p-4">
                <div className="relative aspect-square">
                  <Image
                    src={game.image}
                    alt={game.title}
                    className="object-cover rounded-t-lg"
                    width={280}
                    height={280}
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-xl text-white">
                    {game.title}
                  </h3>
                  <button className="w-full bg-[#FFBA00] text-black py-3 font-medium rounded-[10px] text-lg">
                    Ko&apos;proq ko&apos;rish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
