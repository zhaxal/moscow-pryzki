import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  isMobile: boolean;
  scrollRef: any;
}

interface HeaderProps {
  text: string;
  isMobile: boolean;
}

interface DateProps {
  date: string;
  desc: string;
  isMobile: boolean;
}

const ProgramHeader = ({ text, isMobile }: HeaderProps) => {
  return (
    <Stack
      sx={{
        minHeight: isMobile ? "96px" : "64px",
        width: isMobile ? "253px" : "210px",
        background: "linear-gradient(270deg, #EB605B 0%, #F0BC6E 100%)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="header"
        sx={{
          fontSize: isMobile ? "64px" : "40px",
          lineHeight: isMobile ? "83px" : "52px",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

const ProgramSchedule = ({ date, desc, isMobile }: DateProps) => {
  return (
    <Stack
      sx={{
        minHeight: "57px",
        maxWidth: isMobile ? "784px" : "100%",
        background: "#F2F2F2",
        alignItems: "center",
        px: isMobile ? "8px" : "2px",
      }}
      direction={"row"}
    >
      <Typography
        sx={{
          fontSize: isMobile ? "24px" : "15px",
          lineHeight: isMobile ? "22.97px" : "19.14px",
          fontWeight: 700,
          fontFamily: "Gotham Pro Bold",
          textAlign: "center",
          width: isMobile ? "31%" : "30%",
        }}
      >
        {date}
      </Typography>
      <Typography
        sx={{
          fontSize: isMobile ? "24px" : "16px",
          lineHeight: isMobile ? "22.97px" : "19.14px",
          fontWeight: 400,
          fontFamily: "Gotham Pro Light",
          width: isMobile ? "69%" : "70%",
        }}
      >
        {desc}
      </Typography>
    </Stack>
  );
};

const Programs = ({ isMobile, scrollRef }: Props) => {
  return (
    <Box
      ref={scrollRef}
      sx={{
        minHeight: isMobile ? "1024px" : "1549px",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: isMobile
            ? "url(/images/bg/bg_cringe.png)"
            : "url(/images/bg/mobile/bg_cringe_mob.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          position: "absolute",
          height: "100%",
          pt: isMobile ? "77px" : "96px",
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
            ПРОГРАММА
          </Typography>
        </Stack>
        <Container disableGutters sx={{ mt: isMobile ? "119px" : "42px" }}>
          <Stack
            direction={isMobile ? "row" : "column"}
            justifyContent={"center"}
            spacing={isMobile ? "60px" : "64px"}
          >
            <Stack
              direction={"column"}
              spacing={isMobile ? "56px" : "48px"}
              alignItems={"center"}
            >
              <ProgramHeader text="8 МАРТА" isMobile={isMobile} />
              <Stack
                direction={"column"}
                sx={{ px: isMobile ? "0px" : "15px" }}
                spacing={"8px"}
              >
                <ProgramSchedule
                  date="10:50"
                  desc="1 поток (юноши и девушки до 16 лет, до 18 лет)"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="13:10"
                  desc="Разминка II потока"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="14:00"
                  desc="II поток (юниоры и юниорки до 20 лет)"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="16:10"
                  desc="Разминка III потока"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="17:00"
                  desc="III поток (муж., жен.)"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="19:00"
                  desc="Церемония награждения (все возраста)"
                  isMobile={isMobile}
                />
              </Stack>
            </Stack>
            <Stack direction={"column"} spacing={"56px"} alignItems={"center"}>
              <ProgramHeader text="9 МАРТА" isMobile={isMobile} />
              <Stack
                direction={"column"}
                sx={{ px: isMobile ? "0px" : "15px" }}
                spacing={"8px"}
              >
                <ProgramSchedule
                  date="10:00"
                  desc="I поток (юноши и девушки до 14 лет)"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="12:00"
                  desc="Разминка II потока"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="12:30"
                  desc="II поток (юноши и девушки до 14 лет, до 16 лет)"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="14:30"
                  desc="Разминка III потока"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="15:00"
                  desc="III поток (юноши и девушки до 16 лет)"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="17:00"
                  desc="Общее награждение участников"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="17:20"
                  desc="Церемония открытия"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="17:40"
                  desc="Старт основного потока"
                  isMobile={isMobile}
                />
                <ProgramSchedule
                  date="19:30"
                  desc="Награждение. Церемония закрытия соревнований"
                  isMobile={isMobile}
                />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Programs;
