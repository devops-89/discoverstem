"use client";

import { AwardImageItem } from "@/utils/Types";
import { Box, Container } from "@mui/material";
import Image from "next/image";

interface AwardImageGridProps {
  data: AwardImageItem[];
}

export default function AwardImageGrid({ data }: AwardImageGridProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1162px",
        mx: "auto",
        px: { xs: 2, md: 0 },
        py: { xs: 5, md: 8 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: {
            xs: "20px",
            md: "40px",
          },
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              maxWidth: "257.9px",
              height: "291.89px",
              mx: "auto",
              position: "relative",
            }}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
}