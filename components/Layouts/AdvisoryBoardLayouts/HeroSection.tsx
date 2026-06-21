"use client";

import { FONT_FAMILY } from "@/utils/Fonts";
import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const advisorySlides = [
  {
    image: "/Images/AboutUs/HeroSection.png",
    title: "Advisory Board",
    description:
      "A distinguished group of leaders from aerospace, medicine, entrepreneurship, and law — guiding DiscoverSTEM's mission to inspire the next generation of innovators.",
  },
  {
    image: "/Images/AboutUs/HeroSection.png",
    title: "Advisory Board",
    description:
      "A distinguished group of leaders from aerospace, medicine, entrepreneurship, and law — guiding DiscoverSTEM's mission to inspire the next generation of innovators.",
  },
  {
    image: "/Images/AboutUs/HeroSection.png",
    title: "Advisory Board",
    description:
      "A distinguished group of leaders from aerospace, medicine, entrepreneurship, and law — guiding DiscoverSTEM's mission to inspire the next generation of innovators.",
  },
];

export default function HeroSection() {
  return (
    <Box
      id="hero"
      sx={{
        mt: { xs: 1.5, md: 2, lg: "18px" },
        mx: "auto",
        width: "100%",
        maxWidth: {
          xs: "calc(100% - 24px)",
          md: "calc(100% - 40px)",
          lg: "1403px", // 1440px screen gets exactly 1403px max-width
        },
        borderRadius: { xs: "14px", md: "20px" },
        overflow: "hidden",
        position: "relative",

        "& .swiper": {
          width: "100%",
          height: {
            xs: 520,
            sm: 560,
            md: 620,
            lg: 929, // 1440px screen gets exactly 929px height
          },
        },

        "& .swiper-pagination": {
          bottom: { xs: "18px !important", md: "24px !important", lg: "40px !important" },
        },

        "& .swiper-pagination-bullet": {
          width: { xs: 18, md: 28, lg: 40 },
          height: { xs: 6, lg: 4 },
          borderRadius: { xs: 3, lg: 4 },
          background: { xs: "rgba(255,255,255,0.55)", lg: "rgba(255,255,255,0.4)" },
          opacity: 1,
          transition: "all 0.3s ease",
          mx: "8px !important",
        },

        "& .swiper-pagination-bullet-active": {
          background: "#fff",
          width: { xs: 34, md: 48, lg: 40 },
          boxShadow: { xs: "none", lg: "0 0 5px rgba(0,0,0,0.3)" },
        },
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
      >
        {advisorySlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Box
                component="img"
                src={slide.image}
                alt={slide.title}
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Dynamic Gradient for Mobile, Solid Figma Overlay for Desktop */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: {
                    xs: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 35%, rgba(0,0,0,0.78) 100%)",
                    lg: "rgba(0, 0, 0, 0.65)", // Figma overlay exactly applied for lg/1440px
                  },
                }}
              />

              {/* Text Container */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 0, lg: "100px" }, // Exactly 100px on 1440px
                  right: { xs: 0, lg: "auto" },
                  bottom: {
                    xs: 64,
                    sm: 72,
                    md: 85,
                    lg: 120, // Perfectly positioned for 1440px
                  },
                  px: {
                    xs: 2.5,
                    sm: 4,
                    md: 5,
                    lg: 0,
                  },
                  zIndex: 2,
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.heading,
                    color: "#fff",
                    fontSize: {
                      xs: "28px",
                      sm: "34px",
                      md: "34px",
                      lg: "64px", // Exact Figma font-size
                    },
                    lineHeight: {
                      xs: "36px",
                      sm: "42px",
                      md: "42px",
                      lg: "62px", // Exact Figma line-height
                    },
                    fontWeight: { xs: 500, lg: 700 }, // Exact Figma weight
                    letterSpacing: "-0.03em",
                    wordBreak: "normal",
                    overflowWrap: "break-word",
                    mb: { xs: 2, md: 3, lg: 4 },
                  }}
                >
                  {slide.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#f0f0f0",
                    fontFamily: FONT_FAMILY.body,
                    fontSize: {
                      xs: "15px",
                      sm: "16px",
                      md: "16px",
                      lg: "22px", // Exact Figma font-size
                    },
                    lineHeight: {
                      xs: "24px",
                      sm: "25px",
                      md: "26px",
                      lg: "33px", // Exact Figma line-height
                    },
                    whiteSpace: "pre-line",
                    maxWidth: {
                      xs: "100%",
                      md: "470px",
                      lg: "1039px", // Exact Figma width limit
                    },
                    wordBreak: "normal",
                    overflowWrap: "break-word",
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