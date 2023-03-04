import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

interface HeaderProps {
  text: string;
}

interface DateProps {
  date: string;
  desc: string;
}

const ProgramHeader = ({ text }: HeaderProps) => {
  return (
    <Stack
      sx={{
        minHeight: "96px",
        width: "253px",
        background: "linear-gradient(270deg, #EB605B 0%, #F0BC6E 100%)",
        alignItems: "center",
      }}
    >
      <Typography
        variant="header"
        sx={{ fontSize: "64px", lineHeight: "83px" }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

const ProgramSchedule = ({ date, desc }: DateProps) => {
  return (
    <Stack
      sx={{
        minHeight: "57px",
        maxWidth: "540px",
        background: "#F2F2F2",
        alignItems: "center",
        px: "8px",
      }}
      direction={"row"}
    >
      <Typography
        sx={{
          fontSize: "24px",
          lineHeight: "22.97px",
          fontWeight: 700,
          fontFamily: "Gotham Pro Bold",
          width: "31%",
        }}
      >
        {date}
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
          lineHeight: "22.97px",
          fontWeight: 400,
          fontFamily: "Gotham Pro Light",
          width: "69%",
        }}
      >
        {desc}
      </Typography>
    </Stack>
  );
};

const Programs = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(218.58deg, #83D0F7 10.35%, #8D98DA 94.68%)",
        minHeight: "1024px",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: "url(/images/bg/programs.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
          position: "absolute",
          height: "100%",
          pt: "77px",
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
            sx={{ fontSize: "96px", lineHeight: "76.8px" }}
          >
            ПРОГРАММА
          </Typography>
        </Stack>
        <Container disableGutters sx={{ mt: "119px" }}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"column"} spacing={"56px"} alignItems={"center"}>
              <ProgramHeader text="11 марта" />
              <Stack direction={"column"} spacing={"8px"}>
                <ProgramSchedule
                  date="10:00-12:30"
                  desc="I поток (до 14 лет и моложе)"
                />
                <ProgramSchedule
                  date="12:30-13:30"
                  desc="Разминка II потока. Награждение I потока."
                />
                <ProgramSchedule
                  date="13:30-16:00"
                  desc="II поток (юноши и девушки до 16 лет)"
                />
                <ProgramSchedule
                  date="16:00-17:00"
                  desc="Разминка III потока. Награждение II потока"
                />
                <ProgramSchedule
                  date="17:00-19:30"
                  desc="III поток (юноши и девушки до 18 лет)"
                />
                <ProgramSchedule
                  date="19:30-19:45"
                  desc="Награждение III потока"
                />
              </Stack>
            </Stack>
            <Stack direction={"column"} spacing={"56px"} alignItems={"center"}>
              <ProgramHeader text="12 марта" />
              <Stack direction={"column"} spacing={"8px"}>
                <ProgramSchedule
                  date="11:30-14:00"
                  desc="I поток (юниоры и юниорки до 20 лет)"
                />
                <ProgramSchedule date="14:00-15:00" desc="Разминка II потока" />
                <ProgramSchedule
                  date="15:00-17:30"
                  desc="II поток (мужчины и женщины)"
                />
                <ProgramSchedule
                  date="17:40-18:00"
                  desc="Церемония открытия соревнований"
                />
                <ProgramSchedule
                  date="18:00-20:00"
                  desc="Основной поток (сильнейшие спортсмены)"
                />
                <ProgramSchedule
                  date="20:00-20:30"
                  desc="Награждение. Церемония закрытия соревнований."
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
