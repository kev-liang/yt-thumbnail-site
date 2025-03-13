import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

const InstructionsCard = ({
  stepNum,
  desc,
  pic,
}: Readonly<{ stepNum: number; desc: string; pic: ReactNode }>) => {
  return (
    <Card
      sx={{ backgroundColor: "grey.200", height: "100%", p: { xs: 2, lg: 6 } }}
    >
      <Box display="flex" justifyContent="space-between" height="100%">
        <Box marginRight={{ xs: 1, md: 3 }}>
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
        </Box>
        <Box display="flex" alignItems="center">
          {pic}
        </Box>
      </Box>
    </Card>
  );
};
export default InstructionsCard;
