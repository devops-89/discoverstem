"use client";

import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroSection() {
  const slides = [1, 2, 3];

  return (
    <Box
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
          // Massively decreased the height for mobile screens!
          height: {
            xs: 500, 
            sm: 550,
            md: 620,
            lg: 720,
            xl: 929, // Keeps 1440px desktop completely untouched
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
          margin: "0 6px !important",
          transition: "all 0.3s ease",
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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((_, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "url(/Images/AboutUs/HeroSection.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 100%)",
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  // Tightly anchors the text box safely above the pagination bullets
                  bottom: {
                    xs: 50,
                    sm: 60,
                    md: 70,
                    lg: 95,
                    xl: 120,
                  },
                  px: {
                    xs: 2.5,
                    sm: 4,
                    md: 5,
                    lg: 7,
                    xl: 15,
                  },
                  zIndex: 2,
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  sx={{
                    width: { xs: "100%", lg: "498px" },
                    fontSize: { xs: "32px", sm: "48px", lg: "64px" }, // Prevents word-wrapping on tiny phones
                    lineHeight: { xs: "40px", sm: "56px", lg: "62px" },
                    letterSpacing: "-0.03em",
                    fontWeight: 600,
                    color: "#ffffff", // Pure white!
                    mb: { xs: 2, lg: 4 },
                  }}
                >
                  Panel Of Experts
                </Typography>

                <Typography
                  sx={{
                    width: { xs: "100%", lg: "762px" },
                    fontSize: { xs: "15px", sm: "18px", lg: "22px" },
                    color: "#ffffff", // Pure white! (Removed the 0.85 opacity fade)
                    lineHeight: { xs: "24px", sm: "28px", lg: "38px" },
                    letterSpacing: "-0.03em",
                    mt: { xs: 1, lg: 2 },
                    whiteSpace: "pre-line",
                  }}
                >
                  {`An ever-expanding roster of world-class scientists, engineers, and\ninnovators who mentor students and shape the future of STEM education.`}
                </Typography>

                <Box
                  sx={{
                    width: { xs: "100%", lg: "983px" },
                    mt: { xs: 3, lg: 4 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "space-between", sm: "center", lg: "flex-start" }, // Spaced perfectly across the whole width on mobile!
                    px: { xs: 0, lg: 15 },
                    gap: { xs: 1, sm: 6, lg: 30 },
                    flexWrap: "nowrap", // FORCES the stats to stay on a single line so the box doesn't grow downward!
                  }}
                >
                  {[
                    { value: "21+", label: "Experts" },
                    { value: "6", label: "Research Labs" },
                    { value: "12", label: "Domain" },
                  ].map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", // Centers the text block perfectly
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "22px", sm: "36px", lg: "48px" }, // Scaled down for mobile row
                          fontWeight: 600,
                          color: "#ffffff", // Pure white!
                          lineHeight: { xs: "28px", lg: "62px" },
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {item.value}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: "13px", sm: "20px", lg: "35px" },
                          lineHeight: { xs: "18px", sm: "28px", lg: "40px" },
                          letterSpacing: "-0.03em",
                          color: "#ffffff", // Pure white!
                          fontWeight: 600,
                          mt: { xs: 0.5, lg: 1 },
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}