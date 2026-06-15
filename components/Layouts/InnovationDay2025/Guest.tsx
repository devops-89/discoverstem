"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function ChiefGuestSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#FAF5FF",
        py: { xs: 6, md: "107px" },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "944.23px",
          mx: "auto",
          px: { xs: 3, md: 0 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            minHeight: { xs: "auto", md: "395.6px" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "380px 414.23px",
            },
            gap: { xs: 5, md: "150px" },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", sm: "380px" },
              height: { xs: "360px", sm: "380px" },
              borderRadius: "16px",
              overflow: "hidden",
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Image
              src="/Images/finale/chiefguest.png"
              alt="Gurvinder Singh Ahluwalia"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: "414.23px",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "16px",
                letterSpacing: "2.4px",
                textTransform: "uppercase",
                color: "#F9A51E",
                mb: "15px",
              }}
            >
              Chief Guest · Innovation Day 2025
            </Typography>

            <Typography
              sx={{
                width: "100%",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "30px", md: "32px" },
                lineHeight: { xs: "38px", md: "36.8px" },
                letterSpacing: "-0.8px",
                color: "#000000",
                mb: "4px",
              }}
            >
              Gurvinder Singh Ahluwalia
            </Typography>

            <Typography
              sx={{
                width: "205px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000",
                mb: "23.55px",
              }}
            >
              Founder, Digital Twin Labs
            </Typography>

            {[
              {
                label: "Founder",
                value: "Digital Twin Labs",
              },
              {
                label: "Advisor",
                value: "Gates Foundation · Berkeley Lab",
              },
              {
                label: "Formerly",
                value: "CTO, IBM",
              },
            ].map((item) => (
              <Box
                key={item.label}
                sx={{
                  width: "371px",
                  maxWidth: "100%",
                  height: "68px",
                  borderRadius: "14px",
                  border: "0.8px solid #0000000D",
                  backgroundColor: "#E9E3ED",
                  pt: "16.8px",
                  px: "16.8px",
                  pb: "0.8px",
                  mb: "8px",
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    color: "#171717",
                    mb: "4px",
                  }}
                >
                  {item.label}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#171717",
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            ))}

            <Box
              component="a"
              href="https://www.linkedin.com/in/gurvinderahluwalia" target="_blank" rel="noopener noreferrer"
              sx={{
                mt: "16px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "38px",
                px: "20px",
                borderRadius: "999px",
                backgroundColor: "#0A66C2",
                color: "#FFFFFF",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "18px",
                textDecoration: "none",
              }}
            >
              LinkedIn
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}