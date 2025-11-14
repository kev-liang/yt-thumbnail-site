"use client";

import { Button, ListItem } from "@mui/material";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

interface NavLinksMobileProps {
  onItemClick?: () => void;
}

export const NavLinksMobile = ({ onItemClick }: NavLinksMobileProps) => {
  return (
    <>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <Link
            href={item.href}
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "100%",
            }}
            onClick={onItemClick}
          >
            <Button
              fullWidth
              sx={{
                justifyContent: "center",
                color: "text.primary",
                fontWeight: "medium",
                textTransform: "none",
                fontSize: "16px",
                py: 1.5,
              }}
            >
              {item.label}
            </Button>
          </Link>
        </ListItem>
      ))}
    </>
  );
};
