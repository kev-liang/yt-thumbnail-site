import type { Metadata } from "next";
import { Inter, Inria_Serif } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/styles/theme";
import { CssBaseline } from "@mui/material";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-inter",
});

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria-serif",
});

export const metadata: Metadata = {
  title: "Youtube Thumbnail Swapper",
  description: "Swap your thumbnail directly on Youtube",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className={`${inter.className}`}>
    <html lang="en" className={`${inter.variable} ${inriaSerif.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
