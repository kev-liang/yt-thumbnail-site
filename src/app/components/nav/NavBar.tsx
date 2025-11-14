"use client";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { NavLinksDesktop } from "./NavLinksDesktop";
import NavDrawer from "@/app/components/nav/NavDrawer";

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
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <Image
              src="/logo.png"
              alt="youtube-thumbnail-swapper-logo"
              width={28}
              height={22}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "text.primary",
                display: { xs: "none", sm: "block" },
              }}
            >
              Thumbnail Swapper
            </Typography>
          </Link>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { sm: 3 },
              alignItems: "center",
            }}
          >
            <NavLinksDesktop />
          </Box>

          <NavDrawer />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
