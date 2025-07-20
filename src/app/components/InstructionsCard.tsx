import { Box, Grid2, Typography } from "@mui/material";
import { ReactNode } from "react";

const InstructionsCard = ({
  stepNum,
  desc,
  pic,
}: Readonly<{ stepNum: number; desc: string; pic: ReactNode }>) => {
  return (
    <Box
      sx={{ backgroundColor: "grey.200", height: "100%", p: { xs: 2, lg: 6 } }}
    >
      <Grid2 container spacing={1} justifyContent="space-between">
        <Grid2 size={4}>
          <Typography
            fontFamily="var(--font-inria-serif)"
            fontWeight="bold"
            variant="h2"
          >
            {stepNum}.
          </Typography>
          <Typography variant="h3" marginTop={5}>
            {desc}
          </Typography>
          {/* </Box> */}
        </Grid2>

        <Grid2
          size={8}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {pic}
        </Grid2>
      </Grid2>
    </Box>
  );
};
export default InstructionsCard;
