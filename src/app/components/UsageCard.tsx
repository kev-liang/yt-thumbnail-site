import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

const UsageCard = ({
  title,
  icon,
}: Readonly<{ title: string; icon: ReactNode }>) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          p: 3,
          width: "250px",
          height: "250px",
          borderRadius: 8,
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius={50}
        >
          {icon}
          <Typography variant="h3" marginTop={2}>
            {title}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default UsageCard;
