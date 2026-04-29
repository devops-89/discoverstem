"use client";

import { advisoryData } from "@/assets/Generic-data";
import { Box, Container } from "@mui/material";
import AdvisoryCard from "./AdvisoryCard";

export default function AdvisorySection() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {advisoryData.map((item, index) => (
          <AdvisoryCard key={index} data={item} />
        ))}
      </Box>
    </Container>
  );
}