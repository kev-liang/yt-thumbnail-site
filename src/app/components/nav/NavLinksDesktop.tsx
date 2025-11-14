"use client";

import { Button } from "@mui/material";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
];

export const NavLinksDesktop = () => {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          style={{ textDecoration: "none" }}
        >
          <Button
            sx={{
              color: "text.primary",
              fontWeight: "medium",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </>
  );
};
