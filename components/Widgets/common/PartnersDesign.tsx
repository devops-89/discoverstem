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
        // 🔥 FIX: Shifted '0' padding to 'lg' to prevent text touching the screen edge on iPads
        px: { xs: 3, md:8, lg: 0 },
        py: { xs: 4,  md:8, lg: 10 },
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            // 🔥 FIX: Scaled text down for mobile and tablets, while preserving exactly 36px on 1440px
            fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
            lineHeight: { xs: "34px", sm: "38px", md: "46px", lg: "62px" },
            letterSpacing: "-0.03em",
            color: "#000000",
            mb: { xs: 4, lg: "76px" },
          }}
        >
          {data.title}
        </Typography>

        <Box
          sx={{
            display: "grid",
            // 🔥 FIX: Your 687px + 401px + gap equals 1158px! That overflows a 1024px iPad horizontally. I shifted it to 'lg' so iPads naturally stack into a single column.
            gridTemplateColumns: { xs: "1fr", lg: "687px 401px" },
            gap: { xs: 4, lg: "70px" },
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
                  fontSize: { xs: "15px", sm: "16px", md: "18px", lg: "20px" },
                  lineHeight: { xs: "26px", sm: "28px", md: "32px", lg: "36px" },
                  letterSpacing: "-0.03em",
                  color: "#777777",
                  mb:
                    index === data.description.length - 1
                      ? 0
                      : { xs: 2, lg: 0 },
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
              maxWidth: { xs: "100%", sm: "600px", lg: "401px" },
              height: { xs: "300px", md: "350px", lg: "401px" },
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#C4C4C4",
              mx: { xs: "auto", lg: 0 },
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