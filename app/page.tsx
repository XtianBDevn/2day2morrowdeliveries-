import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CoverageMap from "@/components/sections/CoverageMap";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <CoverageMap />
    </main>
  );
}
