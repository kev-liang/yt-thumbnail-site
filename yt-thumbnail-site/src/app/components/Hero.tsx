import { Box, Button, Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="h1">
          Compare your thumbnail and title to others{" "}
          <Typography
            component="span"
            sx={{
              color: "primary.main",
              fontSize: "inherit",
              fontWeight: "inherit",
            }}
          >
            directly on Youtube
          </Typography>
        </Typography>
        <Typography variant="h3">
          Optimize your your thumbnail and title with instant, side-by-side
          comparisons.
        </Typography>
        <Button
          variant="contained"
          sx={{ color: "white", px: 5, mt: 4, borderRadius: "50px" }}
        >
          <Typography variant="h3">Install Chrome Extension</Typography>
        </Button>
      </Container>
    </>
  );
};

export default Hero;
