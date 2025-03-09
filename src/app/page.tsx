import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Usage from "./components/Usage";
import FAQ from "./components/Faq";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Usage />
      <FAQ />
    </main>
  );
}
