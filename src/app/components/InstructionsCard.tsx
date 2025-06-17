import { Box, Typography } from "@mui/material";
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          }}
        >
          {pic}
        </Box>
      </Box>
    </Box>
  );
};
export default InstructionsCard;
