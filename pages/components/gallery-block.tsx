import { Grid, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";

interface Props {
  isMobile: boolean;
}

interface imgProps {
  src: string;
  maxWidth?: string;
}

const Image = ({ src, maxWidth }: imgProps) => {
  return (
    <Box
      component={"img"}
      src={src}
      sx={{ width: maxWidth ? maxWidth : "100%", height: "100%" }}
    />
  );
};

const GalleryBlock = ({ isMobile }: Props) => {
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
          {isMobile ? (
            <Stack
              direction={"row"}
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack>
                <Image
                  src={"images/gallery/gallery/gallery-1.png"}
                  maxWidth={"400px"}
                />
                <Image
                  src={"images/gallery/gallery/gallery-2.png"}
                  maxWidth={"400px"}
                />
                <Image
                  src={"images/gallery/gallery/gallery-3.png"}
                  maxWidth={"400px"}
                />
              </Stack>
              <Stack>
                <Image
                  src={"images/gallery/gallery/gallery-4.png"}
                  maxWidth={"400px"}
                />
                <Image
                  src={"images/gallery/gallery/gallery-5.png"}
                  maxWidth={"400px"}
                />
                <Image
                  src={"images/gallery/gallery/gallery-6.png"}
                  maxWidth={"400px"}
                />
              </Stack>
              <Stack>
                <Image
                  src={"images/gallery/gallery/gallery-7.png"}
                  maxWidth={"400px"}
                />
                <Image
                  src={"images/gallery/gallery/gallery-8.png"}
                  maxWidth={"400px"}
                />
                <Image
                  src={"images/gallery/gallery/gallery-9.png"}
                  maxWidth={"400px"}
                />
              </Stack>
              <Stack>
                <Image
                  src={"images/gallery/gallery/gallery-10.png"}
                  maxWidth={"400px"}
                />
                <Image
                  src={"images/gallery/gallery/gallery-11.png"}
                  maxWidth={"400px"}
                />
                <Image
                  src={"images/gallery/gallery/gallery-12.png"}
                  maxWidth={"400px"}
                />
              </Stack>
            </Stack>
          ) : (
            <Box style={{ overflowX: "hidden" }}>
              <Swiper
                modules={[FreeMode]}
                slidesPerView={1}
                direction={"horizontal"}
                freeMode
              >
                <SwiperSlide className="swiper-slide-gallery">
                  <Stack direction={"row"}>
                    <Stack>
                      <Image
                        src={"images/gallery/gallery/gallery-1.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-2.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-3.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                    </Stack>
                    <Stack>
                      <Image
                        src={"images/gallery/gallery/gallery-4.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-5.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-6.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                    </Stack>
                    <Stack>
                      <Image
                        src={"images/gallery/gallery/gallery-7.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-8.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-9.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                    </Stack>
                  </Stack>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-gallery">
                  <Stack direction={"row"}>
                    <Stack>
                      <Image
                        src={"images/gallery/gallery/gallery-10.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-11.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-12.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                    </Stack>
                    <Stack>
                      <Image
                        src={"images/gallery/gallery/gallery-1.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-1.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-1.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                    </Stack>
                    <Stack>
                      <Image
                        src={"images/gallery/gallery/gallery-1.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-1.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                      <Image
                        src={"images/gallery/gallery/gallery-1.png"}
                        maxWidth={isMobile ? "400px" : "200px"}
                      />
                    </Stack>
                  </Stack>
                </SwiperSlide>
              </Swiper>
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default GalleryBlock;
