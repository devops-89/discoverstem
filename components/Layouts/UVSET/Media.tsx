"use client";

import { MediaSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface MediaSectionProps {
  data: MediaSectionData;
}

export default function MediaSection({ data }: MediaSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1157px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 5, md: 8 },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
          fontSize: { xs: "32px", md: "48px" },
          lineHeight: { xs: "40px", md: "36.8px" },
          letterSpacing: "-0.8px",
          color: "#171717",
          mb: { xs: 4, md: "70px" },
          textTransform: "capitalize",
        }}
      >
        {data.title}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: { xs: 3, md: "22px" },
        }}
      >
        {data.items.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "100%",
              maxWidth: "371px",
              height: { xs: "auto", md: "431px" },
              borderRadius: "16px",
              border: "0.8px solid #0000000D",
              overflow: "hidden",
              backgroundColor: "#fff",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "220px", md: "245.66px" },
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  minWidth: "81.55px",
                  height: "23.99px",
                  borderRadius: "999px",
                  backgroundColor: "#fff",
                  px: "12px",
                  py: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    color: "#171717",
                  }}
                >
                  {item.tag}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                px: "21.8px",
                pt: "14px",
                display: "flex",
                flexDirection: "column",
                height: { xs: "auto", md: "185.34px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "0.6px",
                  textTransform: "uppercase",
                  color: "#7B53A1",
                  mb: "8px",
                }}
              >
                {item.source}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24.75px",
                  letterSpacing: "-0.45px",
                  color: "#171717",
                  minHeight: "50px",
                }}
              >
                {item.title}
              </Typography>

              <Box
                sx={{
                  mt: "auto",
                  pt: "10px",
                  minHeight: "46px",
                  borderTop: "0.8px solid #0000000D",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                }}
              >
                <Box
                  component="a"
                  href={item.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: "999px",
                    backgroundColor: "#171717",
                    color: "#fff",
                    px: "16px",
                    py: "6px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",
                    textDecoration: "none",
                    display: "inline-flex",
                  }}
                >
                  Visit Link
                </Box>

                <Box
                  component="a"
                  href={item.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderRadius: "999px",
                    backgroundColor: "#fff",
                    color: "#171717",
                    border: "0.8px solid #0000001A",
                    px: "16px",
                    py: "6px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "16px",
                    textDecoration: "none",
                    display: "inline-flex",
                  }}
                >
                  Read PDF
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}