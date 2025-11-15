import NavBar from "./components/nav/NavBar";
import Hero from "./components/home/Hero";
import Usage from "./components/home/Usage";
import FAQ from "./components/home/Faq";
import InstructionsSection from "./components/home/InstructionsSection";
import Cta from "./components/home/Cta";
import Footer from "./components/home/Footer";
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
