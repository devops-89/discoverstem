"use client";
import { startupsData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Startup } from "@/utils/Types";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function StartupCard() {
return (
    <Box sx={{ px: { xs: 3, md: 14 }, py: { xs: 6, md: 10 } }}>
    
    <Box
        sx={{
        width: { xs: "100%", md: "1255px" },
        height: { xs: "auto", md: "607px" },
        mx: "auto",
        background: "#F4F4F4",
        borderRadius: "57px",

        px: { xs: 3, md: 8 },
        py: { xs: 5, md: 8 },
        }}
    >
        <Typography
        sx={{
            width: { xs: "100%", md: "573px" },
            height: { xs: "auto", md: "32px" },
            fontFamily: FONT_FAMILY.heading,
            fontSize: { xs: "22px", md: "48px" },
            lineHeight:"62px",
            letterSpacing:"-0.03em",
            fontWeight: 600,
            mb: 10,
            mt:2,
            color: "#111827",
        }}
        >
        Startups By Our Students
        </Typography>

        <Box sx={{ pl: { xs: 0, md: 8 } }}>
        <Grid container spacing={6}>
        {startupsData.map((item: Startup, i: number) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
            <Box>
                <Box
                sx={{
                    width: { xs: "100%", md: "239px" },
                    height: { xs: "120px", md: "159px" },
                    position: "relative",
                    opacity:"100%",
                    mt: 3,
                }}
                >
                <Image
                    src={item.logo}
                    alt={item.title}
                    fill sizes="100vw"
                    style={{ objectFit: "contain" }}
                />
                </Box>

                <Typography
                sx={{
                    width: { xs: "100%", md: "263px" },
                    height: { xs: "auto", md: "85px" },
                    fontFamily: FONT_FAMILY.body,
                    fontWeight:400,
                    letterSpacing:"-0.03em",
                    mt:4,
                    fontSize: "18px",
                    lineHeight: "36px",
                    color: "#000",
                    maxWidth: "300px",
                }}
                >
                {item.description}
                </Typography>

            </Box>
            </Grid>
        ))}
        </Grid>
        </Box>
    </Box>

    </Box>
);
}