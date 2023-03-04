import { Alert, Stack } from "@mui/material";
import { Box } from "@mui/system";
import About from "./components/about-block";
import Cover from "./components/cover-block";
import Festival from "./components/festival-block";
import Programs from "./components/programs-block";
import Stream from "./components/stream-block";
import WinnersCarousel from "./components/winners-block";

export default function Home() {
  return (
    <Stack sx={{ direction: "column", width: "100%" }}>
      <Cover />
      <About />
      <Festival />
      <Box
        sx={{
          backgroundImage: "url(/images/bg/runningMan.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "700px",
        }}
      />
      <Programs />
      <Stream />
      <WinnersCarousel />
      {/* <Alert variant="filled" severity="warning">
        Сайт находится в разработке
      </Alert> */}
    </Stack>
  );
}
