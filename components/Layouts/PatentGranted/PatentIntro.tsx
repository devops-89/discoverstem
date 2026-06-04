"use client";

import { PatentIntroData } from "@/assets/Generic-data";
import { Container, Typography } from "@mui/material";

export default function PatentIntroSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 10, md: 10 },
      }}
    >
      <Typography
        sx={{
  
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "30px", md: "48px" },
          lineHeight: { xs: "38px", md: "62px" },
          color: "#111827",
          mb: 4,
        }}
      >
        {PatentIntroData.title}
      </Typography>

      <Typography
        sx={{
          maxWidth: "1060px",
          fontFamily: "Poppins, sans-serif",
          fontSize: { xs: "15px", md: "22px" },
          lineHeight: "32px",
          color: "#6B7280",
        }}
      >
        {PatentIntroData.description}
      </Typography>
    </Container>
  );
}