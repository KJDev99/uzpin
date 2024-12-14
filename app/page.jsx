import BestSales from "@/components/hero/BestSales";
import HeaderSlider from "@/components/hero/HeaderSlider";
import PubgBanner from "@/components/hero/PubgBanner";
import TopGameCards from "@/components/hero/TopGameCard";
import TopGiftCard from "@/components/hero/TopGIftCard";

export const metadata = {
  title: "Home Page",
  description: "Game PromoCode",
};

export default function Home() {
  return (
    <div>
      <div className="hero_bg">
        <HeaderSlider />
        <TopGameCards />
      </div>
      <PubgBanner />
      <div className="hero_bgsec2">
        <TopGiftCard />
      </div>
      <PubgBanner />
      <div className="hero_bgsec3">
        <BestSales />
      </div>
    </div>
  );
}
