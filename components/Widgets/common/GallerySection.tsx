"use client";

import { gallerySectionData } from "@/assets/Generic-data";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function GallerySection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 5, md: 8 },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            mb: 1,
          }}
        >
          <Box sx={{ width: "38px", height: "1px", bgcolor: "#9CA3AF" }} />

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "26px",
              textTransform: "uppercase",
              color: "#737373",
            }}
          >
            {gallerySectionData.eyebrow}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "34px", md: "48px" },
            lineHeight: { xs: "42px", md: "56px" },
            letterSpacing: "-0.03em",
            color: "#171717",
            mb: { xs: 4, md: "64px" },
          }}
        >
          {gallerySectionData.title}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "572px 278px 278px",
            },
            gridTemplateRows: {
              xs: "auto",
              md: "170px 170px 170px 170px",
            },
            gap: "16px",
          }}
        >
          {gallerySectionData.images.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                border: "0.8px solid #0000000D",

                height: {
                  xs:
                    item.variant === "large"
                      ? "260px"
                      : item.variant === "wide"
                      ? "190px"
                      : item.variant === "last"
                      ? "160px"
                      : "180px",
                  md: "auto",
                },

                gridColumn: {
                  xs: "auto",
                  md:
                    item.id === 1
                      ? "1 / 2"
                      : item.id === 2
                      ? "2 / 3"
                      : item.id === 3
                      ? "3 / 4"
                      : item.id === 4
                      ? "2 / 3"
                      : item.id === 5
                      ? "3 / 4"
                      : item.id === 6
                      ? "1 / 2"
                      : item.id === 7
                      ? "2 / 3"
                      : item.id === 8
                      ? "3 / 4"
                      : "1 / 2",
                },

                gridRow: {
                  xs: "auto",
                  md:
                    item.id === 1
                      ? "1 / 3"
                      : item.id === 2
                      ? "1 / 2"
                      : item.id === 3
                      ? "1 / 2"
                      : item.id === 4
                      ? "2 / 3"
                      : item.id === 5
                      ? "2 / 3"
                      : item.id === 6
                      ? "3 / 4"
                      : item.id === 7
                      ? "3 / 4"
                      : item.id === 8
                      ? "3 / 4"
                      : "4 / 5",
                },

                maxWidth: {
                  xs: "100%",
                  md: item.id === 9 ? "278px" : "100%",
                },
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}