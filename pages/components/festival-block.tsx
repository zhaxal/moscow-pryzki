import { Box, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Header from "./ui/header";

interface Props {
  isMobile: boolean;
}

const Festival = ({ isMobile }: Props) => {
  return (
    <Box
      sx={{
        backgroundImage: isMobile
          ? "url(/images/bg/festival.png)"
          : "url(/images/bg/mobile/festival.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: isMobile ? "888px" : "666px",
        width: "100%",
        pt: "96px",
      }}
    >
      <Header isMobile={isMobile} text="фестиваль 2022" />
      <Container
        disableGutters
        sx={{
          mt: isMobile ? "90px" : "42px",
          px: isMobile ? "0px" : "15px",
        }}
        maxWidth={isMobile ? "md" : false}
      >
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          allowFullScreen
          frameBorder={"0px"}
          height={isMobile ? "488px" : "254px"}
          width={"100%"}
        />
      </Container>
    </Box>
  );
};

export default Festival;
