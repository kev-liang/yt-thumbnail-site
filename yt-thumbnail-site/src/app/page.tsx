import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import { Typography } from "@mui/material";
import Hero from "./components/Hero";
import Usage from "./components/Usage";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Usage />
    </main>
  );
}
