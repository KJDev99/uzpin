import BestSales from "@/components/hero/BestSales";
import FreeFireBanner from "@/components/hero/FreeFireBanner";
import HeaderSlider from "@/components/hero/HeaderSlider";
import PubgBanner from "@/components/hero/PubgBanner";
import TopGameCards from "@/components/hero/TopGameCard";
import TopGiftCard from "@/components/hero/TopGIftCard";

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

export default function Home() {
  return (
    <div>
      <div className="hero_bg">
        <HeaderSlider />
        <TopGameCards />
      </div>
      <PubgBanner />
      {/* <div className="hero_bgsec2">
        <TopGiftCard />
      </div> */}
      {/* <FreeFireBanner /> */}
      <div className="hero_bgsec3">
        <BestSales />
      </div>
    </div>
  );
}
