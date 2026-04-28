"use client";

import { stepsData } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Step } from "@/utils/Types";
import { Box, Typography } from "@mui/material";
import { useRef, useState } from "react";

export default function VerticalStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
    const handleClick = (index: number) => {
    setActiveStep(index);
    const el = stepRefs.current[index];
    if (el && containerRef.current) {
        containerRef.current.scrollTo({
        top: el.offsetTop - 40,
        behavior: "smooth",
    });
    }
};

return (
    <Box sx={{ display: "flex", position: "relative",
    minHeight: "600px",mb:20,
}}>

    <Box
        sx={{
            position: "absolute",
            left: 8,
            top: 0,
            bottom: 0,
            width: "2px",
            bgcolor: "#6BAF6E",
        }}
    />

        <Box
        ref={containerRef}
        sx={{
            height: "600px",
            overflowY: "auto",
            pl: 5,
            width: "100%",

            "&::-webkit-scrollbar": {
            width: "6px",
            },
            "&::-webkit-scrollbar-track": {
            background: "#E0E0E0",
            borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
            background: "#7E57C2",
            borderRadius: "10px",
        },
        }}
    >
        {stepsData.map((item: Step, index: number) => (
            <Box
            key={index}
            ref={(el: HTMLDivElement | null) => {(stepRefs.current[index] = el)}}
            onClick={() => handleClick(index)}
            sx={{
            position: "relative",
            mb: 6,
            cursor: "pointer",
            }}
        >
            <Box
                sx={{
                position: "absolute",
                left: "-36px",
                top: 0,
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor:
                index <= activeStep ? "#6BAF6E" : "#D3D3D3",
                transition: "0.3s",
            }}
            />

            <Box
                sx={{
                width: { xs: "100%", md: "131px" },
                height: { xs: "auto", md: "60px" },
                display: "inline-block",
                px: 3,
                py: "4px",
                borderRadius: "55px",
                border: "1px solid #6BAF6E",
                color: "#7E57C2",
                fontSize: 20,
                lineHeight:"50px",
                mb: 1,
                background: "#F9F9F9",
            }}
            >
            {item.step}
            </Box>

            <Typography
                sx={{
                width: { xs: "100%", md: "587px" },
                height: { xs: "auto", md: "28px" },
                fontFamily: FONT_FAMILY.heading,
                fontWeight: 600,
                lineHeight:"28px",
                fontSize:"28px",
                mt:1,
                mb: 1,
            }}
            >
            {item.title}
            </Typography>

            <Typography
            sx={{
                width: { xs: "100%", md: "587px" },
                height: { xs: "auto", md: "84px" },
                fontFamily: FONT_FAMILY.body,
                fontSize: "20px",
                color: "#777",
                lineHeight: "28px",
                fontWeight:400,
            }}
            >
            {item.description}
            </Typography>
        </Box>
        ))}
    </Box>
    </Box>
);
}