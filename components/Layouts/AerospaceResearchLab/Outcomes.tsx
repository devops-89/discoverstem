"use client";

import { aerospaceOutcomesData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";

export default function OutcomesSection() {
  const data = aerospaceOutcomesData;

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FAF5FF",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1256px",
          mx: "auto",
          px: { xs: 3, md: 0 },
          py: { xs: 6, md: "56px" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "443.33px 636.67px",
            },
            gap: { xs: 5, md: "40px" },
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                mb: "12px",
              }}
            >
              <Box
                sx={{
                  width: "54px",
                  height: "1px",
                  backgroundColor: "#777777",
                }}
              />

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "16px",
                  letterSpacing: "2.4px",
                  textTransform: "uppercase",
                  color: "#F9A51E",
                }}
              >
                {data.eyebrow}
              </Typography>
            </Box>

            <Typography
              sx={{
                whiteSpace: "pre-line",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "30px", md: "36px" },
                lineHeight: { xs: "36px", md: "36.8px" },
                letterSpacing: "-0.8px",
                color: "#000000",
                mb: { xs: 3, md: "30px" },
              }}
            >
              {data.title}
            </Typography>

            <Typography
              sx={{
                maxWidth: "444px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#777777",
              }}
            >
              {data.description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {data.items.map((item) => (
              <Box
                key={item.number}
                sx={{
                  width: "100%",
                  minHeight: "93.6px",
                  borderRadius: "14px",
                  border: "0.8px solid #0000001A",
                  backgroundColor: "#0000000D",
                  p: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <Box
                  sx={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "999px",
                    backgroundColor: "#F9A51E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#1B0F2A",
                    }}
                  >
                    {item.number}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#000000E5",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}