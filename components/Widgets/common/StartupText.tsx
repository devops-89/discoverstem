"use client";

import { FONT_FAMILY } from "@/utils/Fonts";
import { SimpleTextSectionData } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";

interface SimpleTextSectionProps {
  data: SimpleTextSectionData;
}

export default function SimpleTextSection({ data }: SimpleTextSectionProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 3, md: "20px" },
        }}
      >
        {data.paragraphs.map((paragraph, index) => (
         <Typography
  key={index}
  sx={{
    fontFamily: FONT_FAMILY.body,
    fontWeight: 400,
    fontSize: { xs: "16px", md: "22px" },
    lineHeight: { xs: "30px", md: "43px" },
    letterSpacing: "-0.03em",
    color: "#777777",
    whiteSpace: "pre-line",
  }}
>
  {paragraph}
</Typography>
        ))}
      </Box>
    </Container>
  );
}