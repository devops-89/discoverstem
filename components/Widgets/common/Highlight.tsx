"use client";

import { ImageContentSplitData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

interface ImageContentSplitSectionProps {
  data: ImageContentSplitData;
}

export default function ImageContentSplitSection({
  data,
}: ImageContentSplitSectionProps) {
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
      {/* Top Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "563px 510px" },
          gap: { xs: 4, md: "87px" },
          alignItems: "start",
          mb: { xs: 6, md: "100px" },
        }}
      >
        <Box>
          {data.topSection.description.map((paragraph, index) => (
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
                  index === data.topSection.description.length - 1
                    ? 0
                    : { xs: 3, md: "36px" },
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "510px",
            height: { xs: "280px", md: "401px" },
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Image
            src={data.topSection.image}
            alt="Top Section"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "510px 563px" },
          gap: { xs: 4, md: "87px" },
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "510px",
            height: { xs: "280px", md: "401px" },
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Image
            src={data.bottomSection.image}
            alt="Bottom Section"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Box>
          {data.bottomSection.description.map((paragraph, index) => (
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
                  index === data.bottomSection.description.length - 1
                    ? 0
                    : { xs: 3, md: "36px" },
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
}