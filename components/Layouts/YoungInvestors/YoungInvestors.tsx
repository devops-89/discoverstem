"use client";import { FONT_WEIGHT, FONT_SIZE, FONT_FAMILY } from "@/utils/theme";

import { InvestorsDescriptionData } from "@/assets/Generic-data";

import { Container, Typography } from "@mui/material";

export default function CenterDescriptionSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",

        px: { xs: 3, md: 4, lg: 0 },

        py: { xs: 5, md: 6, lg: 8 }
      }}>
      
      <Typography
        sx={{
          width: "100%",
          maxWidth: "1160px",
          fontFamily: FONT_FAMILY.body,
          fontWeight: FONT_WEIGHT.regular,

          fontSize: {
            xs: FONT_SIZE.bodyLarge,
            md: FONT_SIZE.lead,
            lg: FONT_SIZE.title
          },
          lineHeight: {
            xs: "26px",
            md: "32px",
            lg: "43px"
          },
          letterSpacing: "-0.03em",
          textAlign: "center",
          color: "#777777",
          whiteSpace: "pre-line"
        }}>
        
        {InvestorsDescriptionData.description}
      </Typography>
    </Container>);

}