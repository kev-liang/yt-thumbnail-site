"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    common: {
      black: "#343D40",
    },
    text: {
      primary: "#343D40",
    },
    primary: {
      main: "#28ACFF",
    },
    grey: {
      100: "#F2F2F2",
      200: "#F5F6F8", // background grey
      600: "#707070",
      800: "#2E2E2E",
      900: "#0F0F0F",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    fontSize: 16,
    h1: {
      fontSize: "64px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "36px",
    },
    h3: {
      fontSize: "24px",
    },
    button: {
      textTransform: "none",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
