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
                  img="images/gallery/winners/winner-1.png"
                  name="АНЖЕЛИКА СИДОРОВА"
                  desc="Серебряная Олимпийская чемпионка, чемпионка мира и трехкратная чемпионка Фестиваля прыжков с шестом!"
                  isMobile={isMobile}
                />
              </SwiperSlide>
              <SwiperSlide>
                <WinnerCard
                  img="images/gallery/winners/winner-2.png"
                  name="Арина Разина"
                  desc={`«Я беру собачек на время, пока их хозяева в отъезде, У меня в гостях побывало уже около 15 разных собак.
                Обожаю сериалы и веду список, в нем уже 146 просмотренных. Часто пеку кексы и чизкейки, больше всего нравится их украшать. Иногда вышиваю крутые значки, мне в принципе доставляет удовольствие творчество: рисование или создание открыток.
                «Мне часто говорят не перегибать палку, но как я могу их послушать, если я прыгаю с шестом»`}
                  isMobile={isMobile}
                />
              </SwiperSlide>
              <SwiperSlide>
                <WinnerCard
                  img="images/gallery/winners/winner-3.png"
                  name="Ранэль Шафиков"
                  desc="В легкой атлетике 6 лет. За это время становился чемпионом России и выполнил Высшее мировое достижение в многоборье.
                «На будущее не загадываю, хочу реализовать себя, стать еще лучше и пусть Вирусомания в телах и головах людей закончится»"
                  isMobile={isMobile}
                />
              </SwiperSlide>
              <SwiperSlide>
                <WinnerCard
                  img="images/gallery/winners/winner-4.png"
                  name="Ангелина Ляпорова"
                  desc="С раннего возраста занималась спортивной гимнастикой и в возрасте 13 лет решила для себя, что летать намного круче кувырков и шпагатов! С первой тренировки буквально «заглядывала в рот тренеру» во время объяснения техники и нюансов прыжка, и уже через 10 месяцев выполнила норматив кандидата в мастера спорта, и в этом же сезоне неожиданно выиграла первый свой крупный старт: «Фестиваль прыжков с шестом»
                  Мечтает летать и наблюдать за всем с высоты))))"
                  isMobile={isMobile}
                />
              </SwiperSlide>
              <SwiperSlide>
                <WinnerCard
                  img="images/gallery/winners/winner-5.png"
                  name="Виктор Пинтусов"
                  desc="Победитель фестиваля 2022 года с результатом 5.70. Знаменит в сообществе прыжков с шестом — отменным вкусом на носки."
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
