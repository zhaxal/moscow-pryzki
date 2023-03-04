import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Cover = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/bg/cover.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "900px",
        width: "100%",
      }}
    >
      <Container disableGutters>
        <Stack direction={"column"} sx={{ mt: "50px" }} spacing="175px">
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} spacing={"16px"} alignItems={"center"}>
              <Box
                component={"img"}
                src={"images/logos/departmentLogo.svg"}
                sx={{ maxWidth: "80px" }}
                alt={"departmentLogo"}
              />
              <Box
                component={"img"}
                src={"images/logos/mossportLogo.svg"}
                sx={{ maxWidth: "70px" }}
                alt={"mossportLogo"}
              />
              <Box
                component={"img"}
                src={"images/logos/100yearLogo.svg"}
                sx={{ maxWidth: "246px", maxHeight: "68px" }}
                alt={"100yearLogo"}
              />
            </Stack>
            <Typography
              sx={{
                textAlign: "right",
                whiteSpace: "pre-line",
                fontSize: "1em",
                lineHeight: "22.59px",
                letterSpacing: "0.1em",
              }}
              variant={"cover"}
            >
              {`Дворец спорта
              Олимпийского комплекса
              «Лужники» `}
            </Typography>
          </Stack>

          <Stack
            direction={"column"}
            spacing={"10px"}
            sx={{ paddingLeft: "15px" }}
          >
            <Typography
              variant={"cover"}
              sx={{
                fontSize: "2em",
                lineHeight: "39.87px",
                letterSpacing: "0.1em",
              }}
            >
              11-12 марта 2022
            </Typography>
            <Typography
              variant={"cover"}
              sx={{
                fontSize: "4em",
                lineHeight: "77px",
                whiteSpace: "pre-line",
                fontFamily: "Exo2",
              }}
            >
              {`ВСЕРОССИЙСКИЙ ФЕСТИВАЛЬ
              ПРЫЖКОВ С ШЕСТОМ`}
            </Typography>
            <Button
              sx={{
                border: "1px solid #FFFFFF",
                maxWidth: "238px",
                height: "57px",
                fontFamily: "Exo2-Light",
                color: "white",
                fontSize: "17px",
                lineHeight: "22.59px",
                letterSpacing: "0.1em",
              }}
            >
              Расписание
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Cover;
