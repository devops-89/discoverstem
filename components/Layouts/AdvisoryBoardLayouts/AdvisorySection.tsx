"use client";

import { useState } from "react";
import { advisoryData } from "@/assets/Generic-data";
import { AdvisoryMember } from "@/utils/Types";
import { Box, Container } from "@mui/material";
import AdvisoryCard from "./AdvisoryCard";
import AdvisoryModal from "./AdvisoryModal";

export default function AdvisorySection() {
  const [selectedMember, setSelectedMember] = useState<AdvisoryMember | null>(null);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 6, md: 7 }, // Added xs: 6 for proper mobile spacing
        px: { xs: 2.5, md: 4 }, // Scaled down the edge-padding
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 4, md: 4 } }}>
        {advisoryData.map((item, index) => (
          <AdvisoryCard key={index} data={item} onReadMore={() => setSelectedMember(item)} />
        ))}
      </Box>

      <AdvisoryModal
        open={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        data={selectedMember}
      />
    </Container>
  );
}