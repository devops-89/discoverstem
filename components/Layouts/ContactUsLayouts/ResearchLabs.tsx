"use client";

import { researchLabs } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const ResearchLabs = () => {
return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
    <Container
        maxWidth="xl"
        sx={{
            pl: { xs: 2, sm: 3, md: 4, lg: 14},
            pr: { xs: 2, sm: 3, md: 4, lg:  20 },
        }}
    >
        <Box
        sx={{
            maxWidth: "1220px",
            mx: "auto",
        }}
        >
        <Grid container spacing={{ xs: 2.5, md: 3, lg: 4 }}>
            
            {researchLabs.map((lab, index) => (
            <Grid size={{xs:12,sm:6,md:4}} key={index}>
                
                <Box>
                <Box
                    sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "200px", md: "220px" },
                    borderRadius: "16px",
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

                <Typography
                    sx={{
                    mt: 2,
                    mb:3,
                    fontFamily: FONT_FAMILY.body,
                    fontWeight: 18,
                    fontSize: { xs: "14px", md: "16px" },
                    color:"#111827",
                    textAlign: "center",
                    maxWidth: "280px",
                    mx: "auto",
                    }}
                >
                    {lab.title}
                </Typography>
                </Box>

            </Grid>
            ))}

        </Grid>
        </Box>
    </Container>
    </Box>
);
};

export default ResearchLabs;