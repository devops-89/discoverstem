
"use client";

import { stepsData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Step } from "@/utils/Types";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

interface VerticalStepperProps {
  activeStep: number;
  setActiveStep?: (index: number) => void;
}

export default function VerticalStepper({
  activeStep,
  setActiveStep,
}: VerticalStepperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = stepRefs.current[activeStep];

    if (el && containerRef.current) {
      containerRef.current.scrollTo({
        top: el.offsetTop - 40,
        behavior: "smooth",
      });
    }
  }, [activeStep]);

  const handleClick = (index: number) => {
    if (setActiveStep) {
      setActiveStep(index);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        minHeight: { xs: "400px", md: "500px", lg: "600px" }, // 🔥 FIX: Scaled down heights so it fits on a phone screen
        mb: 4,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 8,
          top: 0,
          bottom: 0,
          width: "2px",
          bgcolor: "#6BAF6E",
        }}
      />

      <Box
        ref={containerRef}
        sx={{
          height: { xs: "400px", md: "500px", lg: "600px" }, // Matches minHeight above
          overflowY: "auto",
          pl: 5,
          width: "100%",

          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#E0E0E0",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#7E57C2",
            borderRadius: "10px",
          },
        }}
      >
        {stepsData.map((item: Step, index: number) => (
          <Box
            key={index}
            ref={(el: HTMLDivElement | null) => {
              stepRefs.current[index] = el;
            }}
            onClick={() => handleClick(index)}
            sx={{
              position: "relative",
              mb: 6,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "-36px",
                top: 0, 
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: index <= activeStep ? "#6BAF6E" : "#D3D3D3",
                transition: "0.3s",
              }}
            />

            <Box
              sx={{
                width: { xs: "fit-content", lg: "131px" }, // 🔥 FIX: Prevent pill from stretching 100% on xs
                minWidth: { xs: "100px", lg: "131px" },
                height: { xs: "auto", lg: "60px" },
                display: "inline-block",
                px: { xs: 2, lg: 3 },
                py: { xs: "4px", lg: "4px" },
                borderRadius: "55px",
                border: "1px solid #6BAF6E",
                color: "#7E57C2",
                fontSize: { xs: "14px", lg: "20px" }, // Scaled down for mobile
                lineHeight: { xs: "30px", lg: "50px" }, // Scaled down for mobile
                textAlign: "center", // Ensures text is centered perfectly in the pill
                mb: { xs: 2, lg: 1 },
                background: "#F9F9F9",
              }}
            >
              {item.step}
            </Box>

            <Typography
              sx={{
                width: { xs: "100%", lg: "587px" }, // Protected desktop width
                height: { xs: "auto", lg: "28px" },
                fontFamily: FONT_FAMILY.heading,
                fontWeight: 600,
                lineHeight: { xs: "32px", lg: "28px" }, // Extra line-height on mobile for wrapped text
                fontSize: { xs: "22px", lg: "28px" }, // Scaled down for mobile
                mt: 1,
                mb: { xs: 2, lg: 1 },
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                width: { xs: "100%", lg: "587px" }, // Protected desktop width
                height: "auto",
                fontFamily: FONT_FAMILY.body,
                fontSize: { xs: "16px", lg: "20px" }, // Scaled down for mobile
                color: "#777",
                lineHeight: { xs: "26px", lg: "28px" }, // Scaled down for mobile
                fontWeight: 400,
                whiteSpace: "pre-line",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
