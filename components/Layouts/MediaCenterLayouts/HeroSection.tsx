"use client";

import { Heromedia } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function HeroSection() {
  const slides = [
    {
      image: Heromedia.image,
      title: Heromedia.title,
      description: Heromedia.description,
    },
    {
      image: Heromedia.image,
      title: Heromedia.title,
      description: Heromedia.description,
    },
    {
      image: Heromedia.image,
      title: Heromedia.title,
      description: Heromedia.description,
    },
  ];

    return (
        <Box
          id="home"
          sx={{
            mt: 2,
            mx: "auto",
            width: "1403px",
            maxWidth: "calc(100% - 40px)",
            borderRadius: "20px",
            overflow: "hidden",
            "& .swiper": { width: "100%", height: { xs: 540, md: 929 } },
            "& .swiper-pagination": { bottom: "24px !important" },
            "& .swiper-pagination-bullet": {
              width: 28,
              height: 6,
              borderRadius: 3,
              background: "rgba(255,255,255,0.55)",
              opacity: 1,
            },
            "& .swiper-pagination-bullet-active": {
              background: "#fff",
              width: 48,
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
                      zIndex:1,
                      height: 1,
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.7) 100%)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: { xs: 40, md: 190 },
                      left: 0,
                      right: 0,
                      px: { xs: 3, md: 16 },
                      zIndex: 2,
                  
                      maxWidth: "727px",
                    }}
                  >
                <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.heading,
                    fontWeight: 600,
                    fontSize: { xs: "32px", md: "64px" },
                    lineHeight: { xs: "40px", md: "62px" },
                    letterSpacing: "-0.03em",
                    color: "#FFFFFF",
                    maxWidth: "441px",
                  }}
                >
                  {slide.title}
                </Typography>
              
                <Typography
                  sx={{
                    mt: { xs: 2, md: 3 },
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: "16px", md: "28px" },
                    lineHeight: { xs: "24px", md: "34px" },
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
