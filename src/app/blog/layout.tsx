"use client";

import { Container } from "@mui/material";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4 } }}>
        {children}
      </Container>
    </>
  );
}
