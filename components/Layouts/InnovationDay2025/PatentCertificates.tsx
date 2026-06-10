"use client";

import { patentCertificatesData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function PatentCertificatesSection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1232px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "398px" },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "30px", md: "48px" },
            lineHeight: { xs: "40px", md: "62px" },
            letterSpacing: "-0.03em",
            color: "#171717",
            mb: { xs: 4, md: "46px" },
          }}
        >
          {patentCertificatesData.title}
        </Typography>

        <Box
          sx={{
            width: "100%",
            height: { xs: "auto", md: "314px" },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 233.6px)",
              md: "repeat(5, 233.6px)",
            },
            gap: { xs: 3, md: "16px" },
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          {patentCertificatesData.items.map((item) => (
            <Box
              key={item.id}
              component="a"
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "233.6px" },
                maxWidth: "233.6px",
                height: "292px",
                borderRadius: "16px",
                border: "0.8px solid #0000000D",
                overflow: "hidden",
                textDecoration: "none",
                display: "block",
                mx: "auto",
              }}
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                style={{
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.42) 100%)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "118px",
                  left: "88.8px",
                  width: "56px",
                  height: "56px",
                  borderRadius: "999px",
                  bgcolor: "#FFFFFFF2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
                }}
              >
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: "12px solid #7B53A1",
                    ml: "4px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  position: "absolute",
                  bottom: "14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  px: "8px",
                  py: "3px",
                  borderRadius: "999px",
                  bgcolor: "rgba(0,0,0,0.55)",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "9px",
                  lineHeight: "12px",
                  letterSpacing: "0.6px",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}