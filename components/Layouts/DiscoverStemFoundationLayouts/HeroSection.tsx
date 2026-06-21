'use client';
import { FONT_FAMILY } from '@/utils/Fonts';
import { Box, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HeroSection() {
  const slides = [
    { title: "DiscoverSTEM Foundation" },
    { title: "DiscoverSTEM Foundation" },
    { title: "DiscoverSTEM Foundation" },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        mt: { xs: 1.5, md: 2 },
        mx: "auto",
        width: "100%",
        maxWidth: {
          xs: "calc(100% - 24px)",
          md: "calc(100% - 40px)",
          xl: "1403px",
        },
        // FIXED: Applied height DIRECTLY to the parent container so it never collapses to 0px!
        height: {
          xs: "500px",
          sm: "550px",
          md: "620px",
          lg: "720px",
          xl: "929px",
        },
        borderRadius: { xs: "14px", md: "20px" },
        overflow: 'hidden',
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/Images/AboutUs/HeroSection.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  bgcolor: 'rgba(0,0,0,0.1)',
                }
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: "80px", sm: "100px", lg: "160px" },
                  left: { xs: "24px", sm: "40px", lg: "100px" },
                  right: { xs: "24px", lg: "auto" }, 
                  zIndex: 2,
                  maxWidth: "600px",
                  color: "#fff",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: FONT_FAMILY.heading,
                    width: { xs: "100%", lg: "900px" },
                    height: { xs: "auto", lg: "42px" },
                    fontSize: { xs: "36px", sm: "48px", lg: "64px" }, 
                    fontWeight: 600,
                    lineHeight: { xs: "44px", sm: "56px", lg: "62px" },
                    letterSpacing: "-0.03em",
                  }}
                >
                  {slide.title}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination - Unified Pill Design */}
      <Box
        className="custom-pagination"
        sx={{
          position: 'absolute',
          bottom: { xs: '18px !important', md: '24px !important' },
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 10,
          '& .swiper-pagination-bullet': {
            width: { xs: "18px", md: "28px" },
            height: "6px",
            borderRadius: "3px",
            bgcolor: "rgba(255,255,255,0.55)",
            transition: "all 0.3s ease",
            margin: "0 6px !important",
            opacity: 1,
            cursor: "pointer"
          },
          '& .swiper-pagination-bullet-active': {
            bgcolor: '#ffffff',
            width: { xs: "34px", md: "48px" },
          }
        }}
      />
    </Box>
  );
}