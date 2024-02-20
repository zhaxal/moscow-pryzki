import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Props {
  isMobile: boolean;
}

interface imgProps {
  src: string;
}

const Image = ({ src }: imgProps) => {
  return (
    <Box
      component={"img"}
      src={src}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        aspectRatio: "1/1",
      }}
    />
  );
};

const GalleryBlock = ({ isMobile }: Props) => {
  const images = Array(12)
    .fill("")
    .map((_, i) => `images/gallery/gallery/gallery (${i + 1}).jpg`);
  const maxWidth = isMobile ? "400px" : "200px";

  return (
    <Box
      sx={{
        background: "#232323",
        minHeight: isMobile ? "1413px" : "998px",
        width: "100%",
        pt: isMobile ? "77px" : "64px",
      }}
    >
      <Box
        sx={{
          backgroundImage: isMobile
            ? "url(/images/bg/gallery.svg)"
            : "url(/images/bg/mobile/gallery.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "left",
          backgroundPositionY: "bottom",
          width: "100%",
          height: "100%",
        }}
      >
        <Container maxWidth={"xl"}>
          <Stack
            direction={"column"}
            spacing={isMobile ? "50px" : "95px"}
            sx={{ pb: "50px" }}
          >
            <Stack
              sx={{
                width: "100%",
                mt: isMobile ? "-30px" : "0px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant={"header"}
                sx={{ fontSize: "96px", lineHeight: "76.8px" }}
              >
                галерея
              </Typography>
            </Stack>
            <Grid container spacing={0}>
              {images.map((src, i) => (
                <Grid item xs={3} key={i}>
                  <Image src={src} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default GalleryBlock;
