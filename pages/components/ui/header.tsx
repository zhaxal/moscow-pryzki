import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  isMobile: boolean;
}

const Header = ({ text, isMobile }: Props) => {
  return (
    <Stack
      sx={{
        height: isMobile ? "96px" : "64px",
        width: isMobile ? "40%" : "87%",
        background: "linear-gradient(270deg, #EB605B 0%, #F0BC6E 100%)",
        justifyContent: "center",
        pl: isMobile ? "0px" : "30px",
      }}
      alignItems={isMobile ? "center" : "flex-start"}
    >
      <Typography
        variant="header"
        sx={{ fontSize: isMobile ? "64px" : "48px", lineHeight: "83px" }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default Header;
