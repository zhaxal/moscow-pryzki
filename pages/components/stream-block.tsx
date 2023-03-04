import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/header";

const Stream = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(244.94deg, rgba(152, 58, 121, 0.72) 26.75%, rgba(220, 74, 75, 0.72) 96.58%)",
        minHeight: "1123px",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: "url(/images/bg/stream.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          position: "absolute",
          width: "100%",
          height: "100%",
          pt: "77px",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant={"header"}
            sx={{ fontSize: "96px", lineHeight: "76.8px" }}
          >
            прямая трансляция
          </Typography>
        </Stack>
        <Container
          sx={{
            mt: "80px",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allowFullScreen
            frameBorder={"0px"}
            height="694px"
            width={"100%"}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Stream;
