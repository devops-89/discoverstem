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
        // 🔥 FIX: Added padding on 'md' to prevent text touching the screen corner on 1024px iPads, preserved 0 on 1440px!
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 6, lg: 10 },
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
            lg:
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
              // 🔥 FIX: Shrunk heading for mobile/tablets, exactly 48px on 1440px
              fontSize: {
                xs: "28px",
                sm: "32px",
                md: "36px",
                lg: "48px",
              },
              lineHeight: {
                xs: "36px",
                sm: "40px",
                md: "44px",
                lg: "62px",
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
                  // 🔥 FIX: Shrunk description for mobile/tablets, exactly 22px on 1440px
                  fontSize: {
                    xs: "15px",
                    sm: "16px",
                    md: "18px",
                    lg: "22px",
                  },
                  lineHeight: {
                    xs: "26px",
                    sm: "28px",
                    md: "32px",
                    lg: "43px",
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
                      // 🔥 FIX: Shrunk list items for mobile, exactly 18px on 1440px
                      fontSize: {
                        xs: "14px",
                        md: "16px",
                        lg: "18px",
                      },
                      lineHeight: {
                        xs: "26px",
                        md: "30px",
                        lg: "34px",
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