"use client";
import React, { useRef } from "react";
import { Container, Box } from "@mui/material";
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
                  height: 320,
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
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}
