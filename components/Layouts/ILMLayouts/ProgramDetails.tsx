"use client";

import { ProgramDetailsData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";

export default function ProgramDetailsSection() {
  const data = ProgramDetailsData;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1161px",
        mx: "auto",
        py: { xs: 3, sm: 6, lg: 10 },
        // 🔥 FIX: Prevented 'px: 0' from squishing text on iPads by shifting it to 'lg'
        px: { xs: 3, sm: 5, lg: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 3, sm: 4, lg: "70px" }, // Scaled down gap on mobile
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "28px", sm: "36px", lg: "48px" }, // Scaled for mobile
            lineHeight: { xs: "38px", sm: "46px", lg: "62px" }, // Scaled for mobile
            letterSpacing: "-0.03em",
            color: "#111827",
          }}
        >
          {data.title}
        </Typography>

        <Typography
          sx={{
            whiteSpace: "pre-line",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "15px", sm: "18px", lg: "22px" }, // Scaled for mobile
            lineHeight: { xs: "26px", sm: "32px", lg: "43px" }, // Scaled for mobile
            letterSpacing: "-0.03em",
            color: "#777777",
          }}
        >
          {data.description}
        </Typography>
      </Box>
    </Container>
  );
}