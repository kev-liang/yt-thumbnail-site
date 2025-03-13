import { Box, Button, Typography } from "@mui/material";

const Cta = () => {
  return (
    <Box component="section" paddingX={2}>
      <Box
        sx={{
          mt: 8,
          px: 8,
          py: 5,
          maxWidth: "1200px",
          mx: "auto",
          backgroundColor: "common.black",
          color: "common.white",
          borderRadius: 10,
        }}
      >
        <Typography variant="h2" textAlign="center" fontWeight="bold">
          See how you stack up to the competition
        </Typography>
        <Box sx={{ maxWidth: "100ch" }}>
          <Typography variant="h4" marginTop={4}>
            Whether it be on the home page or directly to another Youtuber’s
            channel, you can see if your ideas stand out more than the videos
            around them. Give your video the click-through-rate it deserves.
          </Typography>
          <Typography variant="h4" marginTop={2}>
            See your thumbnail and title exactly how viewers would on Youtube.
          </Typography>
          <Button
            sx={{
              backgroundColor: "common.white",
              color: "common.black",
              borderRadius: "50px",
              fontWeight: "bold",
              mt: 4,
              px: 5,
            }}
          >
            <Typography>Install Chrome Extension</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cta;
