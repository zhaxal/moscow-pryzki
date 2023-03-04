import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Header from "./ui/header";

const Festival = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/bg/festival.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: "888px",
        width: "100%",
        pt: "94px",
      }}
    >
      <Header text="фестиваль 2022" />
      <Container
        disableGutters
        sx={{
          mt: "90px",
        }}
        maxWidth={"md"}
      >
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
          frameBorder={"0px"}
          height="488px"
          width={"100%"}
        />
      </Container>
    </Box>
  );
};

export default Festival;
