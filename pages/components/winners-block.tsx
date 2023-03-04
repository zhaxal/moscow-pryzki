import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import "swiper/css";

interface WinnerProps {
  img: string;
  name: string;
  desc: string;
}

const WinnerCard = ({ img, name, desc }: WinnerProps) => {
  return (
    <Stack
      direction={"column"}
      sx={{
        maxWidth: "400px",
        background:
          "linear-gradient(218.58deg, #343434 10.35%, #3E3E3E 94.68%)",
        pb: "45px",
      }}
      spacing={"16px"}
    >
      <Box
        component={"img"}
        src={img}
        sx={{ width: "100%", minHeight: "400px" }}
      />
      <Typography
        variant="header"
        sx={{ fontSize: "32px", lineHeight: "53.76px", textAlign: "center" }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "white",
          fontFamily: "Gotham Pro Light",
          lineHeight: "20.8px",
          height: "380px",
          px: "10px",
          textAlign: "justify",
        }}
      >
        {desc}
      </Typography>
    </Stack>
  );
};

const WinnersCarousel = () => {
  return (
    <Box
      sx={{
        background: "#232323",
        minHeight: "1276px",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: "url(/images/bg/winners.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          position: "absolute",
          width: "100%",
          height: "100%",
          pt: "90px",
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
            Победители прошлого фестиваля
          </Typography>
        </Stack>
        <Container disableGutters sx={{mt: "75px"}}>
          <Swiper
            modules={[FreeMode]}
            slidesPerView={3}
            direction={"horizontal"}
            spaceBetween={"21px"}
            freeMode={true}
          >
            <SwiperSlide>
              <WinnerCard
                img="images/gallery/winners/winner-1.png"
                name="АНЖЕЛИКА СИДОРОВА"
                desc="Серебряная Олимпийская чемпионка, чемпионка мира и трехкратная чемпионка Фестиваля прыжков с шестом!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <WinnerCard
                img="images/gallery/winners/winner-1.png"
                name="АНЖЕЛИКА СИДОРОВА"
                desc="Серебряная Олимпийская чемпионка, чемпионка мира и трехкратная чемпионка Фестиваля прыжков с шестом!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <WinnerCard
                img="images/gallery/winners/winner-1.png"
                name="АНЖЕЛИКА СИДОРОВА"
                desc="Серебряная Олимпийская чемпионка, чемпионка мира и трехкратная чемпионка Фестиваля прыжков с шестом!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <WinnerCard
                img="images/gallery/winners/winner-1.png"
                name="АНЖЕЛИКА СИДОРОВА"
                desc="Серебряная Олимпийская чемпионка, чемпионка мира и трехкратная чемпионка Фестиваля прыжков с шестом!"
              />
            </SwiperSlide>
          </Swiper>
        </Container>
      </Box>
    </Box>
  );
};

export default WinnersCarousel;
