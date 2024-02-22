import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  isMobile: boolean;
}

const Stream = ({ isMobile }: Props) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(244.94deg, rgba(152, 58, 121, 0.72) 26.75%, rgba(220, 74, 75, 0.72) 96.58%)",
        minHeight: isMobile ? "1123px" : "718px",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: isMobile
            ? "url(/images/bg/stream.png)"
            : "url(/images/bg/mobile/stream.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
          position: "absolute",
          width: "100%",
          height: "100%",
          pt: isMobile ? "77px" : "64px",
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
            sx={{
              fontSize: isMobile ? "96px" : "15vw",
              lineHeight: isMobile ? "76.8px" : "51.2px",
            }}
          >
            прямая трансляция
          </Typography>
        </Stack>
        <Container
          sx={{
            mt: isMobile ? "80px" : "74px",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/8FkNGCNXnw0?si=pD-niekI4hEkQDBP"
            title="YouTube video player"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder={"0px"}
            height={isMobile ? "694px" : "267px"}
            width={"100%"}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Stream;
