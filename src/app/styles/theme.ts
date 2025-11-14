"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    common: {
      black: "#000",
    },
    text: {
      primary: "#000",
    },
    primary: {
      main: "#28ACFF",
    },
    grey: {
      100: "#F2F2F2",
      200: "#F5F6F8", // background grey
      400: "#999",
      600: "#707070",
      800: "#343D40",
    },
  },
  typography: {
    fontFamily: "var(--font-inter)",
    fontSize: 12,
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
    h4: {
      fontSize: "16px",
    },
    button: {
      textTransform: "none",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
