import { DynamicFeed, Home, Search, Tv } from "@mui/icons-material";
import { Box, Grid2, Typography } from "@mui/material";
import UsageCard from "./UsageCard";
import { useTheme } from "@emotion/react";

const usageCards = [
  {
    title: "Home Page",
    icon: <Home sx={{ height: 80, width: 80 }} />,
    label: "Capture the attention of viewers among top-performing content.",
  },
  {
    title: "Recommended",
    icon: <DynamicFeed sx={{ height: 80, width: 80 }} />,
    label: "Stand out from the other suggested videos.",
  },
  {
    title: "Channel Page",
    icon: <Tv sx={{ height: 80, width: 80 }} />,
    label: "Directly compare to your heroes or competitors.",
  },
  {
    title: "Search Page",
    icon: <Search sx={{ height: 80, width: 80 }} />,
    label: "Target SEO terms then compare among similar topics.",
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
      <Grid2 container alignItems="center" marginX={{ lg: 3, md: 10, sm: 0 }}>
        {usageCards.map((usageCard) => (
          <Grid2
            size={{ xs: 12, sm: 6, lg: 3 }}
            key={usageCard.title}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { md: 3, xs: 4 },
            }}
          >
            <UsageCard
              title={usageCard.title}
              icon={usageCard.icon}
              key={usageCard.title}
              label={usageCard.label}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Usage;
