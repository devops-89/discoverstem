"use client";import { FONT_FAMILY } from "@/utils/theme";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


const theme = createTheme({
  typography: {
    fontFamily: FONT_FAMILY.body
  }
});

export default function Providers({ children }: {children: React.ReactNode;}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>);

}