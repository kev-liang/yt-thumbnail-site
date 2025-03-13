import { ChromeReaderMode } from "@mui/icons-material";
import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import Image from "next/image";
import chromeLogo from "../../../public/googlechrome.svg";

const Hero = () => {
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
            directly on Youtube
          </Typography>
        </Typography>
        <Typography variant="h2" marginTop={2}>
          Optimize your your thumbnail and title with instant, side-by-side
          comparisons.
        </Typography>
        <Button
          variant="contained"
          sx={{ color: "white", py: 1, px: 5, mt: 4, borderRadius: "50px" }}
          startIcon={
            <Image
              src={chromeLogo}
              alt="chrome-logo"
              style={{ filter: "invert(100%)" }} // white stroke
            />
          }
        >
          <Typography variant="h3" marginLeft={1}>
            Install Chrome Extension
          </Typography>
        </Button>
      </Container>
    </>
  );
};

export default Hero;
