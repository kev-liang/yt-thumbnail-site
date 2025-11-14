import { NavLinksMobile } from "@/app/components/nav/NavLinksMobile";
import { Box, Typography, List, Drawer, IconButton, Menu } from "@mui/material";
import { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";

const NavDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Thumbnail Swapper
          </Typography>
          <List>
            <NavLinksMobile onItemClick={handleDrawerToggle} />
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavDrawer;
