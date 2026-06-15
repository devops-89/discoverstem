"use client";
import { useState } from "react";
import { mentorCardsData } from "@/assets/Generic-data";
import { Container, Grid } from "@mui/material";
import MentorCard from "./MentorCard";
import MentorModal from "./MentorModal";

export default function MentorsSection() {
  const [selectedMentor, setSelectedMentor] = useState<typeof mentorCardsData[number] | null>(null);

  return (
    <Container maxWidth={false} sx={{ maxWidth: "min(1196px, 100%)", py: { xs: 5, md: 7 }, px: { xs: 3, md: 4 } }}>
      <Grid container rowSpacing={6} columnSpacing={20}>
        {mentorCardsData.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <MentorCard data={item} onClick={() => setSelectedMentor(item)} />
          </Grid>
        ))}
      </Grid>
      <MentorModal open={!!selectedMentor} onClose={() => setSelectedMentor(null)} data={selectedMentor} />
    </Container>
  );
}
