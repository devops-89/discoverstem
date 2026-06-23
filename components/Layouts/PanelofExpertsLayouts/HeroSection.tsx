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
     
        mt: { xs: 1.5, md: 2, lg: "18px" },
        mx: "auto",
        width: "100%",
       
        maxWidth: {
          xs: "calc(100% - 24px)",
          md: "calc(100% - 40px)",
          lg: "1403px",
        },
        borderRadius: { xs: "14px", md: "20px" },
        overflow: "hidden",

        "& .swiper": {
          width: "100%",
          
          height: {
             xs: 520,
            sm: 560,
            md: "800px",
             lg: "929px",
            
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
                 
                  background: {
                    xs: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 100%)",
                    lg: "linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65))"
                  },
                  zIndex: 1,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  
                  left: { xs: 0, lg: "118px" },
                  right: { xs: 0, lg: "auto" },
                 
                  top: { xs: "auto", lg: "474px" },
                  bottom: {
                    xs: 70,
                    sm: 90,
                    md: 70,
                    lg: "auto",
                  },
                  px: {
                    xs: 2.5,
                    sm: 4,
                    md: 5,
                    lg: 0,
                  },
                  zIndex: 2,
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  sx={{
                    width: { xs: "100%", lg: "498px" },
                    fontFamily: "'Work Sans', sans-serif",
                   
                    fontSize: { xs: "32px", sm: "48px", lg: "64px" }, 
                    
                    lineHeight: { xs: "40px", sm: "56px", lg: "62px" },
                    letterSpacing: "-0.03em",
                    
                    fontWeight: 600,
                    textTransform: "capitalize",
                    color: "#ffffff",
                    mb: { xs: 2, lg: 0 },
                  }}
                >
                  Panel Of Experts
                </Typography>

                <Typography
                  sx={{
                    
                    width: { xs: "100%", lg: "762px" },
                    fontFamily: "'Work Sans', sans-serif",
                    
                    fontSize: { xs: "15px", sm: "18px", lg: "22px" },
                    color: "#ffffff", 
                    
                    lineHeight: { xs: "24px", sm: "28px", lg: "38px" },
                    letterSpacing: "-0.03em",
                    fontWeight: 400,
                    
                    mt: { xs: 1, lg: "14px" }, 
                    whiteSpace: "pre-line",
                  }}
                >
                  {`An ever-expanding roster of world-class scientists, engineers, and\ninnovators who mentor students and shape the future of STEM education.`}
                </Typography>

                <Box
                  sx={{
                   
                    width: { xs: "100%", lg: "983px" },
                   
                    ml: { lg: "105px" },
                    
                    mt: { xs: 3, lg: "79px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "space-between", sm: "space-around", md:"space-around",  lg: "space-between" }, 
                    px: 0,
                    gap: { xs: 1, sm: 6, lg: 0 },
                    flexWrap: "nowrap", 
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
                        alignItems: "center", 
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Work Sans', sans-serif",
                         
                          fontSize: { xs: "22px", sm: "36px", lg: "48px" }, 
                          fontWeight: 600,
                          color: "#ffffff", 
                          
                          lineHeight: { xs: "28px", lg: "62px" },
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {item.value}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "'Work Sans', sans-serif",
                          
                          fontSize: { xs: "13px", sm: "20px", lg: "40px" },
                         
                          lineHeight: { xs: "18px", sm: "28px", lg: "62px" },
                          letterSpacing: "-0.03em",
                          color: "#ffffff", 
                          fontWeight: 600,
                          mt: { xs: 0.5, lg: 0 }, 
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