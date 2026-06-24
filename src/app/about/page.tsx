import HeroSection from "@/components/HeroSection";
import ScrollyTellingSection from "@/components/ScrollyTellingSection";
import PortfolioFooter from "@/components/portfolio/PortfolioFooter";
import PortfolioSelectedWork from "@/components/portfolio/PortfolioSelectedWork";
import ImageSequenceCanvas from "@/components/ImageSequenceCanvas";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ImageSequenceCanvas />
        <div className="absolute inset-0 bg-black/40 md:bg-black/60" />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <ScrollyTellingSection />
        <PortfolioSelectedWork />
        <PortfolioFooter />
      </div>
    </main>
  );
}
