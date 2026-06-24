import HeroSection from "@/components/HeroSection";
import ScrollyTellingSection from "@/components/ScrollyTellingSection";
import FooterCTA from "@/components/FooterCTA";
import ProjectsSection from "@/components/ProjectsSection";
import ImageSequenceCanvas from "@/components/ImageSequenceCanvas";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <div className="fixed inset-0 pointer-events-none z-0">
        <ImageSequenceCanvas />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <ScrollyTellingSection />
        <ProjectsSection />
        <FooterCTA />
      </div>
    </main>
  );
}
