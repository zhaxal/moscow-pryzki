import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Header from "./ui/header";

interface Props {
  isMobile: boolean;
}

const About = ({ isMobile }: Props) => {
  const isLaptop = useMediaQuery("(min-width:1140px)");

  return (
    <Box
      sx={{
        backgroundImage: isMobile
          ? "url(/images/bg/about.png)"
          : "url(/images/bg/mobile/about.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "left",
        minHeight: isMobile ? "960px" : "1564px",
        width: "100%",
        pt: "96px",
      }}
    >
      <Header isMobile={isMobile} text="о фестивале" />
      <Container disableGutters sx={{ mt: isMobile ? "55px" : "42px" }}>
        <Stack
          direction={isLaptop ? "row" : "column"}
          spacing={isMobile ? "2em" : "64px"}
        >
          <Stack
            direction={"column"}
            spacing={isLaptop ? "19px" : "40px"}
            sx={{ px: isLaptop ? "0px" : "15px" }}
          >
            <Typography
              variant="body"
              sx={{
                fontSize: "25px",
                lineHeight: "23.93px",
                fontFamily: "Gotham Pro Medium",
                textTransform: "uppercase",
              }}
            >
              ШЕСТОЙ ФЕСТИВАЛЬ
            </Typography>
            <Typography
              variant="body"
              sx={{
                fontSize: "1em",
                lineHeight: "18.29px",
                minHeight: isLaptop ? "192px" : "100%",
                textAlign: "justify",
              }}
            >
              8—9 марта 2025 г. в манеже МГСУ, в одном из лучших и современных
              легкоатлетических манежей, состоится пятый юбилейный Всероссийский
              Фестиваль прыжков с шестом. Впервые в этом году участниками
              соревнований станут не только спортсмены из различных регионов
              нашей страны, а также ведущие спортсмены Республики Беларусь —
              многократная чемпионка и рекордсменка Республики Беларусь Ирина
              Жук и Матвей Волков — молодой, но уже титулованный спортсмен,
              показывающий результаты на уровне призовых мест Чемпионатов Европы
              и Мира.
            </Typography>

            <Stack
              direction={"row"}
              justifyContent={isLaptop ? "flex-start" : "space-between"}
            >
              <Box
                component={"img"}
                src={"images/gallery/about-left-1.png"}
                sx={{
                  maxHeight: isMobile ? "344px" : "277px",
                  maxWidth: isMobile ? "344px" : "48%",
                }}
                alt={"about-left-1"}
              />
              <Box
                component={"img"}
                src={"images/gallery/about-left-2.png"}
                sx={{
                  maxHeight: isMobile ? "344px" : "277px",
                  maxWidth: isMobile ? "344px" : "48%",
                }}
                alt={"about-left-2"}
              />
            </Stack>
          </Stack>
          <Stack
            direction={"column"}
            spacing={isLaptop ? "19px" : "40px"}
            sx={{ px: isLaptop ? "0px" : "15px" }}
          >
            <Typography
              variant="body"
              sx={{
                fontSize: "25px",
                lineHeight: "23.93px",
                fontFamily: "Gotham Pro Medium",
                textTransform: "uppercase",
              }}
            >
              Традиции
            </Typography>
            <Typography
              variant="body"
              sx={{
                fontSize: "1em",
                lineHeight: "18.29px",
                minHeight: isLaptop ? "192px" : "100%",
                textAlign: "justify",
              }}
            >
              Этот фестиваль — не только праздник спорта, но и праздник русской
              культуры и прекрасного вкуса. Зрителей ждёт уникальная спортивная
              арена страны с богатыми спортивными и культурными традициями,
              красочные Церемонии открытия и закрытия фестиваля, прекрасные
              музыканты и танцоры, роскошные постановки, яркая шоу-программа и,
              конечно, встречи со звёзднымипредставителями культуры и спорта
              России! У каждого из жителей и гостей столицы есть потрясающая
              возможность провести свои лучшие выходные в кругу семьи, друзей и
              единомышленников!
            </Typography>
            <Box
              component={"img"}
              src={"images/gallery/about-right.png"}
              alt={"about-right"}
              sx={{ maxHeight: isMobile ? "344px" : "275px" }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
