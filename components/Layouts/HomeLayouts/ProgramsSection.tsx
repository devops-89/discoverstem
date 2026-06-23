"use client";

import { programs } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function ProgramsSection() {
  return (
    <Container
      id="programs"
      maxWidth={false}
      sx={{
        maxWidth: "1196px",
        mx: "auto",
        pb: { xs: 5, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        justifyContent={{ xs: "flex-start", md: "flex-start" }}
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
          What we offer
        </Typography>
      </Stack>

      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontSize: {
            xs: "30px",
            sm: "36px",
            md: "44px",
            lg: "50px",
          },
          lineHeight: {
            xs: "38px",
            sm: "44px",
            md: "52px",
            lg: "58px",
          },
          mb: { xs: 3, md: 4 },
          textAlign: { xs: "left", md: "left" },
        }}
      >
        Our Program
      </Typography>

      <Grid container spacing={{ xs: 2.5, md: 2 }} sx={{ alignItems: "stretch" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              borderRadius: { xs: "14px", md: "16px" },
              overflow: "hidden",
              position: "relative",
              height: {
                xs: 300, 
                sm: 380, 
                md: "100%",
              },
              minHeight: {
                md: 560,
                lg: 670,
              },
            }}
          >
            <Box
              component="img"
              src={programs[0].image}
              alt={programs[0].title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(0deg, rgba(4,4,4,0.62) 0%, rgba(4,4,4,0.25) 45%, transparent 75%)",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: { xs: 16, md: 20 },
                left: { xs: 16, md: 20 },
                right: { xs: 16, md: 20 },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "14px", sm: "20px", md: "22px" },
                  lineHeight: { xs: "24px", md: "30px" },
                  fontWeight: 500,
                  wordBreak: "break-word",
                }}
              >
                {programs[0].title}
              </Typography>

              <Box
                component={Link}
                href={programs[0].link}
                sx={{
                  width: { xs: 38, md: 42 },
                  height: { xs: 38, md: 42 },
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,0.18)",
                  border: "1.5px solid rgba(255,255,255,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                  flexShrink: 0,
                  textDecoration: "none",
                }}
              >
                <ArrowIcon />
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={{ xs: 2.5, md: 2 }} sx={{ height: "100%" }}>
            {programs.slice(1).map((program) => (
              <Box
                key={program.title}
                sx={{
                  borderRadius: { xs: "14px", md: "16px" },
                  overflow: "hidden",
                  position: "relative",
                  flex: 1,
                  minHeight: {
                    xs: 300, 
                    sm: 380, 
                    md: 270,
                    lg: 326,
                  },
                }}
              >
                <Box
                  component="img"
                  src={program.image}
                  alt={program.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(0deg, rgba(4,4,4,0.62) 0%, rgba(4,4,4,0.25) 45%, transparent 75%)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 16, md: 18 },
                    left: { xs: 16, md: 18 },
                    right: { xs: 16, md: 18 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "14px", sm: "18px", md: "20px" },
                      lineHeight: { xs: "23px", md: "28px" },
                      fontWeight: 500,
                      wordBreak: "break-word",
                    }}
                  >
                    {program.title}
                  </Typography>

                  <Box
                    component={Link}
                    href={program.link}
                    sx={{
                      width: { xs: 36, md: 38 },
                      height: { xs: 36, md: 38 },
                      borderRadius: "50%",
                      bgcolor: "rgba(255,255,255,0.18)",
                      border: "1.5px solid rgba(255,255,255,0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      cursor: "pointer",
                      flexShrink: 0,
                      textDecoration: "none",
                    }}
                  >
                    <ArrowIcon />
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}