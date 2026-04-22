'use client';
import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Header from '../../Widgets/Header';

export default function HeroSection() {
  const slides = [1, 2, 3]; 

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Header />
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      >
        {slides.map((_, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/Images/AboutUs/HeroSection.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&::after': {
                   content: '""',
                   position: 'absolute',
                   inset: 0,
                   bgcolor: 'rgba(0,0,0,0.1)' // optional subtle overlay if needed to make Header pop
                }
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom pagination container positioned at the bottom center */}
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
        }}
      />
    </Box>
  );
}
