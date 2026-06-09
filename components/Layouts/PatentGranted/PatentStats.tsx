"use client";

import { Box, Container, Typography } from "@mui/material";

const stats = [
  {
    value: "44",
    label: "Patents Granted",
    color: "#7B53A1",
  },
  {
    value: "31",
    label: "🇺🇸 US Patents",
    color: "#EF4123",
  },
  {
    value: "13",
    label: "🇿🇦 SA Patents",
    color: "#F59E0B",
  },
  {
    value: "4",
    label: "Youngest Inventor (yrs)",
    color: "#5A8F3D",
  },
];

export default function PatentStats() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1232px",
        mx: "auto",
        px: { xs: 2, md: 0 },
        py: { xs: 3, md: 5 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          backgroundColor: "#fff",
          border: "1px solid #eee",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0px 8px 18px rgba(0,0,0,0.15)",
        }}
      >
        {stats.map((item, index) => (
          <Box
            key={index}
            sx={{
              px: { xs: 3, md: "25px" },
              py: { xs: 2.5, md: "20px" },
              minHeight: "96px",
              borderRight: {
                xs: index % 2 === 0 ? "1px solid #eee" : "none",
                md: index !== stats.length - 1 ? "1px solid #eee" : "none",
              },
              borderBottom: {
                xs: index < 2 ? "1px solid #eee" : "none",
                md: "none",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                lineHeight: "34px",
                fontWeight: 700,
                color: item.color,
              }}
            >
              {item.value}
            </Typography>

            <Typography
              sx={{
                mt: 0.8,
                fontSize: "11px",
                lineHeight: "16px",
                color: "#555",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}