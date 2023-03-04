import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/header";

const About = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/bg/about.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: "960px",
        width: "100%",
        pt: "96px",
      }}
    >
      <Header text="о фестивале" />
      <Container disableGutters sx={{ mt: "55px" }}>
        <Stack direction={"row"} spacing={"30px"}>
          <Stack direction={"column"} spacing={"19px"}>
            <Typography
              variant="body"
              sx={{
                fontSize: "25px",
                lineHeight: "23.93px",
                fontFamily: "Gotham Pro Medium",
              }}
            >
              Три года вместе
            </Typography>
            <Typography
              variant="body"
              sx={{
                fontSize: "1em",
                lineHeight: "18.29px",
                minHeight: "192px",
              }}
            >
              В этом году фестиваль проводится в третий раз. И в третий раз
              Лужники становятся местом притяжения лучших шестовиков со всей
              России — всех возрастов и вне зависимости от уровня квалификации и
              наличия разрядов! Свыше 250 участников из более 20 регионов нашей
              страны — от начинающих до звёзд мирового уровня — поборются за
              звание лучших из лучших!
            </Typography>

            <Stack direction={"row"} spacing={"29px"}>
              <Box
                component={"img"}
                src={"images/gallery/about-left-1.png"}
                sx={{ maxHeight: "344px", maxWidth: "270px" }}
                alt={"about-left-1"}
              />
              <Box
                component={"img"}
                src={"images/gallery/about-left-2.png"}
                sx={{ maxHeight: "344px", maxWidth: "270px" }}
                alt={"about-left-2"}
              />
            </Stack>
          </Stack>
          <Stack direction={"column"} spacing={"19px"}>
            <Typography
              variant="body"
              sx={{
                fontSize: "25px",
                lineHeight: "23.93px",
                fontFamily: "Gotham Pro Medium",
              }}
            >
              Традиции
            </Typography>
            <Typography
              variant="body"
              sx={{
                fontSize: "1em",
                lineHeight: "18.29px",
                minHeight: "192px",
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
              sx={{ maxHeight: "344px" }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
