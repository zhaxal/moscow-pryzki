import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  isMobile: boolean;
}

interface WinnerProps {
  img: string;
  name: string;
  desc: string;
  isMobile: boolean;
}

const WinnerCard = ({ img, name, desc, isMobile }: WinnerProps) => {
  return (
    <Stack
      direction={"column"}
      sx={{
        width: isMobile ? "400px" : "300px",
        height: isMobile ? "910px" : "800px",
        background:
          "linear-gradient(218.58deg, #343434 10.35%, #3E3E3E 94.68%)",
      }}
      spacing={"16px"}
    >
      <Box
        component={"img"}
        src={img}
        sx={{ height: isMobile ? "400px" : "320px", objectFit: "cover" }}
      />
      <Typography
        variant="header"
        sx={{
          fontSize: "32px",
          color: "#DCDCDC",
          lineHeight: "53.76px",
          textAlign: "center",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "#DCDCDC",
          fontFamily: "Gotham Pro Light",
          lineHeight: "20.8px",
          px: "10px",
          textAlign: "justify",
          whiteSpace: "pre-line",
        }}
      >
        {desc}
      </Typography>
    </Stack>
  );
};

const WinnersCarousel = ({ isMobile }: Props) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const breakpoints = useMediaQuery("(min-width:415px)");

  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isLastIndex, setIsLastIndex] = React.useState(false);

  // const handleOnMouse = (state: any) => {
  //   if (activeIndex > 0) {
  //     setShowLeftArrow(state);
  //   } else {
  //     setShowLeftArrow(false);
  //   }
  //   if (isLastIndex) {
  //     setShowRightArrow(false);
  //   } else {
  //     setShowRightArrow(state);
  //   }
  // };

  const handleChangeIndex = (index: number, lastIndex: number) => {
    setActiveIndex(index);
    if (index === 0) {
      setShowLeftArrow(false);
    } else {
      setShowLeftArrow(true);
    }
    if (lastIndex === 1) {
      setIsLastIndex(true);
      setShowRightArrow(false);
    } else {
      setIsLastIndex(false);
      setShowRightArrow(true);
    }
  };

  return (
    <Box
      sx={{
        background: "#232323",
        minHeight: isMobile ? "1276px" : "1123px",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: isMobile
            ? "url(/images/bg/winners.png)"
            : "url(/images/bg/mobile/winners.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          width: "100%",
          height: "100%",
          pt: isMobile ? "90px" : "64px",
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
              fontSize: isMobile ? "96px" : "48px",
              lineHeight: isMobile ? "76.8px" : "57.6px",
              textAlign: "center",
            }}
          >
            Победители прошлого фестиваля
          </Typography>
        </Stack>
        <Container disableGutters sx={{ mt: "75px", position: "relative" }}>
          <Box sx={{ overflowX: "hidden" }}>
            <Swiper
              style={{
                paddingLeft: isMobile ? "0px" : "15px",
              }}
              modules={[Navigation]}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              slidesPerView={isMobile ? 2.8 : breakpoints ? 1.5 : 1.2}
              direction={"horizontal"}
              spaceBetween={20}
              resistance={false}
              onActiveIndexChange={(e: any) =>
                handleChangeIndex(e.activeIndex, e.progress)
              }
              onReachBeginning={() => setShowLeftArrow(false)}
              onReachEnd={() => setShowRightArrow(false)}
            >
              <SwiperSlide>
                <WinnerCard
                  img="images/winners/Михаил Шмыков.jpg"
                  name="Михаил Шмыков"
                  desc="Михаил Шмыков-победитель Фестиваля прыжков с шестом 2023 года и рекордсмен нашего турнира с результатом 5.75"
                  isMobile={isMobile}
                />
              </SwiperSlide>
              <SwiperSlide>
                <WinnerCard
                  img="images/winners/Татьяна Калинина.jpg"
                  name="Татьяна Калинина"
                  desc={`У девушек в упорной борьбе не только с соперницами, но и с планкой😁победу в 2023 года одержала Татьяна Калинина, ее результат 4.45, после этого Татьяна штурмовала свой личный рекорд 4.56, но пока что неудачно, всё впереди🤞🏼ждем Татьяну в этом году на фестивале с новыми рекордами`}
                  isMobile={isMobile}
                />
              </SwiperSlide>
              <SwiperSlide>
                <WinnerCard
                  img="images/winners/София Должикова.jpg"
                  name="София Должикова"
                  desc="Молодые ребята, приглашенные в основной состав, не смотря на волнение, нас не подвели😍🤩 София Должикова-звездочка, тоже завоевала сердца болельщиков на трибунах! Соня повторила свой личный рекорд 3.95 и заняла первое место в своей возрастной группе U18🥇"
                  isMobile={isMobile}
                />
              </SwiperSlide>
              <SwiperSlide>
                <WinnerCard
                  img="images/winners/Инна Гальчина.jpg"
                  name="Инна Гальчина"
                  desc="Инна Гальчина, представительница Омской области, повторила личный рекорд-4.10 и стала первой в группе U20."
                  isMobile={isMobile}
                />
              </SwiperSlide>
              <SwiperSlide>
                <WinnerCard
                  img="images/winners/Бугаенко Захар.jpg"
                  name="Бугаенко Захар"
                  desc="Бугаенко Захар стал первым в группе U18 с результатом 5.00"
                  isMobile={isMobile}
                />
              </SwiperSlide>
              <SwiperSlide>
                <WinnerCard
                  img="images/winners/Ранэль Шафиков.jpg"
                  name="Ранэль Шафиков"
                  desc="Ранэль Шафиков выиграл в возрастной группе U20 и вплотную приблизился к личному рекорду, показав 5.30"
                  isMobile={isMobile}
                />
              </SwiperSlide>
            </Swiper>
            <Box
              ref={navigationNextRef}
              component={"img"}
              src={
                isMobile
                  ? "images/logos/arrow.png"
                  : "images/logos/arrow-mobile.png"
              }
              sx={{
                height: isMobile ? "70px" : "64px",
                maxWidth: isMobile ? "103px" : "60px",
                position: "absolute",
                right: isMobile ? "-45px" : 0,
                top: "40%",
                zIndex: 2,
                display: showRightArrow ? "block" : "none",
              }}
            />
            <Box
              ref={navigationPrevRef}
              component={"img"}
              src={
                isMobile
                  ? "images/logos/arrow.png"
                  : "images/logos/arrow-mobile.png"
              }
              sx={{
                height: isMobile ? "70px" : "64px",
                maxWidth: isMobile ? "103px" : "60px",
                transform: "rotate(180deg)",
                position: "absolute",
                left: isMobile ? "-45px" : 0,
                top: "40%",
                zIndex: 2,
                display: showLeftArrow ? "block" : "none",
              }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default WinnersCarousel;
