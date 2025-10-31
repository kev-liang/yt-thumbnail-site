import { Box, Grid2, Typography } from "@mui/material";
import { ReactNode } from "react";

const InstructionsCard = ({
  stepNum,
  desc,
  pic,
}: Readonly<{
  stepNum: number;
  desc: string;
  pic: ReactNode;
}>) => {
  return (
    <Box
      sx={{
        backgroundColor: "grey.200",
        height: "100%",
        p: { xs: 2, lg: 6 },
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid2 container spacing={{ xs: 2, md: 3 }} alignItems="center">
        <Grid2 size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              fontFamily="var(--font-inria-serif)"
              fontWeight="bold"
              variant="h2"
            >
              {stepNum}.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                mt: { xs: 2, sm: 3, lg: 4 },
                mb: { xs: 3, md: 0 },
              }}
            >
              {desc}
            </Typography>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 2 }}>
          {pic}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default InstructionsCard;
