"use client";

import { logosData } from "@/assets/Generic-data";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FONT_FAMILY } from "@/utils/Fonts";
import { Logo } from "@/utils/Types";
import "swiper/css";

export default function LogoSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const chunkSize = 14;
    const slides: any[] = [];

    for (let i = 0; i < logosData.length; i += chunkSize) {
    slides.push(logosData.slice(i, i + chunkSize));
    }

    while (slides.length < 3) {
    slides.push(slides[slides.length % slides.length]);
    }

return (
    <Box
    sx={{
        pl: { xs: 3, md: 14 },
        pr: { xs: 3, md: 6 },
        py: { xs: 6, md: 10 },
    }}
    >
    <Box sx={{ maxWidth: "1200px", mx: "auto", pr: { md: 4 } }}>
        <Typography
        sx={{
            
            height: { xs: "auto", md: "32px" },
            fontFamily: FONT_FAMILY.heading,
            fontSize: { xs: "20px", md: "48px" },
            lineHeight: "62px",
            letterSpacing: "-0.03em",
            fontWeight: 600,
            mb: 24,
            }}
        >
       Our Students Have Been Accepted To The World's Best Universities
        </Typography>

        {/* SWIPER */}
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            slidesPerView={1}
            onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex % 3)
            }
            style={{ paddingBottom: "40px" }}
        >
        {slides.map((group, index) => (
            <SwiperSlide key={index}>
            <Box
                sx={{
                width: { xs: "100%", md: "1162px" },
                height: { xs: "auto", md: "162px" },
                mx: "auto",

                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(4, 1fr)",
                    md: "repeat(7, 1fr)",
                },

                columnGap: "7px",
                rowGap: "12px",

                alignItems: "center",
                justifyItems: "center",
                }}
            >
                {group.map((logo:Logo, i:number) => (
                <Box
                    key={i}
                    sx={{
                        width: { xs: "100%", md: "160px" },
                        height: { xs: "120px", md: "80px" },
                        position: "relative",
                    }}
                >
                    <Image
                    src={logo.image}
                    alt="logo"
                    fill
                    style={{
                        objectFit: "contain",
                        opacity: "100%",
                    }}
                    />
                </Box>
                ))}
            </Box>

            </SwiperSlide>
        ))}
        </Swiper>

        <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            mt: 3,
        }}
        >
        {[0, 1, 2].map((i) => (
            <Box
            key={i}
            sx={{
                width: activeIndex === i ? "36px" : "28px",
                height: "3px",
                borderRadius: "2px",
                background: activeIndex === i ? "#111" : "#C4C4C4",
                transition: "all 0.3s ease",
            }}
            />
        ))}
        </Box>

    </Box>
    </Box>
);
}