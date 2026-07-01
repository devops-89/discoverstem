"use client";import { FONT_WEIGHT, FONT_SIZE, FONT_FAMILY } from "@/utils/theme";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography } from
"@mui/material";
import React from "react";


import VerticalStepper from "./VerticalSteppers";

const TOTAL_STEPS = 5;

export default function ProcessSection() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handlePrev = () => {
    setActiveStep((prev) => prev === 0 ? TOTAL_STEPS - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveStep((prev) => prev === TOTAL_STEPS - 1 ? 0 : prev + 1);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 4, sm: 6, lg: 8 },
        px: { xs: 3, sm: 5, lg: 4 }
      }}>
      
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
        <Divider
          sx={{ width: 36, borderColor: "#9e9e9e", borderWidth: "1.5px" }} />
        
        <Typography
          sx={{
            width: { xs: "100%", lg: "160px" },
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            color: "#777777",
            fontSize: { xs: FONT_SIZE.bodyLarge, sm: FONT_SIZE.lead, lg: FONT_SIZE.title },
            letterSpacing: "0.03em",
            lineHeight: { xs: "28px", sm: "32px", lg: "43px" }
          }}>
          
          Selection Flow
        </Typography>
      </Stack>

      <Typography
        sx={{
          fontFamily: FONT_FAMILY.heading,
          width: { xs: "100%", lg: "374px" },
          fontSize: { xs: FONT_SIZE.cardHeadingSmall, sm: FONT_SIZE.subSectionHeading, lg: FONT_SIZE.pageHeadingSmall },
          fontWeight: FONT_WEIGHT.semiBold,
          letterSpacing: "-0.03em",
          lineHeight: { xs: "38px", sm: "46px", lg: "62px" },
          mb: { xs: 4, lg: 5 }
        }}>
        
        A Simple 5-step process
      </Typography>

      <Grid container spacing={{ xs: 4, lg: 6 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontSize: { xs: FONT_SIZE.body, sm: FONT_SIZE.lead, lg: FONT_SIZE.leadLarge },
              color: "#5C5C5C",
              lineHeight: { xs: "26px", sm: "32px", lg: "37px" }
            }}>
            
            From signing up to presenting your breakthrough idea at the finale,
            this journey helps you build confidence, gain mentorship, and move
            closer to becoming America’s Top Young Innovator.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: { xs: 4, lg: 3 }, mb: { xs: 5, md: 0 } }}>
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
                cursor: "pointer"
              }}>
              
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
                cursor: "pointer"
              }}>
              
              <ArrowForwardIcon sx={{ color: "#fff", fontSize: 20 }} />
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }} sx={{ mt: { xs: 0, md: "-100px", lg: "-160px" } }}>
         <VerticalStepper activeStep={activeStep} setActiveStep={setActiveStep} />
        </Grid>
      </Grid>
    </Container>);

}