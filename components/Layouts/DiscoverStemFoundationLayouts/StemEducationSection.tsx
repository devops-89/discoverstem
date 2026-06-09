"use client";

import { stemEducationData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function StemEducationSection() {
  const data = stemEducationData;

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          width: { xs: "100%", md: "613px" },
          height: { xs: "auto", md: "25px" },
          fontFamily: FONT_FAMILY.heading,
          fontWeight: 600,
          fontSize: { xs: "22px", md: "36px" },
          lineHeight: { xs: "30px", md: "62px" },
          letterSpacing: "-0.03em",
          color: "#000",
          mb: 8,
        }}
      >
        {data.heading}
      </Typography>

      {/* Description 2 */}
      <Box sx={{ mb: 10 }}>
  {data.description2.map((item, index) => (
    <Typography
      key={index}
      sx={{
        width: { xs: "100%", md: "1157px" },
        fontFamily: FONT_FAMILY.body,
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "36px",
        letterSpacing: "-0.03em",
        color: "#777777",
        mb: 4,
      }}
    >
      {item}
    </Typography>
  ))}
</Box>

      {/* Title */}
      <Typography
        sx={{
          width: { xs: "100%", md: "613px" },
          height: { xs: "auto", md: "25px" },
          fontFamily: FONT_FAMILY.heading,
          fontWeight: 600,
          fontSize: { xs: "22px", md: "36px" },
          lineHeight: { xs: "30px", md: "62px" },
          letterSpacing: "-0.03em",
          color: "#000",
          mb: 8,
        }}
      >
        {data.title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          width: { xs: "100%", md: "1157px" },
          height: { xs: "auto", md: "auto" },
          fontFamily: FONT_FAMILY.body,
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: "36px",
          letterSpacing: "-0.03em",
          color: "#777777",
          mb: 14,
        }}
      >
        {data.description}
      </Typography>

      {/* Image + Points */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 10,
          alignItems: "flex-start",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "336px" },
            height: { xs: "220px", md: "336px" },
            borderRadius: "16px",
            overflow: "hidden",
            flexShrink: 0,
            mt: 1,
          }}
        >
          <Image
            src={data.image}
            alt="STEM Education"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* Points */}
        <Box>
          {data.points.map((point, index) => (
            <Typography
              key={index}
              sx={{
                fontFamily: FONT_FAMILY.body,
                fontSize: "20px",
                lineHeight: "36px",
                letterSpacing: "-0.03em",
                fontWeight: 400,
                color: "#777777",
                mb: 1.5,
              }}
            >
              • {point}
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
}