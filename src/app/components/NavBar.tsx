"use client";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const NavBar = () => {
  return (
    <Box component="section" sx={{ display: "flex" }}>
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
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <Image
              src="/logo.png"
              alt="youtube-thumbnail-swapper-logo"
              width={40}
              height={30}
            />
            <Typography
              sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "20px" }}
            >
              Youtube Thumbnail Swapper
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
