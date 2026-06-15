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
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 6 },
      }}
    >
      <Box sx={{ mb: { xs: 4, md: "50px" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            mb: "5px",
          }}
        >
          <Box sx={{ width: "50px", height: "1px", bgcolor: "#6E6E6E" }} />

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "14px", md: "22px" },
              lineHeight: { xs: "24px", md: "43px" },
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
            fontSize: { xs: "32px", md: "48px" },
            lineHeight: { xs: "42px", md: "62px" },
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
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 570px)" },
          gap: { xs: 3, md: "20px" },
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
              p: { xs: "24px", md: "32.8px" },
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
                  width: "48px",
                  height: "48px",
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
                    fontSize: "16px",
                    lineHeight: "24px",
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
                  fontSize: "18px",
                  lineHeight: "27px",
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
                fontSize: "16px",
                lineHeight: "26px",
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
    minWidth: "126px",
    height: "36px",
    borderRadius: "999px",
    bgcolor: "#171717",
    color: "#FFFFFF",
    px: "17px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: "14px",
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