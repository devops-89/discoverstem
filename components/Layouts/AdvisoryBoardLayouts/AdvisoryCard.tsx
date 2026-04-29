"use client";

import PrimaryButton from "@/components/Widgets/PrimaryButton";
import { FONT_FAMILY } from "@/utils/Fonts";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function AdvisoryCard({ data }: any) {
return (
    <Box
    sx={{
        display: "flex",
        flexDirection: {
        xs: "column",
        md: data.reverse ? "row-reverse" : "row",
        },
        width: "100%",
        maxWidth: "1160px",
        height: { xs: "auto", md: "597px" },
        mx: "auto",
        borderRadius: "30px",
        overflow: "hidden",
        backgroundColor: "#F4EFFA",
        }}
    >

    <Box
        sx={{
        position: "relative",
        width: { xs: "100%", md: "452px" },
        height: { xs: "260px", md: "597px" },
        backgroundColor: "#C4C4C4",
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

    <Box
    sx={{
    width: "100%",
    maxWidth: "686px",
    p: { xs: 3, md: "40px" },
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    }}>

    <Typography
    sx={{
        width:"100%",
        maxWidth:"270px",
        height:"auto",
        maxHeight:"13px",
        fontFamily: FONT_FAMILY.heading,
        fontSize: "20px",
        fontWeight: 400,
        color: "#7B53A1",
        mb: 1.5,
    }}>
    {data.title}
    </Typography>


    <Typography
    sx={{
        width: { xs: "100%", md: "460px" },
        height: { xs: "auto", md: "32px" },
        fontFamily: FONT_FAMILY.heading,
        fontWeight: 600,
        fontSize: { xs: "26px", md: "48px" },
        lineHeight: { xs: "34px", md: "62px" },
        letterSpacing:"-0.03em",
        color: "#111827",
        mb: 2,
        mt:8
    }}>
    {data.name}
    </Typography>


    <Typography
    sx={{
        width: { xs: "100%", md: "686px" },
        height: { xs: "auto", md: "14px" },
        fontFamily: FONT_FAMILY.body,
        fontSize: "20px",
        lineHeight: "62px",
        letterSpacing:"-0.03em",
        color: "#777777",
        mb: 8,
        }}>
    {data.role}
    </Typography>

    <Typography
    sx={{
        width: { xs: "100%", md: "668px" },
        height: { xs: "auto", md: "123px" },
        fontFamily: FONT_FAMILY.body,
        fontSize: "22px",
        lineHeight: "36px",
        letterSpacing:"-0.03em",
        color: "#000",
        mb: 6,
        whiteSpace:"pre-line"
    }}>
    {data.description}
    </Typography>


    <PrimaryButton
    showIcon={false}
    sx={{
        width: "183px",
        height: "56px",
        px: "24px",
        pr: "56px",
        borderRadius: "30px",
        fontSize: "16px",
        lineHeight:"24px",
        letterSpacing:"-0.01em",
        fontWeight: 500,
        justifyContent: "flex-start",
        position: "relative",
        mt:8
        }}
>
    Read Full Bio

    <Box
        sx={{
        position: "absolute",
        right: "6px",
        top: "50%",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        }}>
        <ArrowOutwardIcon
        sx={{ fontSize: "16px", color: "#7B53A1" }}
        />
    </Box>
    </PrimaryButton>
    </Box>
    </Box>
);
}