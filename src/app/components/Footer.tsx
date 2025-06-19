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
      }}
    >
      <Typography>Youtube Thumbnail Swapper © 2025</Typography>
      <Box sx={{ display: "flex", gap: 3 }}>
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
