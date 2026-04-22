"use client";
import React from "react";
import { Container, Stack, Divider, Typography, Grid, Card, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { featureCards } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";

const featureIconColors: Record<string, string> = {
  "Nurturing Prodigies": "rgba(123,83,161,0.18)",
  "Inspiring Innovation": "rgba(238,72,35,0.14)",
  "Launching Startups": "rgba(249,165,30,0.18)",
  "Expert Mentors": "rgba(97,144,64,0.18)",
};

const featureIcons: Record<string, React.ReactNode> = {
  "Nurturing Prodigies": <AutoAwesomeIcon sx={{ color: "#7b53a1", fontSize: 26 }} />,
  "Inspiring Innovation": <EmojiObjectsIcon sx={{ color: "#ee4823", fontSize: 26 }} />,
  "Launching Startups": <RocketLaunchIcon sx={{ color: "#f9a51e", fontSize: 26 }} />,
  "Expert Mentors": <PeopleAltIcon sx={{ color: "#619040", fontSize: 26 }} />,
};

export default function WhatWeDoSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        pb: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
        <Divider sx={{ width: 36, borderColor: "#9e9e9e", borderWidth: "1.5px" }} />
        <Typography sx={{ color: "#6e6e6e", fontSize: 14, letterSpacing: "0.02em" }}>
          What we do
        </Typography>
      </Stack>
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontSize: { xs: 32, md: 50 },
          lineHeight: 1.15,
          mb: 4,
        }}
      >
        Welcome to DiscoverStem
      </Typography>

      <Grid container spacing={3}>
        {featureCards.map((card) => (
          <Grid size={{ xs: 12, md: 6 }} key={card.title}>
            <Card
              elevation={0}
              sx={{
                border: `3px solid ${card.borderColor}`,
                borderRadius: "24px",
                p: 3,
                minHeight: 322,
                bgcolor: "#fff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2,
                  bgcolor: featureIconColors[card.title] ?? "rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  mb: 2.5,
                }}
              >
                {featureIcons[card.title]}
              </Box>
              <Typography
                sx={{
                  fontFamily: FONT_FAMILY.heading,
                  fontSize: { xs: 22, md: 28 },
                  mb: 1.5,
                  lineHeight: 1.2,
                }}
              >
                {card.title}
              </Typography>
              <Typography sx={{ color: "#4a5565", lineHeight: 1.7, fontSize: 15, flex: 1 }}>
                {card.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
