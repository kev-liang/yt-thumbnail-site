import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Typography variant="h1">This should be Inter</Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2, // margin top
        }}
      >
        This should be Arial
      </Typography>
    </main>
  );
}
