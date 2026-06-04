"use client";
import { Box, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { heroImage } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";

const heroSlides = [
  {
    image: heroImage,
    title: "Texas State Capitol Honors DiscoverSTEM and Our Young Innovators",
    description:
      "The Texas House of Representatives passed a House Resolution #403, commemorating DiscoverSTEM’s \n profound impact on shaping the next generation of innovators & leaders.",
  },
  {
    image: heroImage,
    title: "600+ Kids Have Filed Patents Through DiscoverSTEM",
    description:
      "314 kids got their patents granted in the last two years, turning their innovative ideas into real intellectual property.",
  },
  {
    image: heroImage,
    title: "Empowering the Next Generation of Leader",
    description:
      "From Ivy League mentorship to startup ecosystems, DiscoverSTEM opens doors for young innovators across the globe.",
  },
];

export default function HeroSection() {
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
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              {/* Background Image */}
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
                }}
              />
              {/* Gradient overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.7) 100%)",
                }}
              />
              {/* Content at bottom */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  px: { xs: 3, md: 8 },
                  pb: { xs: 7, md: 10 },
                }}
              >
                <Grid container spacing={3} alignItems="flex-end">
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      sx={{
                        fontFamily: FONT_FAMILY.heading,
                        color: "#fff",
                        fontSize: { xs: 28, md: 48 },
                        lineHeight: 1.18,
                        fontWeight: 500,
                      }}
                    >
                      {slide.title}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
  sx={{
    color: "#f0f0f0",
    fontSize: { xs: 15, md: 18 },
    lineHeight: 1.6,
    whiteSpace: "pre-line", // Fixed here
  }}
>
  {slide.description}
</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
