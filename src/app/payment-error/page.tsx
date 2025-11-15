"use client";

import { Box, Paper, Typography } from "@mui/material";
import NavBar from "../components/nav/NavBar";
import { ErrorOutline } from "@mui/icons-material";
import Footer from "../components/home/Footer";

export default function ThankYouPage() {
  return (
    <>
      <NavBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 64px)"
      >
        <Paper sx={{ py: 4, px: 8 }} elevation={9}>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="space-between"
          >
            <ErrorOutline sx={{ height: 96, width: 96 }} color="error" />
            <Typography variant="h2" mt={4}>
              Error processing payment
            </Typography>
            <Typography variant="h4" mt={4}>
              Try again or contact{" "}
              <a
                style={{ textDecoration: "underline" }}
                href="mailto:support@youtubethumbnailswapper.com"
              >
                support@youtubethumbnailswapper.com
              </a>
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}
