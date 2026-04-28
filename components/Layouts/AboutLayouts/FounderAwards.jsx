"use client";

import { mirzaFaizan } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Container, Grid, Typography } from "@mui/material";

const FounderAwards = () => {
return (
    <Box sx={{ py: { xs: 6, md: 8, lg: 10 } }}>
    <Container maxWidth="xl">
        <Box
        sx={{
            px: { xs: 2, sm: 4, md: 6, lg: 12 }, // align with your other sections
        }}
        >
        <Typography
            sx={{
            fontFamily: FONT_FAMILY.heading,
            fontWeight: 600,
            fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "36px" },
            lineHeight: { xs: "32px", md: "40px", lg: "46px" },
            letterSpacing: "-0.02em",
            color: "#111827",
            mb: { xs: 3, md: 4 },
            }}
        >
            Awards & Honors
        </Typography>

        <Grid container spacing={{ xs: 4, md: 6 }}>

            <Grid size={{xs:12,md:6}}>
            <Box sx={{ maxWidth: { md: "560px", xs: "100%" } }}>
                <Typography
                sx={{
                    fontFamily: FONT_FAMILY.body,
                    fontSize: { xs: "15px", md: "17px", lg: "18px" },
                    lineHeight: "32px",
                    color: "#474A55",
                    mb: { xs: 3, md: 5 },
                }}
                >
                {mirzaFaizan.awards.leftTitle}
                </Typography>

                {mirzaFaizan.awards.left.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    mb: "10px",
                    }}
                >
                    <Box
                    sx={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#111827",
                        mt: "10px",
                        flexShrink: 0,
                    }}
                    />

                    <Typography
                    sx={{
                        fontFamily: FONT_FAMILY.body,
                        fontSize: { xs: "15px", md: "17px", lg: "18px" },
                        lineHeight: "32px",
                        color: "#474A55",
                    }}
                    >
                    {item}
                    </Typography>
                </Box>
                ))}
            </Box>
            </Grid>

            <Grid size={{xs:12,md:6}}>
            <Box sx={{ maxWidth: { md: "560px", xs: "100%" } }}>
                <Typography
                sx={{
                    fontFamily: FONT_FAMILY.body,
                    fontSize: { xs: "15px", md: "17px", lg: "18px" },
                    lineHeight: "32px",
                    color: "#474A55",
                    mb: "16px",
                }}
                >
                {mirzaFaizan.awards.rightTitle}
                </Typography>

                {mirzaFaizan.awards.right.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    mb: "10px",
                    }}
                >
                    <Box
                    sx={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#111827",
                        mt: "10px",
                        flexShrink: 0,
                    }}
                    />

                    <Typography
                    sx={{
                        fontFamily: FONT_FAMILY.body,
                        fontSize: { xs: "15px", md: "17px", lg: "18px" },
                        lineHeight: "32px",
                        color: "#474A55",
                    }}
                    >
                    {item}
                    </Typography>
                </Box>
                ))}
            </Box>
            </Grid>

        </Grid>
        </Box>

        </Container>
    </Box>
);
};

export default FounderAwards;