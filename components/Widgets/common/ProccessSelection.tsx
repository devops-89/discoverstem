"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { FONT_FAMILY } from "@/utils/Fonts";
import VerticalStepper from "./VerticalSteppers";

const TOTAL_STEPS = 5;

export default function ProcessSection() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? TOTAL_STEPS - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev === TOTAL_STEPS - 1 ? 0 : prev + 1));
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 4, md: 8 },
        px: { xs: 3, md: 4 },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
        <Divider
          sx={{ width: 36, borderColor: "#9e9e9e", borderWidth: "1.5px" }}
        />
        <Typography
          sx={{
            width: { xs: "100%", md: "160px" },
            fontFamily: FONT_FAMILY.body,
            fontWeight: 400,
            color: "#777777",
            fontSize: "22px",
            letterSpacing: "0.03em",
            lineHeight: "43px",
          }}
        >
          Selection Flow
        </Typography>
      </Stack>

      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          width: { xs: "100%", md: "374px" },
          fontSize: { xs: 32, md: 48 },
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: "62px",
          mb: 5,
        }}
      >
        A Simple 5-step process
      </Typography>

      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontSize: 20,
              color: "#5C5C5C",
              lineHeight: "37px",
            }}
          >
            From signing up to presenting your breakthrough idea at the finale,
            this journey helps you build confidence, gain mentorship, and move
            closer to becoming America’s Top Young Innovator.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Box
              onClick={handlePrev}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#FF4D2E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <ArrowBackIcon sx={{ color: "#fff", fontSize: 20 }} />
            </Box>

            <Box
              onClick={handleNext}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#6C4AB6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <ArrowForwardIcon sx={{ color: "#fff", fontSize: 20 }} />
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }} sx={{ mt: { md: "-160px" } }}>
         <VerticalStepper activeStep={activeStep} setActiveStep={setActiveStep} />
        </Grid>
      </Grid>
    </Container>
  );
}