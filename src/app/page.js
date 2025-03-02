import BottomInfoCardSection from "@/components/sections/BottomInfoCardSection";
import MidInfoSection from "@/components/sections/MidInfoSection";
import PricingSection from "@/components/sections/PricingSection";
import TopHero from "@/components/sections/TopHero";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";

export default function Home() {
  return (
    <>
      <TopHero />
      <MidInfoSection />
      <BottomInfoCardSection />
      <PricingSection />
    </>
  );
}
