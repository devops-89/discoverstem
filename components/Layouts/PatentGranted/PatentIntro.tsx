"use client";import { FONT_FAMILY, FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { PatentIntroData } from "@/assets/Generic-data";
import { Container, Typography } from "@mui/material";

export default function PatentIntroSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 2, md: 10 }
      }}>
      
      <Typography
        sx={{
          // 🔥 FIX: Centers title on small screens, aligns left on lg screens
          textAlign: { xs: "center", lg: "left" }, 
          fontFamily: FONT_FAMILY.heading,
          fontWeight: FONT_WEIGHT.bold,
          fontSize: { xs: FONT_SIZE.cardHeading, sm: FONT_SIZE.articleHeading, md: FONT_SIZE.pageHeadingSmall },
          lineHeight: { xs: "30px", sm: "40px", md: "62px" },
          color: "#111827",
          mb: 4
        }}>
        
        {PatentIntroData.title}
      </Typography>

      <Typography
        sx={{
          // 🔥 FIX: Centers description on small screens, aligns left on lg screens
          textAlign: { xs: "center", lg: "left" }, 
          maxWidth: "1060px",
          fontFamily: FONT_FAMILY.body,
          fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.bodyLarge, md: FONT_SIZE.title },
          lineHeight: { xs: "26px", sm: "28px", md: "32px" },
          color: "#6B7280"
        }}>
        
        {PatentIntroData.description}
      </Typography>
    </Container>);

}