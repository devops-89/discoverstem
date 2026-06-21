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
        // 🔥 FIX: Added padding on 'md' to prevent text from touching the screen corner on 1024px iPads
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 4, md: 10 },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "28px", sm: "32px", md: "48px" },
          lineHeight: { xs: "36px", sm: "40px", md: "62px" },
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
          fontSize: { xs: "15px", sm: "16px", md: "22px" },
          lineHeight: { xs: "26px", sm: "28px", md: "32px" },
          color: "#6B7280",
        }}
      >
        {PatentIntroData.description}
      </Typography>
    </Container>
  );
}