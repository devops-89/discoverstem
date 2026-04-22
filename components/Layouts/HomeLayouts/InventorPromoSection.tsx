"use client";
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
export default function InventorPromoSection() {
  const slides = [
    {
      title: "How many STEM programs have you heard of, which can transform your child into an Inventor?",
      description: (
        <>
          <b>600+</b> Kids aged <b>6-18 years</b> from <b>DiscoverSTEM</b> have filed patents for their innovations. <b>314 kids</b> got their patents granted in the last two years!
        </>
      ),
      image: "/Images/Home/StemPrograms.png",
      cta: "Imagine your child innovating solutions to some of\nthe world's biggest problems...",
    },
    {
      title: "DiscoverSTEM students have won prestigious NASA Innovation Awards",
      description: (
        <>
          Our students have been recognised globally for their groundbreaking
          innovations, winning awards that even adult scientists aspire to.
        </>
      ),
      image: "/Images/Home/StemPrograms.png",
      cta: "See our student success stories...",
    },
    {
      title: "Ivy League Mentorship: Guided by World-Class Innovators",
      description: (
        <>
          Learn from the best. Our mentors are actual inventors and leaders
          who have shaped industries and created global impact.
        </>
      ),
      image: "/Images/Home/StemPrograms.png",
      cta: "Learn more about our mentorship program...",
    },
    {
      title: "Transforming Ideas into Patents and Real-World Solutions",
      description: (
        <>
          We don't just teach STEM; we teach how to innovate and protect
          your ideas through the actual patent filing process.
        </>
      ),
      image: "/Images/Home/StemPrograms.png",
      cta: "Start your innovation journey today...",
    },
  ];

  return (
    <Container
      id="inventor-promo"
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        mx: "auto",
        py: { xs: 5, md: 12 },
        px: { xs: 3, md: 4 },
        "& .swiper": { 
          width: "100%", 
          overflow: "hidden",
          pb: "60px", 
        },
        "& .swiper-pagination": { bottom: "10px !important", left: "50%", transform: "translateX(-50%)" },
        "& .swiper-pagination-bullet": {
          width: 8,
          height: 8,
          background: "#ccc",
          opacity: 1,
          mx: "4px !important",
        },
        "& .swiper-pagination-bullet-active": {
          background: "#814D9F",
        },
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} style={{ height: "auto" }}>
            <Box
              sx={{
                backgroundColor: "#F5F5F7",
                border: "2px solid #814D9F",
                borderRadius: { xs: "24px", md: "40px" },
                overflow: "hidden",
                position: "relative",
                height: { xs: "auto", md: "600px" },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "stretch",
              }}
            >
              {/* Left Content */}
              <Box
                sx={{
                  p: { xs: 4, md: 8 },
                  width: { xs: "100%", md: "65%" },
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  pt: { xs: 4, md: 9 },
                  height: "100%",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontWeight: 500,
                    fontSize: { xs: 26, md: 40, lg: 50 },
                    color: "#000",
                    lineHeight: 1.15,
                    mb: 4,
                  }}
                >
                  {slide.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: { xs: 16, md: 18, lg: 20 },
                    color: "#333",
                    lineHeight: 1.6,
                    mb: 5,
                    maxWidth: 580,
                  }}
                >
                  {slide.description}
                </Typography>

                <Box>
                  <Box
                    component="button"
                    sx={{
                      backgroundColor: "#814D9F",
                      color: "#fff",
                      borderRadius: "100px",
                      border: "none",
                      px: { xs: 3, md: 5 },
                      py: 2.2,
                      fontSize: { xs: 14, md: 17 },
                      fontWeight: 500,
                      fontFamily: "var(--font-geist-sans), sans-serif",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s",
                      "&:hover": {
                        backgroundColor: "#6a3e82",
                      },
                    }}
                  >
                    {slide.cta.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* Right Content */}
              <Box
                sx={{
                  width: { xs: "100%", md: "35%" },
                  position: "relative",
                  minHeight: { xs: 300, md: "auto" },
                }}
              >
                <Box
                  component="img"
                  src={slide.image}
                  alt="Student Innovator"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: { xs: 0, md: -20 },
                    height: "100%",
                    width: "auto",
                    maxWidth: "130%",
                    objectFit: "contain",
                    objectPosition: "bottom center",
                  }}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
