"use client";

import { researchLabs } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const ResearchLabs = () => {
return (
    <Container
            maxWidth="lg"
            sx={{
                maxWidth: "min(1196px, 100%)",
                py: { xs: 5, md: 7 },
                px: { xs: 3, md: 4 },
            }}
        >
        <Grid container spacing={{ xs: "20px", md: "24px", lg: "32px" }}>
            
            {researchLabs.map((lab, index) => (
            <Grid size={{xs:12,sm:6,md:4}} key={index}>
                
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  {/* Image */}
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: { xs: "200px", md: "179px" },
      borderRadius: "13px",
      overflow: "hidden",
    }}
  >
    <Image
      src={lab.image}
      alt={lab.title}
      fill
      style={{ objectFit: "cover" }}
    />
  </Box>

  {/* Text BELOW image */}
  <Typography
    sx={{
      mt: 1.5,
      fontFamily: FONT_FAMILY.body,
      fontWeight: 500,
      fontSize: { xs: "14px", md: "18px" },
      lineHeight:"22px",
      letterSpacing:"-0.03em",
      color: "#111827",
      textAlign: "center",
      maxWidth: "280px",
      mb:3,
    }}
  >
    {lab.title}
  </Typography>
</Box>

            </Grid>
            ))}

        </Grid>
    </Container>
);
};

export default ResearchLabs;