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
        py: { xs: 1, sm: 4, lg: 10 },
        px: { xs: 3, sm: 5, lg: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, sm: 4, lg: "70px" }, 
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "24px", sm: "36px", lg: "48px" }, 
            lineHeight: { xs: "38px", sm: "46px", lg: "62px" },
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
            fontSize: { xs: "15px", sm: "18px", lg: "22px" }, 
            lineHeight: { xs: "26px", sm: "32px", lg: "43px" }, 
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