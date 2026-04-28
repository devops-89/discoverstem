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
        maxWidth: "min(1196px, 100%)",
        pb: { xs: 5, md: 8 },
        px: { xs: 3, md: 4 },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
        <Divider
          sx={{ width: 36, borderColor: "#9e9e9e", borderWidth: "1.5px" }}
        />
        <Typography
          sx={{ color: "#6e6e6e", fontSize: 14, letterSpacing: "0.02em" }}
        >
          What we offer
        </Typography>
      </Stack>
      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          fontSize: { xs: 32, md: 50 },
          lineHeight: 1.15,
          mb: 3,
        }}
      >
        Our Program
      </Typography>

      <Grid container spacing={2} sx={{ alignItems: "stretch" }}>
        {/* Large left image */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              height: { xs: 300, md: "100%" },
              minHeight: { md: 670 },
            }}
          >
            <Box
              component="img"
              src={programs[0].image}
              alt={programs[0].title}
              sx={{ width: 1, height: 1, objectFit: "cover", display: "block" }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(0deg, rgba(4,4,4,0.55) 0%, transparent 50%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: 18, md: 22 },
                  fontWeight: 500,
                }}
              >
                {programs[0].title}
              </Typography>
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,0.18)",
                  border: "1.5px solid rgba(255,255,255,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                <ArrowIcon />
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right column: 2 stacked images */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2} sx={{ height: "100%" }}>
            {programs.slice(1).map((program) => (
              <Box
                key={program.title}
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "relative",
                  flex: 1,
                  minHeight: { xs: 200, md: 320 },
                }}
              >
                <Box
                  component="img"
                  src={program.image}
                  alt={program.title}
                  sx={{
                    width: 1,
                    height: 1,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(0deg, rgba(4,4,4,0.55) 0%, transparent 50%)",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 18,
                    left: 18,
                    right: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: { xs: 16, md: 20 },
                      fontWeight: 500,
                    }}
                  >
                    {program.title}
                  </Typography>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      bgcolor: "rgba(255,255,255,0.18)",
                      border: "1.5px solid rgba(255,255,255,0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      cursor: "pointer",
                      flexShrink: 0,
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
