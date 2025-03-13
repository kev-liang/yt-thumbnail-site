import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "common.black", color: "common.white", p: 3 }}
    >
      <Typography>Youtube Thumbnail Swapper © 2025</Typography>
    </Box>
  );
};

export default Footer;
