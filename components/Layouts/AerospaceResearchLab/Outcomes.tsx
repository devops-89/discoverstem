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
          px: { xs: 3, lg: 0 },
          py: { xs: 6, lg: "56px" },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "443.33px 636.67px",
            },
            gap: { xs: 5, lg: "40px" },
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
                  fontSize: { xs: "14px", lg: "16px" }, 
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
                fontSize: { xs: "26px", sm: "30px", lg: "36px" },
                lineHeight: { xs: "34px", sm: "36px", lg: "36.8px" },
                letterSpacing: "-0.8px",
                color: "#000000",
                mb: { xs: 3, lg: "30px" },
              }}
            >
              {data.title}
            </Typography>

            <Typography
              sx={{
                maxWidth: { xs: "100%", lg: "444px" },
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "15px", lg: "16px" },
                lineHeight: { xs: "24px", lg: "24px" },
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
              gap: { xs: "12px", lg: "16px" }, 
            }}
          >
            {data.items.map((item) => (
              <Box
                key={item.number}
                sx={{
                  width: "100%",
                  minHeight: { xs: "auto", lg: "93.6px" }, 
                  borderRadius: "14px",
                  border: "0.8px solid #0000001A",
                  backgroundColor: "#0000000D",
                  p: { xs: "16px", lg: "20px" }, 
                  display: "flex",
                  // 🔥 FIX: 'flex-start' pushes the number circle to the top left on mobile!
                  // 1440px stays perfectly centered.
                  alignItems: { xs: "flex-start", lg: "center" },
                  gap: "16px",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "32px", lg: "36px" },
                    height: { xs: "32px", lg: "36px" },
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
                      fontSize: { xs: "14px", lg: "16px" },
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
                    fontSize: { xs: "14px", lg: "16px" }, 
                    lineHeight: { xs: "22px", lg: "26px" },
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