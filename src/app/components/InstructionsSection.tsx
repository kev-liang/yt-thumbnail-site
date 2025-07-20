"use client";

import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import upload from "@/assets/upload.jpg";
import title from "@/assets/title.jpg";
import select from "@/assets/select.jpg";
import InstructionsCard from "./InstructionsCard";

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
      pic: (
        <Image
          src={upload}
          alt="upload-thumbnail"
          width={upload.width * 0.75}
          height={upload.height * 0.75}
        />
      ),
    },
    {
      desc: "Select your thumbnail",
      pic: (
        <Image
          src={select}
          alt="select-thumbnail"
          width={select.width * 0.75}
          height={select.height * 0.75}
        />
      ),
    },
    {
      desc: "Add titles to your thumbnail",
      pic: (
        <Image
          src={title}
          alt="title-thumbnail"
          width={title.width * 0.75}
          height={title.height * 0.75}
        />
      ),
    },
    {
      desc: "Swap with any YouTube video",
      pic: (
        <video
          autoPlay
          loop
          muted
          style={{ maxWidth: "100%" }}
          onCanPlayThrough={removeVscElementSpace}
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
          <Grid2 size={{ sm: 12, md: 6 }} key={instructionI}>
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
