import { DynamicFeed, Home, Search, Tv } from "@mui/icons-material";
import { Box, Grid2, Typography } from "@mui/material";
import UsageCard from "./UsageCard";
import { useTheme } from "@emotion/react";

const usageCards = [
  {
    title: "Home Page",
    icon: <Home sx={{ height: 100, width: 100 }} />,
  },
  {
    title: "Recommended Feed",
    icon: <DynamicFeed sx={{ height: 100, width: 100 }} />,
  },
  {
    title: "Channel Page",
    icon: <Tv sx={{ height: 100, width: 100 }} />,
  },
  {
    title: "Search Page",
    icon: <Search sx={{ height: 100, width: 100 }} />,
  },
];

const Usage = () => {
  return (
    <Box component="section" sx={{ backgroundColor: "grey.200", mt: 8, p: 5 }}>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 8 }}
      >
        Swap your thumbnail and title all over Youtube
      </Typography>
      <Grid2 container alignItems="center" marginX={{ lg: 10, md: 0, sm: 0 }}>
        {usageCards.map((usageCard) => (
          <Grid2 size={{ sm: 12, md: 6, lg: 3 }} key={usageCard.title}>
            <UsageCard
              title={usageCard.title}
              icon={usageCard.icon}
              key={usageCard.title}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Usage;
