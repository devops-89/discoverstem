"use client";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ExpertCard({ data }: any) {
return (
    <Box
    sx={{
        width:{xs:"100%",md:"471px"},
        height:{xs:"auto",md:"150px"},
        display: "flex",
        gap: 2,
        alignItems: "flex-start",
    }}
    >
    <Box
        sx={{
            width:{xs:"100%",md:"150px"},
            height:{xs:"auto",md:"150px"},
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            flexShrink: 0,
        }}
    >
        <Image
        src={data.image}
        alt={data.name}
        fill
        style={{ objectFit: "cover" }}
        />
        </Box>

        <Box>
        <Typography
        sx={{
            width:{xs:"100%",md:"327px"},
            height:{xs:"auto",md:"12px"},
            fontSize: "18px",
            textDecoration: "underline",
            color: "#000",
            fontFamily: FONT_FAMILY.heading,
            fontWeight:300,
            lineHeight:"32px",
            mb: 0.5,
        }}
        >
        {data.category}
        </Typography>

        <Typography
        sx={{
            width:{xs:"100%",md:"195px"},
            height:{xs:"auto",md:"15px"},
            fontSize: "22px",
            fontWeight: 600,
            fontFamily: FONT_FAMILY.body,
            lineHeight:"62px",
            letterSpacing:"-0.03em",
            color: "#000",
            mt:2
        }}
        >
        {data.name}
        </Typography>

        <Typography
        sx={{
            fontSize: "16px",
            color: "#646464",
            fontFamily:FONT_FAMILY.body,
            fontWeight:300,
            lineHeight:"32px",
            mt:3,
            }}>
            {data.degree}
        </Typography>

        <Typography
        sx={{
            width:{xs:"100%",md:"288px"},
            height:{xs:"auto",md:"11px"},
            fontSize: "16px",
            color: "#646464",
            lineHeight:"32px",
            }}>
            {data.org}
        </Typography>
    </Box>
    </Box>
);
}