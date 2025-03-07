"use client";

import Menu from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton>
            <Menu />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>
            Youtube Thumbnail Swapper
          </Typography>
          <Box>
            <Link href="/">How to Use</Link>
            <Link href="/">FAQ</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
