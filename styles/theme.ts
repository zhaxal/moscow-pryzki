import React from "react";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    cover: React.CSSProperties;
    header: React.CSSProperties;
    body: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    cover?: React.CSSProperties;
    header?: React.CSSProperties;
    body?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    cover: true;
    header: true;
    body: true;
  }
}

const theme = createTheme({
  typography: {
    cover: {
      fontFamily: "Exo2-Light",
      color: "white",
      fontWeight: 400,
      textTransform: "uppercase",
    },
    header: {
      fontFamily: "Mossport",
      fontWeight: 400,
      textTransform: "uppercase",
      color: "white",
    },
    body: {
      fontFamily: "Gotham Pro Regular",
      fontWeight: 400,
    },
  },
});

export default theme;
