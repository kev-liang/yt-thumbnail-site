import { Box, Typography, Paper } from "@mui/material";
import { ReactNode } from "react";

interface FigureProps {
  srcComponent: ReactNode;
  caption?: ReactNode;
  elevation?: number;
}

const Figure = ({ srcComponent, caption, elevation = 2 }: FigureProps) => (
  <Box
    component="figure"
    sx={{
      my: 3,
      textAlign: "center",
      mx: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Paper
      elevation={elevation}
      sx={{
        p: 1,
        borderRadius: "4px",
        overflow: "hidden",
        display: "inline-block",
        maxWidth: "100%",
      }}
    >
      {srcComponent}
    </Paper>
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
