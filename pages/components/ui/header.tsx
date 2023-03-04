import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  text: string;
}

const Header = ({ text }: Props) => {
  return (
    <Stack
      sx={{
        height: "96px",
        width: "650px",
        background: "linear-gradient(270deg, #EB605B 0%, #F0BC6E 100%)",
      }}
      alignItems={"center"}
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

export default Header;
