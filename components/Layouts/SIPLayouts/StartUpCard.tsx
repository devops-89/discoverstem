"use client";
import { startupsData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Startup } from "@/utils/Types";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function StartupCard() {
return (
    <Box sx={{ px: { xs: 3, sm: 5, lg: 14 }, py: { xs: 4, lg: 10 } }}>
    
    <Box
        sx={{
        width: { xs: "100%", lg: "1255px" }, 
        height: { xs: "auto", lg: "607px" }, 
        mx: "auto",
        background: "#F4F4F4",
        borderRadius: { xs: "24px", lg: "57px" }, 

        px: { xs: 3, sm: 5, lg: 8 },
        py: { xs: 5, lg: 8 },
        }}
    >
        <Typography
        sx={{
            width: { xs: "100%", lg: "573px" },
            height: { xs: "auto", lg: "32px" },
            fontFamily: FONT_FAMILY.heading,
            fontSize: { xs: "28px", sm: "36px", lg: "48px" },
            lineHeight: { xs: "38px", sm: "46px", lg: "62px" }, 
            letterSpacing:"-0.03em",
            fontWeight: 600,
            mb: { xs: 4, lg: 10 }, 
            mt: 2,
            color: "#111827",
            textAlign: { xs: "center", md:"left", lg: "left" }, 
        }}
        >
        Startups By Our Students
        </Typography>

        <Box sx={{ pl: { xs: 0, lg: 8 } }}>
        <Grid container spacing={{ xs: 6, lg: 6 }}>
        {startupsData.map((item: Startup, i: number) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
            
            <Box sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <Box
                sx={{
                    width: { xs: "100%", lg: "239px" },
                    height: { xs: "120px", lg: "159px" },
                    position: "relative",
                    opacity:"100%",
                    mt: { xs: 0, lg: 3 },
                    mx: { xs: "auto", lg: 0 },
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
                    width: { xs: "100%", lg: "263px" },
                    height: { xs: "auto", lg: "85px" },
                    fontFamily: FONT_FAMILY.body,
                    fontWeight:400,
                    letterSpacing:"-0.03em",
                    mt: { xs: 2, lg: 4 },
                    fontSize: { xs: "16px", lg: "18px" },
                    lineHeight: { xs: "28px", lg: "36px" },
                    color: "#000",
                    maxWidth: "300px",
                    mx: { xs: "auto", lg: 0 },
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