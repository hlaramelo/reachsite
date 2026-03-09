import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import TrackRecord from "@/components/sections/TrackRecord";
import FundsPreview from "@/components/sections/FundsPreview";
import TeamPreview from "@/components/sections/TeamPreview";
import PortfolioCompanies from "@/components/sections/PortfolioCompanies";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <TrackRecord />
      <FundsPreview />
      <TeamPreview />
      <PortfolioCompanies />
      <CTASection />
    </>
  );
}
