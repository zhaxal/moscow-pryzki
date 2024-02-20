import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { RefObject } from "react";

interface Props {
  isMobile: boolean;
  scrollRef: any;
}

const Cover = ({ isMobile, scrollRef }: Props) => {
  const executeScroll = () => {
    if (scrollRef.current)
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isIphone = useMediaQuery("(min-width:430px)");

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
      <Container
        disableGutters
        maxWidth={"md"}
        sx={{ px: isMobile ? "0px" : "30px" }}
      >
        <Stack
          direction={"column"}
          sx={{ mt: "50px" }}
          spacing={isMobile ? "175px" : "130px"}
        >
          <Stack
            direction={isMobile ? "row" : "column"}
            justifyContent={"space-between"}
          >
            <Stack
              direction={"row"}
              spacing={"16px"}
              alignItems={isMobile ? "center" : "flex-start"}
            >
              <Box
                component={"img"}
                src={"images/logos/departmentLogo.svg"}
                sx={{ maxWidth: isMobile ? "80px" : "47px" }}
                alt={"departmentLogo"}
              />
              <Box
                component={"img"}
                src={"images/logos/mossportLogo.svg"}
                sx={{ maxWidth: isMobile ? "70px" : "41px" }}
                alt={"mossportLogo"}
              />
              <Box
                component={"img"}
                src={"images/logos/sozvezdieLogo.svg"}
                sx={{
                  maxWidth: isMobile ? "216px" : isIphone ? "127px" : "100px",
                  maxHeight: isMobile ? "95px" : "55px",
                }}
                alt={"sozvezdieLogo"}
              />
            </Stack>
            <Typography
              sx={{
                textAlign: "right",
                whiteSpace: "pre-line",
                fontSize: "1em",
                lineHeight: isMobile ? "22.59px" : "21.26px",
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
            sx={{ paddingLeft: isMobile ? "15px" : "0px" }}
          >
            <Typography
              variant={"cover"}
              sx={{
                fontSize: isMobile ? "2em" : "20px",
                lineHeight: isMobile ? "39.87px" : "26.58px",
                letterSpacing: "0.1em",
              }}
            >
              11-12 марта 2022
            </Typography>
            <Typography
              variant={"cover"}
              sx={{
                fontSize: isMobile ? "4em" : "2em",
                lineHeight: isMobile ? "77px" : "38.4px",
                whiteSpace: "pre-line",
                fontFamily: "Exo2",
                pb: "20px",
              }}
            >
              {`ВСЕРОССИЙСКИЙ ФЕСТИВАЛЬ
              ПРЫЖКОВ С ШЕСТОМ`}
            </Typography>
            <Button
              sx={{
                border: "1px solid #FFFFFF",
                maxWidth: isMobile ? "238px" : "175px",
                height: "57px",
                fontFamily: "Exo2-Light",
                color: "white",
                fontSize: "17px",
                lineHeight: "22.59px",
                letterSpacing: "0.1em",
              }}
              onClick={executeScroll}
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
