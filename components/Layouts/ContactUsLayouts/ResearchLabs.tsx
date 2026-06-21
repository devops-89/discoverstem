"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { researchLabs } from "@/assets/Generic-data";

const ResearchLabs = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                maxWidth: "min(1196px, 100%)",
                py: { xs: 5, lg: 7 },
                px: { xs: 3, lg: 4 },
            }}
        >
            <Grid container spacing={{ xs: "20px", lg: "32px" }}>
                {researchLabs.map((lab, index) => (
                    <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
                        <Link href={lab.href} style={{ textDecoration: "none" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    "&:hover": {
                                        "& .lab-image": {
                                            transform: "scale(1.05)",
                                        },
                                        "& .lab-title": {
                                            color: "#7B53A1", 
                                        },
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        // 🔥 FIX: Height expands slightly for mobile scaling, locks to 179px exactly at Desktop.
                                        height: { xs: "200px", sm: "240px", lg: "179px" },
                                        borderRadius: "13px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Box
                                        className="lab-image"
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            height: "100%",
                                            transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                        }}
                                    >
                                        <Image
                                            src={lab.image}
                                            alt={lab.title}
                                            fill sizes="100vw"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </Box>
                                </Box>
                                
                                <Typography
                                    className="lab-title"
                                    sx={{
                                        mt: { xs: "12px", lg: "19px" }, 
                                        fontFamily: "'Poppins', sans-serif",
                                        fontWeight: 400,
                                        fontSize: { xs: "15px", lg: "18px" },
                                        lineHeight: "25px",
                                        letterSpacing: "-0.03em",
                                        color: "#111827",
                                        textAlign: "center",
                                        maxWidth: "364px",
                                        mb: 3,
                                        transition: "color 0.2s ease-in-out",
                                    }}
                                >
                                    {lab.title}
                                </Typography>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ResearchLabs;