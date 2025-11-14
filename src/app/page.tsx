import NavBar from "./components/nav/NavBar";
import Hero from "./components/Hero";
import Usage from "./components/Usage";
import FAQ from "./components/Faq";
import InstructionsSection from "./components/InstructionsSection";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Usage />
        <InstructionsSection />
        <Cta />
        <FAQ />
      </main>
    </>
  );
}
