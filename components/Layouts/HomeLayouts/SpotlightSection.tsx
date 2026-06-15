"use client";
import React, { useRef } from "react";
import { Container, Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SectionHeading from "@/components/Widgets/SectionHeading";
import { studentSpotlight } from "@/assets/Generic-data";

export default function SpotlightSection() {
  const swiperRef = useRef<import("swiper").Swiper | null>(null);
  
  return (
    <Container id="spotlight" sx={{ py: 6 }}>
      <SectionHeading
        label="Celebrating excellence and innovation"
        title="Student Spotlight"
        swiperRef={swiperRef}
        viewAllHref="/success-stories/college-acceptance"
      />
      <Box
        sx={{
          "& .swiper": { width: "100%", pb: 1 },
        }}
      >
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {[...studentSpotlight, ...studentSpotlight].map((student, i) => (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  borderRadius: "16px",
                  height: 340,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={student.image}
                  alt={student.name}
                  sx={{ width: 1, height: 1, objectFit: "cover", display: "block" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
                    p: 2,
                    pt: 5,
                  }}
                >
                  <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
                    {student.name}
                  </Typography>
                  {student.college && (
                    <Typography sx={{ color: "#e0e0e0", fontWeight: 500, fontSize: 13 }}>
                      {student.college}
                    </Typography>
                  )}
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}
