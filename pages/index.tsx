import { Alert, Stack, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Script from "next/script";
import { useRef } from "react";
import About from "./components/about-block";
import Cover from "./components/cover-block";
import Festival from "./components/festival-block";
import Footer from "./components/footer-block";
import GalleryBlock from "./components/gallery-block";
import Partners from "./components/partners-block";
import Programs from "./components/programs-block";
import Stream from "./components/stream-block";
import WinnersCarousel from "./components/winners-block";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  const scrollRef = useRef(null);

  return (
    <Stack sx={{ direction: "column", width: "100%" }}>
      <Cover isMobile={isMobile} scrollRef={scrollRef} />
      <About isMobile={isMobile} />
      <Festival isMobile={isMobile} />
      <Box
        sx={{
          backgroundImage: isMobile
            ? "url(/images/bg/runningMan.png)"
            : "url(/images/bg/mobile/runningMan.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          minHeight: isMobile ? "700px" : "294px",
          objectFit: "cover",
        }}
      />
      <Programs isMobile={isMobile} scrollRef={scrollRef} />
      <Stream isMobile={isMobile} />
      <WinnersCarousel isMobile={isMobile} />
      <GalleryBlock isMobile={isMobile} />
      <Partners isMobile={isMobile} />
      <Footer isMobile={isMobile} />
      {/* <Alert variant="filled" severity="warning">
        Сайт находится в разработке
      </Alert> */}
    </Stack>
  );
}
