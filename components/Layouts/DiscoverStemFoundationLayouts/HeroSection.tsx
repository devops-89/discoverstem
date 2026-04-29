'use client';
import { FONT_FAMILY } from '@/utils/Fonts';
import { Box, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HeroSection() {
    const slides = [
    {
    title: "Foundation of DiscoverSTEM",
    },
    {
    title: "Foundation of DiscoverSTEM",
    },
    {
    title: "Foundation of DiscoverSTEM",
    },
];

    return (
    <Box sx={{ position: 'relative', width: '1403px', maxWidth: "calc(100% - 40px)", height: '100vh', mt: 2, mx: "auto", borderRadius: '20px', overflow: 'hidden' }}>
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
                bottom: "160px",
                left: "100px",
                zIndex: 2,
                maxWidth: "600px",
                color: "#fff",
                }}>
                <Typography
                sx={{
                    fontFamily:FONT_FAMILY.heading,
                    width: { xs: "100%", md: "900px" },
                    height: { xs: "auto", md: "42px" },
                    fontSize: "64px",
                    fontWeight: 600,
                    lineHeight: "62px",
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

      {/* Pagination */}
    <Box
        className="custom-pagination"
        sx={{
            position: 'absolute',
            bottom: '40px',
            left: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            zIndex: 10,
            '& .swiper-pagination-bullet': {
            width: '40px',
            height: '4px',
            borderRadius: '4px',
            bgcolor: 'rgba(255,255,255,0.4)',
            transition: 'all 0.3s ease',
            margin: '0 !important',
            opacity: 1,
            cursor: 'pointer'
            },
            '& .swiper-pagination-bullet-active': {
            bgcolor: '#ffffff',
            boxShadow: '0 0 5px rgba(0,0,0,0.3)'
            }
        }}/>
    </Box>
);
}