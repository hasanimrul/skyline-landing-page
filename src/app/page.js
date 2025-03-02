import MidInfoCardSection from "@/components/sections/MidInfoCardSection";
import MidInfoSection from "@/components/sections/MidInfoSection";
import PricingSection from "@/components/sections/PricingSection";
import TopHero from "@/components/sections/TopHero";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <>
      <TopHero />
      <MidInfoSection />
      <MidInfoCardSection />
      <PricingSection />
    </>
  );
}
