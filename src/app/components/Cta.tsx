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
          backgroundColor: "grey.800",
          color: "common.white",
          borderRadius: 10,
        }}
      >
        <Typography variant="h2" textAlign="center" fontWeight="bold">
          See how you measure up against the competition
        </Typography>
        <Box sx={{ maxWidth: "80ch" }}>
          <Typography variant="h4" marginTop={4}>
            Whether it be on the home page or directly to another Youtuber’s
            channel, you can see if your ideas stand out. Give your video the
            click-through-rate it deserves.
          </Typography>
          <Typography variant="h4" marginTop={2}>
            Preview your thumbnail and title just like they appear on YouTube.
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
            <Typography fontWeight="bold">Install Chrome Extension</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cta;
