import HeaderGames from "@/components/allGames/HeaderGames";
import AllGames from "@/components/allGames/AllGames";

export const metadata = {
  title: "Uzpin - promo codes for the game",
  description:
    "Promo codes for PUBG Mobile Legends, Free Fire, Steam and many other games and apps",
  openGraph: {
    title: "Uzpin - promo codes for the game",
    description:
      "Promo codes for PUBG Mobile Legends, Free Fire, Steam and many other games and apps",
    url: "https://uzpin.games",
    images: [
      {
        url: "/favicon.ico",
        width: 300,
        height: 300,
        alt: "Uzpin Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzpin - promo codes for the game",
    description:
      "Promo codes for PUBG Mobile Legends, Free Fire, Steam and many other games and apps",
    images: ["/favicon.ico"],
  },
};

export default function AllGamesPage() {
  return (
    <div>
      <HeaderGames />
      <AllGames />
    </div>
  );
}
