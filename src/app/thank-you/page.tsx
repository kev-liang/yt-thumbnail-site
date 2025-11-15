"use client";

import { Box, Button, Paper, Typography } from "@mui/material";
import NavBar from "../components/nav/NavBar";
import { CheckCircle } from "@mui/icons-material";
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
        mb={8}
      >
        <Paper sx={{ py: 4, px: 8 }} elevation={9}>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="space-between"
          >
            <CheckCircle sx={{ height: 96, width: 96 }} color="primary" />
            <Typography variant="h1" mt={6} fontWeight="bold">
              Thank you for subscribing!
            </Typography>
            <Box width="50%" textAlign="left">
              <Typography variant="h4" mt={6}>
                Enjoy unlimited uploads and swaps with YouTube Thumbnail
                Swapper.
              </Typography>
              <Typography variant="h4" mt={2}>
                If your extension is still open, please refresh the page to
                access your new Pro account.
              </Typography>
              <Typography variant="h4" mt={2}>
                Contact support@thumbnailswapper.com if you have any questions
                or issues.
              </Typography>
            </Box>

            <Box mt={4}>
              <Button
                onClick={() => window.open("https://www.youtube.com", "_blank")}
                variant="contained"
                sx={{
                  color: "white",
                  py: 1,
                  px: 5,
                  borderRadius: "50px",
                }}
              >
                <Typography variant="h3" marginLeft={1}>
                  Start Swapping on YouTube
                </Typography>
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}
