import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

const UsageCard = ({
  title,
  icon,
  label,
}: Readonly<{ title: string; icon: ReactNode; label: string }>) => {
  return (
    <Card
      sx={{
        width: 250,
        height: 325,
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        borderRadius: 10,
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          height: "33%",
          width: "100%",
          position: "absolute",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "33%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "grey.200",
          width: 120,
          height: 120,
          boxShadow: 1,
          color: "common.black",
        }}
      >
        {icon}
      </Box>
      <Box sx={{ position: "absolute", top: "50%", p: 3, textAlign: "center" }}>
        <Typography
          variant="h3"
          component="div"
          sx={{ mt: 1, fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography component="div" sx={{ mt: 1 }}>
          {label}
        </Typography>
      </Box>
    </Card>
  );
};

export default UsageCard;
