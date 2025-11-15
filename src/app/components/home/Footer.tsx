import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "common.black",
        color: "common.white",
        p: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography>YouTube Thumbnail Swapper © 2025</Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { sm: "column", xs: "column", md: "row" },
        }}
      >
        <Link href="/" color="inherit">
          Home
        </Link>
        <Link href="/blog" color="inherit">
          Blog
        </Link>
        <Link href="/terms-of-service" color="inherit">
          Terms of Service
        </Link>
        <Link href="/privacy" color="inherit">
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
