import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Usage from "./components/Usage";
import FAQ from "./components/Faq";
import InstructionsSection from "./components/InstructionsSection";
import Cta from "./components/Cta";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Usage />
      <InstructionsSection />
      <Cta />
      <FAQ />
    </main>
  );
}
