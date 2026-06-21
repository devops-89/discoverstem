
"use client";

import { OtherProgramsData } from "@/utils/Types";
import { ArrowBackIosNew, ArrowForward, NorthEast } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

interface OtherProgramsSectionProps {
  data: OtherProgramsData;
}

export default function OtherProgramsSection({
  data,
}: OtherProgramsSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        py: { xs: 5, sm: 6, lg: 6 },
        // 🔥 FIX: Prevented 'px: 0' from squishing text on iPads by shifting it to 'lg'
        px: { xs: 3, sm: 5, lg: 0 },
      }}
    >
      <Box sx={{ mb: { xs: 4, lg: "50px" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            mb: "5px",
          }}
        >
          <Box sx={{ width: { xs: "30px", lg: "50px" }, height: "1px", bgcolor: "#6E6E6E" }} />

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "13px", sm: "16px", lg: "22px" }, // Scaled for mobile
              lineHeight: { xs: "20px", sm: "28px", lg: "43px" }, // Scaled for mobile
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#777777",
            }}
          >
            {data.eyebrow}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "26px", sm: "36px", lg: "48px" }, // Scaled for mobile
            lineHeight: { xs: "36px", sm: "46px", lg: "62px" }, // Scaled for mobile
            letterSpacing: "-0.03em",
            color: "#111827",
          }}
        >
          {data.title}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          // 🔥 FIX: A tablet (900px wide) cannot fit two 570px columns.
          // Changed md to fluid '1fr 1fr', and restricted rigid '570px' to lg (desktop).
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "repeat(2, 570px)" },
          gap: { xs: 3, lg: "20px" },
          alignItems: "stretch",
        }}
      >
        {data.programs.map((program) => (
          <Box
            key={program.id}
            sx={{
              width: "100%",
              minHeight: "272px",
              bgcolor: "#FAF5FF",
              border: "0.8px solid rgba(0,0,0,0.05)",
              boxShadow:
                "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)",
              borderRadius: "16px",
              p: { xs: "20px", lg: "32.8px" }, // Softer padding for mobile screens
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                mb: "20px",
              }}
            >
              <Box
                sx={{
                  width: { xs: "40px", lg: "48px" }, // Shrunk slightly for mobile
                  height: { xs: "40px", lg: "48px" }, // Shrunk slightly for mobile
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, #7B53A1 0%, #EE4823 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "14px", lg: "16px" }, // Shrunk for mobile
                    lineHeight: { xs: "20px", lg: "24px" },
                    color: "#FFFFFF",
                  }}
                >
                  {program.shortName}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "16px", lg: "18px" }, // Shrunk for mobile
                  lineHeight: { xs: "24px", lg: "27px" },
                  letterSpacing: "-0.45px",
                  color: "#171717",
                }}
              >
                {program.title}
              </Typography>
            </Box>

            <Typography
              sx={{
                maxWidth: "538.4px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "14px", lg: "16px" }, // Shrunk for mobile
                lineHeight: { xs: "22px", lg: "26px" }, // Shrunk for mobile
                color: "#404040",
                flexGrow: 1,
                mb: "24px",
              }}
            >
              {program.description}
            </Typography>

          <Button
            component={Link}
            href={program.href}
            endIcon={
              <ArrowForward
                sx={{
                  fontSize: "16px",
                }}
              />
            }
            sx={{
              minWidth: { xs: "110px", lg: "126px" }, // Slightly smaller button on mobile
              height: { xs: "32px", lg: "36px" },
              borderRadius: "999px",
              bgcolor: "#171717",
              color: "#FFFFFF",
              px: { xs: "14px", lg: "17px" },
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: { xs: "12px", lg: "14px" },
              lineHeight: "20px",
              textTransform: "none",
              alignSelf: "flex-start",

              "&:hover": {
                bgcolor: "#171717",
              },

              "& .MuiButton-endIcon": {
                ml: "4px",
              },
            }}
          >
            {program.buttonText}
          </Button>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
