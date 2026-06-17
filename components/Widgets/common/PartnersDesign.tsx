"use client";

import { ImageTextPartnerSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface ImageTextPartnerSectionProps {
  data: ImageTextPartnerSectionData;
}

export default function ImageTextPartnerSection({
  data,
}: ImageTextPartnerSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1158px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "28px", md: "36px" },
            lineHeight: { xs: "38px", md: "62px" },
            letterSpacing: "-0.03em",
            color: "#000000",
            mb: { xs: 4, md: "76px" },
          }}
        >
          {data.title}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "687px 401px" },
            gap: { xs: 4, md: "70px" },
            alignItems: "start",
          }}
        >
          <Box>
            {data.description.map((text, index) => (
              <Typography
                key={index}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "16px", md: "20px" },
                  lineHeight: { xs: "30px", md: "36px" },
                  letterSpacing: "-0.03em",
                  color: "#777777",
                  mb:
                    index === data.description.length - 1
                      ? 0
                      : { xs: 2, md: 0 },
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "401px",
              height: { xs: "300px", md: "401px" },
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#C4C4C4",
              mx: { xs: "auto", md: 0 },
            }}
          >
            {data.image && (
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}