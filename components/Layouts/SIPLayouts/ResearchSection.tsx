"use client";

import { researchData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Research } from "@/utils/Types";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const ArrowIcon = () => (
    <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
    </svg>
);


export default function ResearchSection() {
return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 4 },
      }}
    >

        <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 2,
            mb: 4,
        }}
        >
        <Box sx={{ maxWidth: "700px" }}>
            <Typography
            sx={{
                width: { xs: "100%", md: "715px" },
                height: { xs: "120px", md: "94px" },
                fontFamily: FONT_FAMILY.heading,
                fontSize: { xs: "22px", md: "48px" },
                fontWeight: 600,
                lineHeight: "62px",
                letterSpacing:"-0.03em",
                color:"#111827",
                mb: 6,
            }}
            >
            Research Papers and Abstracts Published by Our Students
            </Typography>

            <Typography
                sx={{
                width: { xs: "100%", md: "1161px" },
                height: { xs: "120px", md: "101px" },
                fontFamily:FONT_FAMILY.body,
                fontWeight:400,
                letterSpacing:"-0.03em",
                fontSize: "22px",
                color: "#777",
                lineHeight: "43px",
                mb:6,
            }}
            >
            Innovations in Digital Health, Diagnostics, and Biomarkers (IDDB) is an international peer-reviewed journal, guided by a distinguished editorial board and directed by leading experts, including representatives from the World Health Organization (WHO).

            </Typography>
        </Box>
        <Box sx={{ mt: { md: 6 } ,px: { xs: 2.5, md: 6 },}}>
        <Button
            variant="outlined"
            disableElevation
            endIcon={<span style={{ fontSize: 18, marginLeft: 4 }}>↗</span>}
            sx={{
                borderRadius: "100px",
              borderColor: "#FF7043", // Salmon/Orange color
                color: "#FF7043",
                bgcolor: "transparent",
                textTransform: "none",
                fontSize: { xs: 14, md: 16 },
                fontWeight: 500,
                px: { xs: 2.5, md: 3.5 },
                py: 1,
                fontFamily: "var(--font-geist-sans), sans-serif",
                "&:hover": {
                bgcolor: "#FFF5F2",
                borderColor: "#FF7043",
            },
            }}
        >
            View All
        </Button>
        </Box>
        </Box>


        <Grid container spacing={0.5}>
        
        <Grid size={{ xs: 12, md: 6 }}>
            <Box
                sx={{
                width: { xs: "100%", md: "554.26px" },
                height: { xs: "120px", md: "480px" },
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
            }}
            >
            <Box
                component="img"
                src={researchData[0].image}
                sx={{ width: 1, height: 1, objectFit: "cover" }}
            />

            <Box
                sx={{
                position: "absolute",
                inset: 0,
                background:
                    "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 60%)",
                }}
            />
            <Box
                sx={{
                position: "absolute",
                left: "46px",
                bottom: "46px",
                width: { xs: "100%", md: "387px" },
                fontFamily: FONT_FAMILY.heading,
                fontWeight: 600,
                fontSize: "25px",
                lineHeight: "33px",
                letterSpacing: "-0.44px",
                color: "#fff",
                }}>
                {researchData[0].title}
            </Box>
            <Box
                sx={{
                    right:60,
                    bottom:60,
                    position:"absolute",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.7)",
                    border: "1px solid #fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                    
                }}
                >
                <ArrowIcon />
                </Box>
            </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {researchData.slice(1).map((item: Research, i: number) => (
                <Box
                key={i}
                sx={{
                    width: { xs: "100%", md: "584px" },
                    height: { xs: "120px", md: "229px" },
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                }}
                >
                <Box
                    component="img"
                    src={item.image}
                    sx={{ width: 1, height: 1, objectFit: "cover" }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        left:"57px",
                        right:"57px",
                        bottom:"57px",
                        inset: 0,
                        background:
                        "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 60%)",
                    }}
                />

                    <Box
                    sx={{
                        width: { xs: "100%", md: "405px" },
                        height: { xs: "120px", md: "81px" },
                        fontFamily:FONT_FAMILY.heading,
                        fontWeight:600,
                        fontSize:"25px",
                        lineHeight:"33px",
                        letterSpacing:"-0.44px",
                        position: "absolute",
                        bottom: 16,
                        left: 16,
                        right: 16,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color:"#fff",
                    }}>
                    {item.title}
                    </Box>
                    <Box
                    sx={{
                    right:40,
                    bottom:30,
                    position:"absolute",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.7)",
                    border: "1px solid #fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#000",
                    
                }}
                >
                <ArrowIcon />
                </Box>
                </Box>
            ))}
            </Box>
        </Grid>

        </Grid>
    </Container>
);
}