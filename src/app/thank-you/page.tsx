"use client";

import { Box, Button, Paper, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import { CheckCircle } from "@mui/icons-material";

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
            <CheckCircle sx={{ height: 96, width: 96 }} color="primary" />
            <Typography variant="h1" mt={10}>
              Thank you for subscribing!
            </Typography>
            <Typography variant="h3" mt={2}>
              Enjoy unlimited uploads and swaps with Youtube Thumbnail Swapper
            </Typography>

            <Box mt={10}>
              <Button
                onClick={() => window.open("https://www.youtube.com", "_blank")}
                variant="contained"
                sx={{
                  color: "white",
                  py: 1,
                  px: 5,
                  mt: 4,
                  borderRadius: "50px",
                }}
              >
                <Typography variant="h3" marginLeft={1}>
                  Start Swapping on Youtube
                </Typography>
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
