import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  isMobile: boolean;
}

const Partners = ({ isMobile }: Props) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(244.94deg, rgba(152, 58, 121, 0.72) 26.75%, rgba(220, 74, 75, 0.72) 96.58%)",
        minHeight: "879px",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: isMobile
            ? "url(/images/bg/partners.png)"
            : "url(/images/bg/mobile/partners.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          position: "absolute",
          width: "100%",
          height: "100%",
          pt: isMobile ? "77px" : "64px",
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
              fontSize: isMobile ? "96px" : "64px",
              lineHeight: isMobile ? "76.8px" : "51.2px",
            }}
          >
            Наши партнёры
          </Typography>
        </Stack>
        <Container
          disableGutters
          sx={{
            mt: isMobile ? "70px" : "36px",
            px: isMobile ? "0px" : "45px",
          }}
        >
          <Stack
            sx={{
              background: "rgba(196, 196, 196, 0.69)",
              height: isMobile ? "197px" : "587px",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            direction={isMobile ? "row" : "column"}
          >
            <Box
              component={"img"}
              src={"images/logos/departmentLogo.png"}
              sx={{ maxWidth: "80%" }}
            />
            <Box
              component={"img"}
              src={"images/logos/mossportLogo.png"}
              sx={{ maxWidth: "90%" }}
            />
            <Box
              component={"img"}
              src={"images/logos/pvteamLogo.png"}
              sx={{ maxWidth: isMobile ? "354px" : "95%" }}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Partners;
