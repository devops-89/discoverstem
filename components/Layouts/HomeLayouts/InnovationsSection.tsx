"use client";
import React, { useRef } from "react";
import { Container, Box, Card, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SectionHeading from "@/components/Widgets/SectionHeading";
import { innovationCards } from "@/assets/Generic-data";

export default function InnovationsSection() {
  const swiperRef = useRef<import("swiper").Swiper | null>(null);

  return (
    <Container
      id="innovations"
      maxWidth={false}
      sx={{
        maxWidth: "min(1196px, 100%)",
        py: { xs: 4, sm: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        "& .swiper-wrapper": {
          display: "flex",
          alignItems: "stretch"
        },
        "& .swiper-slide": {
          height: "auto",
          display: "flex",
          alignItems: "stretch"
        }
      }}>
      
      <SectionHeading
        label="DiscoverSTEM Students"
        title="Trailblazing Innovations"
        viewAllHref="/success-stories/young-investors "
        swiperRef={swiperRef} />
      
      <Box sx={{ "& .swiper": { width: "100%", overflow: "visible" }, mt: 4 }}>
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            600: { slidesPerView: 1.5, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 30 }
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}>
          
          {innovationCards.map((item, i) =>
          <SwiperSlide key={i}>
              <Card
              elevation={0}
              sx={{
                bgcolor: "#F5F5F7",
                borderRadius: "24px",
                overflow: "hidden",
                transition: "transform 0.2s ease-in-out",
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                "&:hover": { transform: "translateY(-4px)" }
              }}>
              
                <Box
                sx={{
                  p: 2,
                  pb: 0
                }}>
                
                  <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 1,
                    height: { xs: 200, sm: 260, md: 300, lg: 350 },
                    objectFit: "cover",
                    borderRadius: "16px",
                    display: "block"
                  }} />
                
                </Box>
                <Box
                sx={{
                  p: { xs: 2.5, sm: 3, md: 4 },
                  textAlign: "center",
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                
                  <Typography
                  sx={{
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: { xs: 16, sm: 18, md: 22 },
                    fontWeight: 600,
                    color: "#000",
                    lineHeight: "1.3"
                  }}>
                  
                    {item.title}
                  </Typography>
                </Box>
              </Card>
            </SwiperSlide>
          )}
        </Swiper>
      </Box>
    </Container>);

}