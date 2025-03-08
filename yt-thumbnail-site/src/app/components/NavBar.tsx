"use client";

import Menu from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box component="section" sx={{ display: "flex", mb: 8 }}>
      <AppBar
        component="nav"
        sx={{
          position: "static",
          backgroundColor: "inherit",
          boxShadow: "none",
          color: "text.primary",
          px: 50,
        }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Youtube Thumbnail Swapper
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
