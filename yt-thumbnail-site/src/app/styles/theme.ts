"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: "64px",
      fontWeight: "bold",
    },
  },
  palette: {
    text: {
      primary: "#f00",
    },
  },
});

export default theme;
