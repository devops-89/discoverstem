"use client";
import { useState } from "react";
import { mentorCardsData } from "@/assets/Generic-data";
import { Container, Grid } from "@mui/material";
import MentorCard from "./MentorCard";
import MentorModal from "./MentorModal";

export default function MentorsSection() {
  const [selectedMentor, setSelectedMentor] = useState<typeof mentorCardsData[number] | null>(null);

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        maxWidth: "min(1196px, 100%)", 
        py: { xs: 5, sm: 6, lg: 7 }, 
        px: { xs: 3, sm: 5, lg: 4 } 
      }}
    >
      <Grid 
        container 
        rowSpacing={{ xs: 4, sm: 5, lg: 6 }} 
        columnSpacing={{ xs: 0, sm: 4, lg: 20 }} 
      >
        {mentorCardsData.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <MentorCard data={item} onClick={() => setSelectedMentor(item)} />
          </Grid>
        ))}
      </Grid>
      <MentorModal open={!!selectedMentor} onClose={() => setSelectedMentor(null)} data={selectedMentor} />
    </Container>
  );
}