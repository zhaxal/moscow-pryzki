import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/header";

interface Props {
  isMobile: boolean;
}

const Footer = ({ isMobile }: Props) => {
  return (
    <Box
      sx={{
        backgroundImage: isMobile
          ? "url(/images/bg/footer.png)"
          : "url(/images/bg/mobile/footer.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        minHeight: "888px",
        width: "100%",
        pt: "94px",
      }}
    >
      <Header text="ГДЕ НАС НАЙТИ?" isMobile={isMobile} />
      <Container
        sx={{
          mt: "90px",
          mb: isMobile ? "131px" : "61px",
          pl: isMobile ? "0px" : "15px",
        }}
        disableGutters
      >
        <Stack
          direction={isMobile ? "row" : "column"}
          sx={{
            height: isMobile ? "500px" : "1000px",
            filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))",
          }}
        >
          <Stack
            sx={{
              alignContent: "center",
              justifyContent: "center",
              backgroundColor: "white",
              width: isMobile ? "50%" : "100%",
              height: isMobile ? "100%" : "50%",
              px: "23px",
            }}
          >
            <Box
              dangerouslySetInnerHTML={{
                __html:
                  "<div style='font-family: Gotham Pro Regular; font-weight: 400; font-size: 32px; line-height: 41.6px'>Государственный центральный концертный зал «Россия» <div style='font-family: Gotham Pro Bold; font-weight: 700; font-size: 32px; line-height: 41.6px'>ГЦКЗ «Россия» в Лужниках</div></div>",
              }}
            />
          </Stack>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A93d017a5319673bab48bc90cb05a0de843df6b2e25d3f5b969652bc4fc94cc2e&amp;source=constructor"
            height={isMobile ? "100%" : "50%"}
            width={isMobile ? "50%" : "100%"}
            frameBorder="0"
          ></iframe>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
