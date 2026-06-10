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
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
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