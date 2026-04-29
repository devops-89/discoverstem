"use client";

import { expertsData } from "@/assets/Generic-data";
import { Container, Grid } from "@mui/material";
import ExpertCard from "./ExpertCard";

export default function ExpertsSection() {
    return (
    <Container
    maxWidth={false}
    sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
    }}
    >
    <Grid container rowSpacing={6} columnSpacing={20}>
        {expertsData.map((item, index) => (
        <Grid key={index} size={{ xs: 12, md: 6 }}>
            <ExpertCard data={item} />
        </Grid>
        ))}
    </Grid>
    </Container>
);
}