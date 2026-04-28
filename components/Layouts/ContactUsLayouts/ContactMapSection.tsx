"use client";

import { FONT_FAMILY } from "@/utils/Fonts";
import { Facebook, Instagram, LinkedIn, Twitter, YouTube, } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography, } from "@mui/material";

const ContactMapSection = () => {
return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
    <Container
        maxWidth="xl"
        sx={{
        px: { xs: 2, sm: 3, md: 4, lg: 17 },
        }}
    >
        <Grid
        container
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        >
        <Grid size={{xs:12,md:4}}>
            <Box>
            <Typography
                sx={{
                fontFamily: FONT_FAMILY.heading,
                fontWeight: 600,
                fontSize: { xs: "28px", md: "40px" },
                lineHeight: { xs: "36px", md: "48px" },
                color: "#111827",
                }}
            >
                DiscoverSTEM <br /> Innovation Lab
            </Typography>

            <Typography
                sx={{
                mt: 2,
                fontFamily: FONT_FAMILY.body,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "24px",
                color: "#777777",
                }}
            >
                555 Republic Drive, Suite 201 <br />
                Plano, TX 75074
            </Typography>

            <Box
                sx={{
                mt: 3,
                display: "flex",
                gap: 1.5,
                flexWrap: "wrap",
                }}
            >
                {[Facebook, Instagram, LinkedIn, YouTube, Twitter].map(
                (Icon, i) => (
                    <IconButton
                    key={i}
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "#111",
                        color: "#fff",
                        transition: "0.3s",

                        "&:hover": {
                        backgroundColor: "#7B53A1",
                        transform: "scale(1.05)",
                        },
                    }}
                    >
                    <Icon sx={{ fontSize: 18 }} />
                    </IconButton>
                )
                )}
            </Box>
            </Box>
        </Grid>

        <Grid size={{xs:12,md:7.7}}>
            <Box
            sx={{
                width: "100%",
                height: { xs: "250px", sm: "300px", md: "350px" },
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
            }}
            >
            <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.9574496091227!2d-96.70780152452896!3d33.03125147355835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1922127060f3%3A0x5513428322210029!2sDiscoverSTEM!5e0!3m2!1sen!2sin!4v1777024800446!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sx={{
                width: "100%",
                height: "100%",
                border: 0,
                }}
            />
            </Box>
        </Grid>
        </Grid>
    </Container>
    </Box>
);
};

export default ContactMapSection;