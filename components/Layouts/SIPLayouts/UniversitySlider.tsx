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
        pl: { xs: 3, sm: 5, lg: 14 },
        pr: { xs: 3, sm: 5, lg: 6 },
        py: { xs: 3, sm: 8, lg: 10 },
    }}
    >
    <Box sx={{ maxWidth: "1200px", mx: "auto", pr: { lg: 4 } }}>
        <Typography
        sx={{
            
            height: { xs: "auto", lg: "32px" }, 
            fontFamily: FONT_FAMILY.heading,
            fontSize: { xs: "22px", sm: "32px", lg: "48px" }, 
            lineHeight: { xs: "34px", sm: "42px", lg: "62px" }, 
            letterSpacing: "-0.03em",
            fontWeight: 600,
            mb: { xs: 3, sm: 10, lg: 24 }, 
            }}
        >
       Our Students Have Been Accepted To The World's Best Universities
        </Typography>

        
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            slidesPerView={1}
            onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex % 3)
            }
           
        >
        {slides.map((group, index) => (
            <SwiperSlide key={index}>
            <Box
                sx={{
                width: { xs: "100%", lg: "1162px" }, 
                height: { xs: "auto", lg: "162px" }, 
                mx: "auto",

                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(4, 1fr)",
                    lg: "repeat(7, 1fr)", 
                },

                columnGap: { xs: "12px", lg: "7px" },
                rowGap: { xs: "24px", lg: "12px" },

                alignItems: "center",
                justifyItems: "center",
                }}
            >
                {group.map((logo:Logo, i:number) => (
                <Box
                    key={i}
                    sx={{
                        width: { xs: "100%", lg: "160px" },
                        height: { xs: "90px", sm: "100px", lg: "80px" }, 
                        position: "relative",
                    }}
                >
                    <Image
                    src={logo.image}
                    alt="logo"
                    fill sizes="100vw"
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
            mt: { xs: 2, md: 4, lg: 8 }, 
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