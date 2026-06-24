import PrismaHero from "@/components/prisma/PrismaHero";
import PrismaAbout from "@/components/prisma/PrismaAbout";
import PrismaFeatures from "@/components/prisma/PrismaFeatures";

export default function Home() {
  return (
    <main className="bg-black w-full min-h-screen text-white overflow-x-hidden">
      <PrismaHero />
      <PrismaAbout />
      <PrismaFeatures />
    </main>
  );
}
