"use client";

import { FONT_FAMILY } from "@/utils/Fonts";
import { Facebook, Instagram, LinkedIn, Twitter, YouTube, } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography, } from "@mui/material";

const ContactMapSection = () => {
return (
    <Container
        maxWidth="lg"
        sx={{
            maxWidth: "min(1196px, 100%)",
            py: { xs: 5, lg: 7 },
            px: { xs: 3, lg: 4 },
        }}
    >
        <Grid
        container
        spacing={{ xs: 4, lg: 6 }}
        alignItems="center"
        >
        <Grid size={{ xs: 12, lg: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", lg: "flex-start" } }}>
            <Typography
                sx={{
                width: { xs: "100%", lg: "330px" },
                height: "auto",
                fontFamily: FONT_FAMILY.heading,
                fontWeight: 600,
                fontSize: { xs: "28px", sm: "36px", lg: "48px" },
                lineHeight: { xs: "36px", sm: "44px", lg: "62px" },
                letterSpacing:"-0.03em",
                color: "#111827",
                mb: { xs: 4, lg: 6 },
                textAlign: { xs: "center", lg: "left" },
                }}
            >
                DiscoverSTEM <br /> Innovation Lab
            </Typography>

            <Typography
                sx={{
                width: { xs: "100%", lg: "335px" },
                height: "auto",
                mt: 2,
                fontFamily: FONT_FAMILY.body,
                fontSize: { xs: "15px", sm: "18px", lg: "22px" },
                lineHeight: { xs: "24px", sm: "32px", lg: "43px" },
                letterSpacing:"-0.03em",
                color: "#777777",
                mb: { xs: 4, lg: 6 },
                textAlign: { xs: "center", lg: "left" },
                }}
            >
                555 Republic Drive, Suite 201 <br />
                Plano, TX 75074
            </Typography>

            <Box
                sx={{
                mt: { xs: 1, lg: 3 },
                display: "flex",
                gap: 1.5,
                flexWrap: "wrap",
                // 🔥 FIX: Icons dynamically center on mobile!
                justifyContent: { xs: "center", lg: "flex-start" },
                }}
            >
                {[
                    { icon: Facebook, url: "http://www.facebook.com/discoverstem.official" },
                    { icon: Instagram, url: "http://www.instagram.com/discoverstem.official" },
                    { icon: LinkedIn, url: "https://www.linkedin.com/company/discoverstem/" },
                    { icon: YouTube, url: "https://www.youtube.com/@discoverstem" },
                    { icon: Twitter, url: "http://www.twitter.com/discoverstem_US" },
                ].map(({ icon: Icon, url }, i) => (
                    <IconButton
                    key={i}
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                ))}
            </Box>
            </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 7.7 }} sx={{ display: "flex", justifyContent: { xs: "center", lg: "flex-end" } }}>
            <Box
            sx={{
                width: "100%",
                height: { xs: "250px", sm: "300px", lg: "358px" },
                borderRadius: "25px",
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
);
};

export default ContactMapSection;