import Image from "next/image";
import HeroSection from "./src/components/HeroSection";
import Navbar from "./src/components/Navbar";
import AboutSection from "./src/components/AboutSection";
import ProjectsSection from "./src/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
