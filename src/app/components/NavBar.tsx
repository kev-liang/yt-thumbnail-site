"use client";

import Menu from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

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
          px: { sm: 0, md: 5, lg: 20 },
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Image
            src={logo}
            alt="youtube-thumbnail-swapper-logo"
            style={{ height: "30px", width: "40px" }}
          />
          <Typography sx={{ flexGrow: 1 }}>
            Youtube Thumbnail Swapper
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
