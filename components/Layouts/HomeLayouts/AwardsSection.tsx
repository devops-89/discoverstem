"use client";
import React from "react";
import { Container, Grid, Box } from "@mui/material";
import SectionHeading from "@/components/Widgets/SectionHeading";
import { awardCards } from "@/assets/Generic-data";

export default function AwardsSection() {
  return (
    <Container
      id="awards"
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 8, md: 10 },
        px: { xs: 3, md: 4 },
      }}
    >
      <SectionHeading label="Distinguished" title="Awards & Recognition" />
      <Grid 
        container 
        columnSpacing={4} 
        rowSpacing={4} 
        sx={{ mt: 6 }}
      >
        {[...awardCards, ...awardCards].map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`${item.image}-${index}`}>
            <Box
              sx={{
                overflow: "hidden",
                aspectRatio: "3/4",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt="Award certificate"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  // display: "block",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
