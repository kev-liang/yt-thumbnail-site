import { Box, Typography } from "@mui/material";
import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

interface FigureProps {
  src: ImageProps["src"];
  alt: string;
  caption?: ReactNode;
  width?: number;
  height?: number;
}

const Figure = ({
  src,
  alt,
  caption,
  width = 800,
  height = 400,
}: FigureProps) => (
  <Box component="figure" sx={{ my: 3, textAlign: "center", mx: 0 }}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        maxWidth: "100%",
        height: "auto",
        borderRadius: "4px",
      }}
    />
    {caption && (
      <Typography
        component="figcaption"
        variant="body2"
        sx={{ mt: 1, color: "text.secondary" }}
      >
        {caption}
      </Typography>
    )}
  </Box>
);

export default Figure;
