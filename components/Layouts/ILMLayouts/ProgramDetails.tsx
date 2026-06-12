"use client";

import { programDetailsData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";

export default function ProgramDetailsSection() {
  const data = programDetailsData;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1161px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: "70px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "32px", md: "48px" },
            lineHeight: { xs: "42px", md: "62px" },
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
            fontSize: { xs: "16px", md: "22px" },
            lineHeight: { xs: "30px", md: "43px" },
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