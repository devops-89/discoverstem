"use client";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

export default function InventorPromoSection() {
  const slides = [
    {
      title:
        "How many STEM programs have you heard of that can transform your child into\nan inventor?",
      description:
        "600+ Kids aged 6-18 years from DiscoverSTEM have filed patents for their innovations.\n314 kids got their patents granted in the last two years!",
      image: "/Images/Home/Image1.jpg",
      cta: "Imagine your child innovating solutions to\nsome of the world’s biggest problems",
    },
    {
      title:
        "How many STEM programs have you heard of that directly impact selection at top universities?",
      description:
        "DiscoverSTEM students are regularly accepted in top universities like Harvard, Stanford, Princeton, Duke,UC Berkeley,Rice University, Cornell & MIT among several others.\n\nImagine your child being in the elite list of the top 0.2% of the world population by innovating patentable solutions",
      image: "/Images/Home/Image3.jpg",
      cta: "See our student success stories",
    },
    {
      title: "Are you ready to turn your child into\na prodigy?",
      description:
        "90+ Kids from DiscoverSTEM have won International Innovation Competitions, 3 listed among ’25 under 25 Most Innovative Kids’ in their region.\nImagine your child impacting billions by their futuristic innovations.",
      image: "/Images/Home/Image2.jpg",
      cta: "Learn more about our mentorship program",
    },
    {
      title:
        "How many STEM programs have you heard of whose students get featured\nin leading media publications?",
      description:
        "100+ DiscoverSTEM Students have featured on National & International Media for their innovations & achievements.\nImagine your child being acknowledged by the entire world for their innovative solutions.",
      image: "/Images/Home/Image4.jpg",
      cta: "Start your innovation journey today",
    },
  ];

  return (
    <Container
      id="inventor-promo"
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        mx: "auto",
        py: { xs: 2, sm: 4, md: 12 },
        px: { xs: 2, sm: 3, md: 4 },
        
        "& .swiper-wrapper": {
          display: "flex",
          alignItems: "stretch",
        },
        "& .swiper-slide": {
          height: "auto",
          display: "flex",
          alignItems: "stretch",
        },
        "& .swiper": {
          width: "100%",
          overflow: "hidden",
          pb: { xs: "35px", md: "60px" },
        },
        "& .swiper-pagination": {
          bottom: { xs: "0px !important", md: "10px !important" },
          left: "50%",
          transform: "translateX(-50%)",
        },
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
          <SwiperSlide key={i}>
            <Box
              sx={{
                backgroundColor: "#F5F5F7",
                border: "2px solid #814D9F",
                borderRadius: { xs: "24px", md: "40px" },
                overflow: "hidden",
                position: "relative",
                minHeight: { xs: "auto", md: "620px" },
                height: "100%", 
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "stretch",
              }}
            >
              {/* Left Content */}
              <Box
                sx={{
                  p: { xs: 2.5, sm: 4, md: 7 },
                  width: { xs: "100%", md: "65%" },
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  minHeight: { xs: "auto", md: "620px" },
                  boxSizing: "border-box",
                  flexGrow: 1,
                }}
              >
                
                <Box
                  sx={{
                    minHeight: {
                      xs: "auto",
                      md: 340,
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: "var(--font-geist-sans), sans-serif",
                      fontWeight: 500,
                      fontSize: { xs: 22, sm: 30, md: 40, lg: 48 },
                      color: "#000",
                      lineHeight: 1.15,
                      mb: { xs: 2, sm: 3, md: 4 },
                      whiteSpace: { xs: "normal", md: "pre-line" },
                    }}
                  >
                    {slide.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "var(--font-geist-sans), sans-serif",
                      fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
                      color: "#333",
                      lineHeight: 1.6,
                      maxWidth: 580,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {slide.description}
                  </Typography>
                </Box>

             
                <Box
                  sx={{
                    mt: "auto",
                    pt: { xs: 2, md: 4 },
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" }, // Centers button block on mobile/768px
                  }}
                >
                  <Box
                    component="button"
                    sx={{
                      whiteSpace: { xs: "normal", md: "pre-line" },
                      backgroundColor: "#814D9F",
                      color: "#fff",
                      borderRadius: "100px",
                      border: "none",
                      px: { xs: 2.5, sm: 3, md: 4 },
                      py: { xs: 1.2, sm: 1.5, md: 1.8 },
                      fontSize: { xs: 13, sm: 14, md: 16 },
                      fontWeight: 500,
                      fontFamily: "var(--font-geist-sans), sans-serif",
                      cursor: "pointer",
                      textAlign: { xs: "center", md: "left" },
                      transition: "all 0.2s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", md: "flex-start" }, 
                      width: { xs: "100%", sm: "420px", md: "fit-content" }, 
                      minHeight: { xs: "68px", sm: "60px", md: "auto" }, 
                      boxSizing: "border-box",
                      lineHeight: 1.3,
                      "&:hover": {
                        backgroundColor: "#6a3e82",
                      },
                    }}
                  >
                    {slide.cta}
                  </Box>
                </Box>
              </Box>

             
              <Box
                sx={{
                  width: { xs: "100%", md: "35%" },
                  position: "relative",
                  minHeight: { xs: 220, sm: 300, md: "auto" },
                }}
              >
                <Box
                  component="img"
                  src={slide.image}
                  alt="Student Innovator"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
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