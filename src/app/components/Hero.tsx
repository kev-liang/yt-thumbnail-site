"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  const handleInstallChromeExtensionClick = () => {
    window.open(
      "https://chromewebstore.google.com/detail/thumbnail-swapper/pfdapjpaicgfhghbmjennmchbgabofnf?authuser=0&hl=en",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="h1">
          Compare your thumbnail and title
          <Box component="br" />
          to others{" "}
          <Typography
            component="span"
            variant="h1"
            sx={{
              color: "primary.main",
              fontSize: "inherit",
              fontWeight: "inherit",
            }}
          >
            directly on YouTube
          </Typography>
        </Typography>
        <Typography variant="h3" marginTop={2}>
          Optimize your your content with instant, side-by-side comparisons.
        </Typography>
        <Button
          onClick={handleInstallChromeExtensionClick}
          variant="contained"
          sx={{ color: "white", py: 1, px: 5, mt: 4, borderRadius: "50px" }}
          startIcon={
            <Image
              src="/googlechrome.svg"
              alt="chrome-logo"
              style={{ filter: "invert(100%)" }} // white stroke
              width={30}
              height={30}
            />
          }
        >
          <Typography variant="h3" marginLeft={1}>
            Install Chrome Extension
          </Typography>
        </Button>
        <Typography variant="h4" marginTop={2} color="grey.600">
          Start swapping for free, no sign up required
        </Typography>

        <video autoPlay loop muted style={{ maxWidth: "100%" }}>
          <source src="/main.webm" type="video/webm" />
          Your browser does not support HTML5 video.
        </video>
      </Container>
    </>
  );
};

export default Hero;
