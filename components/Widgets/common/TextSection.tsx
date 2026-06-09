"use client";

import { CommonTextSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";

interface CommonTextSectionProps {
  data: CommonTextSectionData;
}

export default function CommonTextSection({
  data,
}: CommonTextSectionProps) {
  const hasContent =
    data.title || data.description || data.points?.length;

  if (!hasContent) return null;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: {
            xs:
              data.title &&
              (data.description || data.points?.length)
                ? 4
                : 0,
            md:
              data.title &&
              (data.description || data.points?.length)
                ? "70px"
                : 0,
          },
        }}
      >
        {/* Heading */}
        {data.title && (
          <Typography
            sx={{
              fontFamily: "Work Sans, sans-serif",
              fontWeight: 600,
              fontSize: {
                xs: "30px",
                sm: "38px",
                md: "48px",
              },
              lineHeight: {
                xs: "38px",
                sm: "48px",
                md: "62px",
              },
              letterSpacing: "-0.03em",
              color: "#111827",
            }}
          >
            {data.title}
          </Typography>
        )}

        {/* Description + Points */}
        {(data.description || data.points?.length) && (
          <Box>
            {data.description && (
              <Typography
                sx={{
                  width: "100%",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "22px",
                  },
                  lineHeight: {
                    xs: "30px",
                    sm: "34px",
                    md: "43px",
                  },
                  letterSpacing: "-0.03em",
                  color: "#777777",
                  whiteSpace: "pre-line",
                  mb: data.points?.length ? 2 : 0,
                }}
              >
                {data.description}
              </Typography>
            )}

            {data.points?.length ? (
              <Box
                component="ul"
                sx={{
                  pl: 3,
                  mt: 0,
                  mb: 0,
                }}
              >
                {data.points.map((point, index) => (
                  <Typography
                    component="li"
                    key={index}
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: {
                        xs: "15px",
                        md: "18px",
                      },
                      lineHeight: {
                        xs: "28px",
                        md: "34px",
                      },
                      color: "#111827",
                      mb: 1,
                    }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
            ) : null}
          </Box>
        )}
      </Box>
    </Container>
  );
}