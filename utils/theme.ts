import { createTheme } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    extended: any;
  }
  interface PaletteOptions {
    extended?: any;
  }
}

export const FONT_FAMILY = {
  heading: "'Work Sans',  sans-serif",
  body: "'Poppins', sans-serif",
  accent: " 'Inter', sans-serif",
};

export const FONT_SIZE = {
  // --- Micro & Small Text ---
  micro: "6px",
  nano: "9px",
  tiny: "10px",
  footnote: "11px",
  caption: "12px",
  small: "13px",

  // --- Body & Content ---
  bodySmall: "14px",
  body: "15px",
  bodyLarge: "16px",
  bodyXLarge: "17px",
  lead: "18px",
  leadLarge: "20px",

  // --- Titles & Cards ---
  titleSmall: "21px",
  title: "22px",
  titleLarge: "24px",
  cardHeadingSmall: "26px",
  cardHeading: "28px",
  cardHeadingLarge: "30px",

  // --- Article & Section Headings ---
  articleHeadingSmall: "31px",
  articleHeading: "32px",
  articleHeadingLarge: "34px",
  subSectionHeadingSmall: "35px",
  subSectionHeading: "36px",
  subSectionHeadingLarge: "38px",
  sectionHeadingSmall: "40px",
  sectionHeading: "42px",
  sectionHeadingLarge: "44px",

  // --- Page & Hero Headings ---
  pageHeadingSmall: "48px",
  pageHeading: "50px",
  pageHeadingLarge: "52px",
  heroHeading: "60px",
  mainHeading: "64px",
};

export const LINE_HEIGHT = {
  relativeTightest: "1.15",
  relativeTighter: "1.2",
  relativeTight: "1.3",
  micro: "12px",
  nano: "15px",
  extraSmall: "16px",
  lessSmall: "18px",
  small: "20px",
  mediumSmall: "22.75px",
  baseSmall: "23.4px",
  medium: "24px",
  mediumLarge: "26px",
  baseLarge: "26.88px",
  large: "29.6px",
  extraLarge: "32px",
  xl2: "34.56px",
  xl3: "41.4px",
  xl4: "43px",
  xl5: "46px",
  xl6: "48.75px",
  xl7: "54.6px",
  huge: "62px",
};

export const FONT_WEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EE4823", // DiscoverSTEM Orange
      light: "#FF7043",
      dark: "#EC532A",
      
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#7E57C2", // DiscoverSTEM Purple
      light: "#9A73C1",
      dark: "#6C4AB6",
      
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#FF4D2E",
    },
    warning: {
      main: "#F9A51E", // Accent Yellow
      light: "#F5AA33",
      dark: "#E6951A",
    },
    info: {
      main: "#0A66C2",
      dark: "#084E96",
    },
    success: {
      main: "#619040", // Accent Green
      light: "#6BAF6E",
      dark: "#5C9246",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#777777",
      700: "#616161",
      800: "#424242",
      900: "#222222",
    },
    text: {
      primary: "#101010",
      secondary: "#6E6E6E",
      disabled: "#919191",
    
    },
   
    background: {
      default: "#FFFFFF",
      paper: "#F9F9F9",
    
    },
    divider: "#E5E5E5",
    extended: {
      whites: {
        50: "#FFF",
        100: "#FFFFFF",
        200: "#F9FAFB",
        300: "#FAFAFA",
        400: "#F9F9F9",
        500: "#F7F7F7",
        600: "#F5F5F7",
        700: "#F5F5F5",
        800: "#F3F4F6",
        900: "#F4F4F4",
      },
      blacks: {
        50: "#262626",
        100: "#222",
        200: "#202020",
        300: "#1A1A1A",
        400: "#171717",
        500: "#111",
        600: "#101010",
        700: "#0A0A0A",
        800: "#060606",
        900: "#000",
        1000: "#000000",
      },
      grays: {
        50: "#F0F0F0",
        100: "#EEE",
        200: "#E5E7EB",
        300: "#E5E5E5",
        400: "#E0E0E0",
        500: "#D9D9D9",
        600: "#D3D3D3",
        700: "#CCC",
        800: "#C4C4C4",
        900: "#C3C3C3",
        1000: "#9CA3AF",
        1100: "#9E9E9E",
        1200: "#919191",
        1300: "#777",
        1400: "#777777",
        1500: "#6B7280",
        1600: "#737373",
        1700: "#6E6E6E",
        1800: "#676767",
        1900: "#666",
        2000: "#646464",
        2100: "#5C5C5C",
        2200: "#4B5563",
        2300: "#555",
        2400: "#555555",
        2500: "#525252",
        2600: "#474A55",
        2700: "#404040",
        2800: "#333",
      },
      purples: {
        50: "#FEFDFF",
        100: "#FDFBFE",
        200: "#FCF9FE",
        300: "#FAF5FF",
        400: "#FBF7FD",
        500: "#F9F5FD",
        600: "#F8F4FD",
        700: "#F7F2FC",
        800: "#F6EDFF",
        900: "#F6F0FC",
        1000: "#F4EFFA",
        1100: "#F5EEFB",
        1200: "#F4ECFB",
        1300: "#F3EDF7",
        1400: "#E6DDF5",
        1500: "#E9E3ED",
        1600: "#7E57C2",
        1700: "#6C4AB6",
        1800: "#7B53A1",
        1900: "#814D9F",
        2000: "#6A448F",
        2100: "#6A458D",
        2200: "#6A3E82",
        2300: "#1B0F2A",
      },
      oranges: {
        50: "#FFFEFC",
        100: "#FFFCFA",
        200: "#FFFDF9",
        300: "#FFFAF8",
        400: "#FFFCF6",
        500: "#FFF8F5",
        600: "#FFF6F3",
        700: "#FFFBF3",
        800: "#FFF5F2",
        900: "#FFF5F1",
        1000: "#FFFAF1",
        1100: "#FFF3EE",
        1200: "#FFF9EE",
        1300: "#FFF1EC",
        1400: "#FFF8EB",
        1500: "#FFF7E8",
        1600: "#FFEBE6",
        1700: "#FFF5E6",
        1800: "#FFF6E5",
        1900: "#FFD9CE",
        2000: "#FF7043",
        2100: "#F5AA33",
        2200: "#F9A51E",
        2300: "#EC532A",
        2400: "#F8A51E",
        2500: "#EE4823",
        2600: "#E6951A",
        2700: "#F59E0B",
        2800: "#B7791F",
      },
      blues: {
        50: "#0A66C2",
        100: "#4A5565",
        200: "#084E96",
        300: "#374151",
        400: "#1C2539",
        500: "#111827",
      },
      greens: {
        50: "#6BAF6E",
        100: "#5C9246",
        200: "#619040",
      },
      other: {
        50: "#FFFDFD",
        100: "#FF4D2E",
        200: "#EF4123",
        300: "#403",
      },
    }
  },

});
