"use client";
import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { FONT_FAMILY } from "@/utils/Fonts";

const PlayIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
    <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.2)" />
    <polygon points="10,8 18,12 10,16" fill="white" />
  </svg>
);

export default function OurYoungInnovators() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
      }}
    >
      {/* Top row: Title left + Description + CTA right */}
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ mb: { xs: 5, md: 8 } }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.heading,
              fontSize: { xs: 30, md: 44 },
              lineHeight: 1.18,
              fontWeight: 500,
            }}
          >
            Texas State Capitol Honors{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #814D9F 6.25%, #EC532A 15.87%, #F5AA33 27.4%, #5C9246 43.75%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DiscoverSTEM
            </Box>{" "}
            and Our Young Innovators
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 5.5 }}>
          <Typography
            sx={{
              color: "#555",
              lineHeight: 1.7,
              fontSize: { xs: 15, md: 17 },
            }}
          >
            The Texas House of Representatives passed a House Resolution #403, commemorating DiscoverSTEM&apos;s profound impact on shaping the next generation of innovators & leaders.
            
          </Typography>
          <Button
            variant="outlined"
            endIcon={<span style={{ fontSize: 18 }}>↗</span>}
            sx={{
              mt: 3,
              borderRadius: 999,
              borderColor: "#ee4823",
              color: "#ee4823",
              px: 3,
              py: 1,
              fontWeight: 500,
              textTransform: "none",
              "&:hover": { bgcolor: "#fff5f2", borderColor: "#ee4823" },
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>

      {/* Video section */}
      <Box
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
          position: "relative",
          height: { xs: 260, md: 476 },
          background: "#111",
        }}
      >
        <Box
          component="img"
          src="/Images/Home/YoungInnovators.png"
          alt="Watch how we make it work"
          sx={{
            position: "absolute",
            inset: 0,
            width: 1,
            height: 1,
            objectFit: "cover",
            opacity: 0.75,
          }}
        />
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.15))",
          }}
        />
        {/* Play button + text */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 3,
          }}
        >
          <IconButton
            sx={{
              width: 72,
              height: 72,
              bgcolor: "rgba(255,255,255,0.18)",
              border: "2px solid rgba(255,255,255,0.7)",
              color: "#fff",
              "&:hover": { bgcolor: "rgba(255,255,255,0.28)" },
            }}
          >
            <PlayIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: { xs: 18, md: 24 },
              }}
            >
              Watch
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: { xs: 14, md: 16 },
              }}
            >
              That&apos;s how we make it work?
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
