import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { maxWidth } from "@mui/system";
import React from "react";

interface Props {
  isMobile: boolean;
}

const Partners = ({ isMobile }: Props) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(230deg, #229ffb 0%, #54dae6 46.09%, #8c64de 100%)",
        minHeight: isMobile ? "879px" : "1239px",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: isMobile
            ? "url(/images/bg/partners.svg)"
            : "url(/images/bg/mobile/partners_mob.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
          <Grid
            sx={{
              background: "rgba(196, 196, 196, 0.69)",
              height: "100%",
              width: "100%",
              py: "50px",
            }}
            container
            rowGap={"90px"}
          >
            <Grid item md={4} style={{ textAlign: "center", width: "100%" }}>
              <Box
                component={"img"}
                src={"images/logos/departmentLogo.png"}
                maxWidth={"90%"}
              />
            </Grid>
            <Grid item md={4} style={{ textAlign: "center", width: "100%" }}>
              <Box
                component={"img"}
                src={"images/logos/mossportLogo.png"}
                maxWidth={"90%"}
              />
            </Grid>
            <Grid item md={4} style={{ textAlign: "center", width: "100%" }}>
              <Box
                component={"img"}
                src={"images/logos/sozvezdieLogo.png"}
                maxWidth={"90%"}
              />
            </Grid>
            {isMobile ? (
              <>
                <Grid
                  item
                  md={4}
                  style={{ textAlign: "center", width: "100%" }}
                >
                  <Box
                    component={"img"}
                    src={"images/logos/tukanLogo.png"}
                    maxWidth={"90%"}
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {/* <Box
                    component={"img"}
                    src={"images/logos/alfa.svg"}
                    maxWidth={"90%"}
                  /> */}
                </Grid>
              </>
            ) : (
              <>
                <Grid
                  item
                  md={4}
                  style={{ textAlign: "center", width: "100%" }}
                >
                  <Box
                    component={"img"}
                    src={"images/logos/pvteamLogo.png"}
                    maxWidth={"90%"}
                  />
                </Grid>
                <Grid
                  item
                  md={4}
                  style={{ textAlign: "center", width: "100%" }}
                >
                  <Box
                    component={"img"}
                    src={"images/logos/tukanLogo.png"}
                    maxWidth={"90%"}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Partners;
