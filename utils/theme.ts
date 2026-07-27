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
  micro: "6px",
  nano: "9px",
  tiny: "10px",
  footnote: "11px",
  caption: "12px",
  small: "13px",
  bodySmall: "14px",
  body: "15px",
  bodyLarge: "16px",
  bodyXLarge: "17px",
  lead: "18px",
  leadLarge: "20px",
  titleSmall: "21px",
  title: "22px",
  titleLarge: "24px",
  cardHeadingSmall: "26px",
  cardHeading: "28px",
  cardHeadingLarge: "30px",
  articleHeadingSmall: "31px",
  articleHeading: "32px",
  articleHeadingLarge: "34px",
  subSectionHeadingSmall: "35px",
  subSectionHeading: "36px",
  subSectionHeadingLarge: "38px",
  sectionHeadingSmall: "40px",
  sectionHeading: "42px",
  sectionHeadingLarge: "44px",
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
      main: "#EE4823", 
      light: "#FF7043",
      dark: "#EC532A",
      
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#7E57C2", 
      light: "#9A73C1",
      dark: "#6C4AB6",
      
      contrastText: "#FFFFFF",
    },
    heading:{
      main:" #000000 ",
      light:"#111827",

    },
    highlight:{
     main:"#777777"
  
    },
    error: {
      main: "#FF4D2E",
    },
    warning: {
      main: "#F9A51E", 
      light: "#F5AA33",
      dark: "#E6951A",
    },
    info: {
      main: "#0A66C2",
      dark: "#084E96",
    },
    success: {
      main: "#619040", 
      light: "#6BAF6E",
      dark: "#5C9246",
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
   
  },

});
