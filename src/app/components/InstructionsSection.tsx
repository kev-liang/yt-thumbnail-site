"use client";

import { Box, Grid2, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import upload from "@/assets/upload.jpg";
import title from "@/assets/title.jpg";
import select from "@/assets/select.jpg";
import InstructionsCard from "./InstructionsCard";

const ImageContainer = ({ pic }: { pic: StaticImageData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        minHeight: { xs: 200, md: 250 },
        backgroundImage: `url(${pic.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></Box>
  );
};

const InstructionsSection = () => {
  const removeVscElementSpace = () => {
    const vscElements = document.querySelectorAll(
      ".vsc-controller"
    ) as NodeListOf<HTMLElement>;
    vscElements.forEach((el) => (el.style.display = "none"));
  };
  const instructions = [
    {
      desc: "Upload your thumbnail",
      pic: <ImageContainer pic={upload} />,
    },
    {
      desc: "Select your thumbnail",
      pic: <ImageContainer pic={select} />,
    },
    {
      desc: "Add titles to your thumbnail",
      pic: <ImageContainer pic={title} />,
    },
    {
      desc: "Swap with any YouTube video",
      pic: (
        <video
          autoPlay
          loop
          muted
          style={{ maxWidth: "100%" }}
          onLoadedData={removeVscElementSpace}
        >
          <source src="/only-swap.webm" type="video/webm" />
          Your browser does not support HTML5 video.
        </video>
      ),
    },
  ];

  return (
    <Box
      component="section"
      id="instructions"
      sx={{ mt: 8, p: 5, maxWidth: "1600px", mx: "auto" }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 8 }}
      >
        Getting started in 4 easy steps
      </Typography>
      <Grid2 container spacing={4}>
        {instructions.map((instruction, instructionI) => (
          <Grid2
            size={{ xs: 12, sm: 6 }}
            key={instructionI}
            sx={{ width: "100%" }}
          >
            <InstructionsCard
              stepNum={instructionI + 1}
              desc={instruction.desc}
              pic={instruction.pic}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default InstructionsSection;
