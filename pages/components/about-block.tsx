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
        backgroundImage: isMobile ? "url(/images/bg/about.png)" : "url(/images/bg/mobile/about.png)",
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
              Три года вместе
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
              В этом году фестиваль проводится в третий раз. И в третий раз
              Лужники становятся местом притяжения лучших шестовиков со всей
              России — всех возрастов и вне зависимости от уровня квалификации и
              наличия разрядов! Свыше 250 участников из более 20 регионов нашей
              страны — от начинающих до звёзд мирового уровня — поборются за
              звание лучших из лучших!
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
