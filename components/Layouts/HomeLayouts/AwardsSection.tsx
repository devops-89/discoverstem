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
        py: { xs: 4, sm: 6, md: 10 }, 
        px: { xs: 2, sm: 3, md: 4 }, 
      }}
    >
      <SectionHeading 
        label="Distinguished" 
        title="Awards & Recognition" 
        viewAllHref="/success-stories/awards-recognition"
      />
      <Grid 
        container 
        columnSpacing={{ xs: 2, sm: 3, md: 4 }} 
        rowSpacing={{ xs: 2.5, sm: 3, md: 4 }} 
        sx={{ mt: { xs: 3, md: 6 } }} 
      >
        {[...awardCards, ...awardCards].map((item, index) => (
          <Grid 
            size={{ xs: 6, sm: 4, md: 3 }} 
            key={`${item.image}-${index}`}
          >
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
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}