"use client";

import { featureCards } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const featureIconColors: Record<string, string> = {
  "Nurturing Prodigies": "rgba(123,83,161,0.18)",
  "Inspiring Innovation": "rgba(238,72,35,0.14)",
  "Launching Startups": "rgba(249,165,30,0.18)",
  "Expert Mentors": "rgba(97,144,64,0.18)",
};

const featureIcons: Record<string, React.ReactNode> = {
  "Nurturing Prodigies": (
    <AutoAwesomeIcon sx={{ color: "#7b53a1", fontSize: { xs: 22, md: 26 } }} />
  ),
  "Inspiring Innovation": (
    <EmojiObjectsIcon sx={{ color: "#ee4823", fontSize: { xs: 22, md: 26 } }} />
  ),
  "Launching Startups": (
    <RocketLaunchIcon sx={{ color: "#f9a51e", fontSize: { xs: 22, md: 26 } }} />
  ),
  "Expert Mentors": (
    <PeopleAltIcon sx={{ color: "#619040", fontSize: { xs: 22, md: 26 } }} />
  ),
};

export default function WhatWeDoSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1196px",
        mx: "auto",
        pb: { xs: 5, sm: 6, md: 7 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        justifyContent={{ xs: "center", md: "flex-start" }}
        sx={{ mb: { xs: 1.5, md: 1 } }}
      >
        <Divider
          sx={{
            width: { xs: 28, md: 36 },
            borderColor: "#9e9e9e",
            borderWidth: "1.5px",
          }}
        />

        <Typography
          sx={{
            color: "#6e6e6e",
            fontSize: { xs: "13px", md: "14px" },
            letterSpacing: "0.02em",
          }}
        >
          What we do
        </Typography>
      </Stack>

      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontSize: {
            xs: "24px",
            sm: "34px",
            md: "42px",
            lg: "50px",
          },
          lineHeight: {
            xs: "30px",
            sm: "42px",
            md: "50px",
            lg: "58px",
          },
          mb: { xs: 3, md: 4 },
          textAlign: { xs: "center", md: "left" },
          wordBreak: "break-word",
        }}
      >
        Welcome to DiscoverStem
      </Typography>

      <Grid container spacing={{ xs: 2.5, sm: 3, md: 3 }}>
        {featureCards.map((card) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={card.title}>
           <Card
  elevation={0}
  sx={{
    border: `3px solid ${card.borderColor}`,
    borderRadius: { xs: "18px", md: "24px" },
    p: { xs: 2.5, sm: 3, md: 3 },
    minHeight: { xs: "auto", sm: 310, md: 322 },
    bgcolor: "#fff",
    display: "flex",
    flexDirection: "column",

    alignItems: "flex-start",
    textAlign: "left",
  }}
>
  <Box
    sx={{
      width: { xs: 50, md: 56 },
      height: { xs: 50, md: 56 },
      borderRadius: 2,
      bgcolor:
        featureIconColors[card.title] ?? "rgba(0,0,0,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mb: { xs: 2, md: 2.5 },
      flexShrink: 0,
      alignSelf: "flex-start",
    }}
  >
    {featureIcons[card.title]}
  </Box>

  <Typography
    sx={{
      fontFamily: FONT_FAMILY.heading,
      fontSize: {
        xs: "21px",
        sm: "22px",
        md: "26px",
        lg: "28px",
      },
      mb: 1.5,
      lineHeight: 1.2,
      wordBreak: "break-word",
      width: "100%",
      textAlign: "left",
    }}
  >
    {card.title}
  </Typography>

  <Typography
    sx={{
      color: "#4a5565",
      lineHeight: { xs: 1.6, md: 1.7 },
      fontSize: { xs: "14px", md: "15px" },
      width: "100%",
      textAlign: "left",
      flex: 1,
    }}
  >
    {card.description}
  </Typography>
</Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}