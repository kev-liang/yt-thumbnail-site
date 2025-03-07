// pages/_app.tsx
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS and apply MUI baseline styles */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
