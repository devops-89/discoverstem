"use client";

import { InvestorsDescriptionData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Container, Typography } from "@mui/material";

export default function CenterDescriptionSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        
        px: { xs: 3, md: 4, lg: 0 },
        
        py: { xs: 5, md: 6, lg: 8 },
      }}
    >
      <Typography
        sx={{
          width: "100%",
          maxWidth: "1160px",
          fontFamily: FONT_FAMILY.body,
          fontWeight: 400,
          
          fontSize: {
            xs: "16px",
            md: "18px",
            lg: "22px",
          },
          lineHeight: {
            xs: "26px",
            md: "32px",
            lg: "43px",
          },
          letterSpacing: "-0.03em",
          textAlign: "center",
          color: "#777777",
          whiteSpace: "pre-line",
        }}
      >
        {InvestorsDescriptionData.description}
      </Typography>
    </Container>
  );
}