import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioExperience from "@/components/portfolio/PortfolioExperience";
import PortfolioProjects from "@/components/portfolio/PortfolioProjects";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen text-white overflow-x-hidden relative">
      <PortfolioHero />
      <PortfolioExperience />
      <PortfolioProjects />
    </main>
  );
}
