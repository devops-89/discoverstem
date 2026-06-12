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
          px: { xs: 3, md: 0 },
          py: { xs: 6, md: "103px" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 290px)",
            },
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {data.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: "100%",
                maxWidth: "290px",
                height: "180.24px",
                backgroundColor: "#FFFFFF",
                border: "0.8px solid rgba(0, 0, 0, 0.05)",
                boxShadow:
                  "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                p: "24.8px",
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
                  fontSize: "24px",
                  lineHeight: "26px",
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
                  fontSize: "14px",
                  lineHeight: "23px",
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