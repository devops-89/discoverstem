"use client";

import { InfoCardItem } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";

interface InfoCardsSectionProps {
  data: InfoCardItem[];
  backgroundColor?: string;
}

export default function InfoCardsSection({
  data,
  backgroundColor = "#FAF5FF",
}: InfoCardsSectionProps) {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1232px",
          mx: "auto",
          py: { xs: 5, sm: 6, lg: "103px" }, // Scaled down vertical padding on mobile
          // 🔥 FIX: Prevented 'px: 0' from squishing text on iPads by shifting it to 'lg'
          px: { xs: 3, sm: 5, lg: 0 }, 
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // Stack on phones
              sm: "repeat(2, 1fr)", // 2 side-by-side on 768px iPads and up
              lg: "repeat(4, 290px)", // 4 side-by-side exactly 290px wide on 1440px desktop
            },
            justifyContent: "center",
            gap: { xs: 3, lg: "24px" }, // Responsive gap
          }}
        >
          {data.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: "100%",
                maxWidth: "290px",
                height: { xs: "auto", lg: "180.24px" }, // Allow natural height on mobile, rigid on desktop
                minHeight: "180.24px", // Ensures it never gets smaller than desktop design
                backgroundColor: "#FFFFFF",
                border: "0.8px solid rgba(0, 0, 0, 0.05)",
                boxShadow:
                  "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                p: { xs: "20px", lg: "24.8px" }, // Slightly softer padding on mobile
                mx: "auto",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0.6px",
                  textTransform: "uppercase",
                  color: "#737373",
                  mb: "8px",
                }}
              >
                {item.label}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "22px", lg: "24px" }, // Tiny scale down
                  lineHeight: { xs: "24px", lg: "26px" },
                  letterSpacing: "-0.6px",
                  color: item.color,
                  mb: "12px",
                }}
              >
                {item.value}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "13px", lg: "14px" }, // Tiny scale down
                  lineHeight: { xs: "20px", lg: "23px" },
                  color: "#525252",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}