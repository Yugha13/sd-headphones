import HeroSection from "@/components/HeroSection";
import ScrollyTellingSection from "@/components/ScrollyTellingSection";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <HeroSection />
      <ScrollyTellingSection />
      <FooterCTA />
    </main>
  );
}
