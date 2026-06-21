"use client";

import { useState, useMemo } from "react";
import { expertsData } from "@/assets/Generic-data";
import { Container, Grid } from "@mui/material";
import ExpertCard from "./ExpertCard";
import ExpertsModal from "./ExpertsModal";

const categoryTabMap: Record<string, string> = {
  "Genomics, Genetics & Biotechnology": "BioTech & Health",
  "Molecular Biologist": "BioTech & Health",
  "Islet Cell Transplant": "BioTech & Health",
  "Transplant Immunologist": "BioTech & Health",
  "Bioengineering": "BioTech & Health",
  "Clinical and Molecular Diagnostics": "BioTech & Health",
  "Oncology Therapeutic Area": "BioTech & Health",
  "Pharmaceutics": "BioTech & Health",
  "Laboratory Services & Biobanking": "BioTech & Health",
  "Oncology & Healthcare Innovation": "BioTech & Health",
  "Artificial Intelligence & Machine Learning": "AI & Tech",
  "Professor of Practice, CSE, Texas A&M": "AI & Tech",
  "Blockchain & Fintech": "Finance & Fintech",
  "Finance & Investment": "Finance & Fintech",
  "Fintech": "Finance & Fintech",
  "Aerospace": "Aerospace",
  "Energy & Environment": "Energy & Inv",
  "Entrepreneur": "Design & Business",
  "Product Design": "Design & Business",
  "Product Design & Innovations": "Design & Business",
  "Marketing": "Design & Business",
};

function getTab(category: string): string {
  return categoryTabMap[category] || "BioTech & Health";
}

interface Props {
  activeTab: string;
}

export default function ExpertsSection({ activeTab }: Props) {
  const [selectedExpert, setSelectedExpert] = useState<typeof expertsData[number] | null>(null);

  const filtered = useMemo(
    () =>
      activeTab === "All experts"
        ? expertsData
        : expertsData.filter((item) => getTab(item.category) === activeTab),
    [activeTab]
  );

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, lg: 7 },
        px: { xs: 3, lg: 4 },
      }}
    >
      <Grid 
        container 
        rowSpacing={{ xs: 4, lg: 6 }} 
        // Smoothed the gap so 768px gets a clean 16px gap, and 1024 gets 32px gap
        columnSpacing={{ xs: 0, sm: 2, md: 4, lg: 20 }} 
      >
        {filtered.map((item, index) => (
          // FIXED: Changed from md: 6 to sm: 6 so 768px tablets get the beautiful 2-card layout!
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <ExpertCard data={item} onClick={() => setSelectedExpert(item)} />
          </Grid>
        ))}
      </Grid>

      <ExpertsModal
        open={!!selectedExpert}
        onClose={() => setSelectedExpert(null)}
        data={selectedExpert}
      />
    </Container>
  );
}