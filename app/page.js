import Image from "next/image";
import HeroSection from "./src/components/HeroSection";
import Navbar from "./src/components/Navbar";
import AboutSection from "./src/components/AboutSection";
import ProjectsSection from "./src/components/ProjectsSection";
import Footer from "./src/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class='container mt-24 mx-auto px-12 py-4'>

        <HeroSection />

        <section id="about">
          <AboutSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>

      </div>
        <Footer />
    </main>
  );
}
