"use client";import { FONT_WEIGHT, FONT_SIZE, FONT_FAMILY } from "@/utils/theme";

import { mirzaFaizan } from "@/assets/Generic-data";

import { Container, Typography } from "@mui/material";

const FounderBio = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 }
      }}>
      
      <Typography
        sx={{
          width: { xs: "100%", lg: "273px" },
          height: { xs: "auto", lg: "24px" },
          fontFamily: FONT_FAMILY.heading,
          fontWeight: FONT_WEIGHT.semiBold,
          fontSize: { xs: FONT_SIZE.titleLarge, sm: FONT_SIZE.cardHeading, md: FONT_SIZE.articleHeading, lg: FONT_SIZE.subSectionHeading },
          lineHeight: { xs: "32px", md: "40px", lg: "46px" },
          letterSpacing: "-0.02em",
          color: "#111827",
          // 🔥 FIX: Changed from "left" to perfectly center on small screens
          textAlign: { xs: "center", md: "left" } 
        }}>
        
        Short Biography
      </Typography>

      <Typography
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", lg: "1160px" },
          height: { xs: "auto", lg: "77px" },
          mt: { xs: 3, md: 4, lg: 6 },
          fontFamily: FONT_FAMILY.body,
          fontSize: { xs: FONT_SIZE.bodySmall, sm: FONT_SIZE.bodyLarge, md: FONT_SIZE.bodyXLarge, lg: FONT_SIZE.lead },
          lineHeight: { xs: "24px", md: "28px", lg: "32px" },
          color: "#474A55",
          // 🔥 FIX: Changed from "left" to perfectly center on small screens
          textAlign: { xs: "center", md: "left" } 
        }}>
        
        {mirzaFaizan.shortBio}
      </Typography>
    </Container>);

};

export default FounderBio;