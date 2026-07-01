"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { Heromedia } from "@/assets/Generic-data";
import Link from "next/link";
import PrimaryButton from "@/components/Widgets/PrimaryButton";

import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroSection() {
  const slides = [
  {
    image: Heromedia.image,
    title: Heromedia.title,
    description: Heromedia.description
  },
  {
    image: Heromedia.image,
    title: Heromedia.title,
    description: Heromedia.description
  },
  {
    image: Heromedia.image,
    title: Heromedia.title,
    description: Heromedia.description
  }];


  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        mt: { xs: 1.5, lg: 2 },
        mx: "auto",
        width: "100%",
        maxWidth: {
          xs: "calc(100% - 24px)",
          lg: "calc(100% - 40px)",
          xl: "1403px"
        },
        height: {
          xs: "500px",
          sm: "600px",
          md: "800px",
          lg: "929px"
        },
        borderRadius: { xs: "14px", lg: "20px" },
        overflow: "hidden",
        "& .swiper-pagination": { bottom: { xs: "18px !important", lg: "24px !important" } },
        "& .swiper-pagination-bullet": {
          width: { xs: 18, lg: 28 },
          height: 6,
          borderRadius: 3,
          background: "rgba(255,255,255,0.55)",
          opacity: 1,
          transition: "all 0.3s ease"
        },
        "& .swiper-pagination-bullet-active": {
          background: "#fff",
          width: { xs: 34, lg: 48 }
        }
      }}>
      
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        style={{ width: "100%", height: "100%" }}>
        
        {slides.map((slide, i) =>
        <SwiperSlide key={i}>
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              sx={{
                position: "absolute",
                inset: 0,
                width: 1,
                zIndex: 1,
                height: 1,
                objectFit: "cover"
              }} />
            
              <Box
              sx={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                background:
                "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.7) 100%)"
              }} />
            
              <Box
              sx={{
                position: "absolute",
                bottom: { xs: 170, sm: 170, md: 190, lg: 190 },
                left: 0,
                right: 0,
                px: { xs: 3, sm: 5, lg: 16 },
                zIndex: 2,
                maxWidth: "727px"
              }}>
              
                <Typography
                sx={{
                  fontFamily: FONT_FAMILY.heading,
                  fontWeight: 600,
                  fontSize: { xs: "32px", sm: "44px", lg: "64px" },
                  lineHeight: { xs: "40px", sm: "50px", lg: "62px" },
                  letterSpacing: "-0.03em",
                  color: "#FFFFFF",
                  maxWidth: { xs: "100%", lg: "441px" }
                }}>
                
                  {slide.title}
                </Typography>

                <Typography
                sx={{
                  mt: { xs: 2, lg: 3 },
                  fontFamily: FONT_FAMILY.body,
                  fontWeight: 400,
                  fontSize: { xs: "16px", sm: "20px", lg: "28px" },
                  lineHeight: { xs: "24px", sm: "30px", lg: "34px" },
                  letterSpacing: "-0.01em",
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: "727px"
                }}>
                
                  {slide.description}
                </Typography>

                <Box
                sx={{
                  position: "absolute",
                  bottom: 0,

                  right: { xs: "8px", lg: 0 },
                  transform: {

                    xs: "translate(0, 180%)",
                    lg: "translate(110%, 180%)"
                  },
                  zIndex: 2
                }}>
                
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    
                  
                    <PrimaryButton
                    showIcon={false}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: { xs: "19px", md: "8px", lg: "10px" },
                      padding: {
                        xs: "4px 5px 4px 16px !important",
                        md: "5px 5px 5px 20px !important",
                        lg: "6px 6px 6px 24px !important"
                      },

                      width: "max-content",
                      minWidth: { xs: "180px", md: "200px", lg: "231px" },
                      height: { xs: "40px", md: "48px", lg: "56px" },

                      borderRadius: "30px",
                      textTransform: "none"
                    }}>
                    
                      <Typography
                      component="span"
                      sx={{
                        fontFamily: "'JUST Sans', sans-serif",
                        fontSize: { xs: "12px", md: "14px", lg: "16px" },
                        lineHeight: { xs: "18px", md: "20px", lg: "24px" },
                        letterSpacing: "-0.01em",
                        whiteSpace: "nowrap"
                      }}>
                      
                        Request a <Box component="span" sx={{ fontWeight: 700 }}>Free Information Session</Box>
                      </Typography>

                      <Box
                      sx={{
                        width: { xs: "32px", md: "38px", lg: "44px" },
                        height: { xs: "32px", md: "38px", lg: "44px" },
                        borderRadius: "50%",
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}>
                      
                        <ArrowOutwardIcon
                        sx={{
                          fontSize: { xs: "14px", md: "16px", lg: "20px" },
                          color: "#111827"
                        }} />
                      
                      </Box>
                    </PrimaryButton>
                  </Link>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        )}
      </Swiper>
    </Box>);

}