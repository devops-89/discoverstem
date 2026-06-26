"use client";

import { FONT_FAMILY } from "@/utils/Fonts";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";

const PlayIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
    <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.2)" />
    <polygon points="10,8 18,12 10,16" fill="white" />
  </svg>
);

export default function OurYoungInnovators() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1196px",
        mx: "auto",
        py: { xs: 5, sm: 6, md: 7 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 4, lg: 6 }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: { xs: 5, md: 7, lg: 8 } }}
      >
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.heading,
              fontSize: {
                xs: "24px",
                sm: "34px",
                md: "38px",
                lg: "44px",
              },
              lineHeight: {
                xs: "36px",
                sm: "42px",
                md: "48px",
                lg: "52px",
              },
              fontWeight: 500,
              textAlign: { xs: "center", md: "left" },
              wordBreak: "break-word",
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

        <Grid
          size={{ xs: 12, md: 5.5 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              color: "#555",
              lineHeight: 1.7,
              fontSize: { xs: "15px", sm: "16px", md: "17px" },
              maxWidth: "100%",
            }}
          >
            The Texas House of Representatives passed a House Resolution #403,
            commemorating DiscoverSTEM&apos;s profound impact on shaping the next
            generation of innovators & leaders.
          </Typography>

          <Button
            component={Link}
            href="/success-stories/college-acceptance"
            variant="outlined"
            endIcon={<NorthEastIcon sx={{ fontSize: 18 }} />}
            sx={{
              mt: 3,
              mx: { xs: "auto", md: 0 },
              borderRadius: "999px",
              borderColor: "#ee4823",
              color: "#ee4823",
              px: 3,
              py: 1,
              fontWeight: 500,
              textTransform: "none",
              minWidth: "160px",
              "&:hover": {
                bgcolor: "#fff5f2",
                borderColor: "#ee4823",
              },
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>

      <Box
        sx={{
          borderRadius: { xs: "16px", md: "20px" },
          overflow: "hidden",
          position: "relative",
          height: { xs: 260, sm: 340, md: 420, lg: 476 },
          background: "#111",
        }}
      >
        {!isPlaying ? (
          <>
            <Box
              component="img"
              src="/Images/Home/YoungInnovators.png"
              alt="Watch how we make it work"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.75,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.15))",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, md: 3 },

                width: "100%",
                maxWidth: "500px",
              }}
            >
              <IconButton
                onClick={() => setIsPlaying(true)}
                sx={{
                  width: { xs: 50, md: 72 },
                  height: { xs: 50, md: 72 },
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
                  alignItems: { xs: "center", sm: "flex-start" },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: { xs: "18px", md: "24px" },
                  }}
                >
                  Watch
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  That&apos;s how we make it work?
                </Typography>
              </Box>
            </Box>
          </>
        ) : (
          <Box
            component="video"
            src="https://discoverstem.info/wp-content/uploads/2025/11/videoplayback.mp4"
            autoPlay
            controls
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </Box>
    </Container>
  );
}