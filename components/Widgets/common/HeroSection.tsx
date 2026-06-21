"use client";

import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface HeroSlide {
  title: string;
  description?: string;
  image: string;
}

interface HeroSliderProps {
  slides: HeroSlide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <Box
      id="home"
      sx={{
        mt: { xs: 1.5, md: 2 },
        mx: "auto",
        width: "100%",
        maxWidth: {
          xs: "calc(100% - 24px)",
          md: "calc(100% - 40px)",
          xl: "1403px",
        },
        borderRadius: { xs: "14px", md: "20px" },
        overflow: "hidden",

        "& .swiper": {
          width: "100%",
          height: {
            xs: 520,
            sm: 560,
            md: 620,
            lg: 720,
            xl: 929,
          },
        },

        "& .swiper-pagination": {
          bottom: { xs: "18px !important", md: "24px !important" },
        },

        "& .swiper-pagination-bullet": {
          width: { xs: 18, md: 28 },
          height: 6,
          borderRadius: 3,
          background: "rgba(255,255,255,0.55)",
          opacity: 1,
        },

        "& .swiper-pagination-bullet-active": {
          background: "#fff",
          width: { xs: 34, md: 48 },
        },
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Box
                component="img"
                src={slide.image}
                alt={slide.title}
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: 1,
                  height: 1,
                  objectFit: "cover",
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.7) 100%)",
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 60, sm: 100, lg: 190 }, 
                  left: 0,
                  right: 0,
                  px: { xs: 3, sm: 8, lg: 16 }, 
                  zIndex: 2,
                  maxWidth: "900px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "24px", sm: "40px", lg: "64px" }, 
                    // 🔥 FIX: Adjusted line-height to 76px so multiline headings don't clip/overlap!
                    lineHeight: { xs: "38px", sm: "50px", lg: "76px" }, 
                    letterSpacing: "-0.03em",
                    color: "#FFFFFF",
                  }}
                >
                  {slide.title}
                </Typography>

                <Typography
                  sx={{
                    mt: { xs: 2, lg: 3 },
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "14px", sm: "18px", lg: "28px" }, 
                    lineHeight: { xs: "22px", sm: "28px", lg: "34px" }, 
                    letterSpacing: "-0.01em",
                    color: "rgba(255,255,255,0.85)",
                    maxWidth: "727px",
                  }}
                >
                  {slide.description}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}