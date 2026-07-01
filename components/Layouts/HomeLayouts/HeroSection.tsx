"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { heroImage } from "@/assets/Generic-data";

import { Box, Grid, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const heroSlides = [
{
  image: heroImage,
  title: "Texas State Capitol Honors DiscoverSTEM and Our Young Innovators",
  description:
  "The Texas House of Representatives passed a House Resolution #403, commemorating DiscoverSTEM’s \n profound impact on shaping the next generation of innovators & leaders."
},
{
  image: heroImage,
  title: "600+ Kids Have Filed Patents Through DiscoverSTEM",
  description:
  "314 kids got their patents granted in the last two years, turning their innovative ideas into real intellectual property."
},
{
  image: heroImage,
  title: "Empowering the Next Generation of Leader",
  description:
  "From Ivy League mentorship to startup ecosystems, DiscoverSTEM opens doors for young innovators across the globe."
}];


export default function HeroSection() {
  return (
    <Box
      id="home"
      sx={{
        mt: { xs: 1.5, md: 2 },
        mx: "auto",
        width: "100%",
        maxWidth: {
          xs: "calc(100% - 24px)",
          md: "calc(100% - 40px)",
          xl: "1403px"
        },
        borderRadius: { xs: "14px", md: "20px" },
        overflow: "hidden",

        "& .swiper": {
          width: "100%",
          height: {
            xs: 520,
            sm: 560,
            md: 620,
            lg: 720,
            xl: 929
          }
        },

        "& .swiper-pagination": {
          bottom: { xs: "18px !important", md: "24px !important" }
        },

        "& .swiper-pagination-bullet": {
          width: { xs: 18, md: 28 },
          height: 6,
          borderRadius: 3,
          background: "rgba(255,255,255,0.55)",
          opacity: 1
        },

        "& .swiper-pagination-bullet-active": {
          background: "#fff",
          width: { xs: 34, md: 48 }
        }
      }}>
      
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop>
        
        {heroSlides.map((slide, i) =>
        <SwiperSlide key={i}>
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }} />
            

              <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 35%, rgba(0,0,0,0.78) 100%)"
              }} />
            

              <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: {
                  xs: 64,
                  sm: 72,
                  md: 85,
                  lg: 95,
                  xl: 120
                },
                px: {
                  xs: 2.5,
                  sm: 4,
                  md: 5,
                  lg: 7,
                  xl: 10
                },
                zIndex: 2,
                boxSizing: "border-box"
              }}>
              
                <Grid
                container
                spacing={{
                  xs: 2,
                  md: 3,
                  lg: 5
                }}
                alignItems="flex-end">
                
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                    sx={{
                      fontFamily: FONT_FAMILY.heading,
                      color: "#fff",
                      fontSize: {
                        xs: "28px",
                        sm: "34px",
                        md: "34px",
                        lg: "42px",
                        xl: "48px"
                      },
                      lineHeight: {
                        xs: "36px",
                        sm: "42px",
                        md: "42px",
                        lg: "50px",
                        xl: "57px"
                      },
                      fontWeight: 500,
                      letterSpacing: "-0.03em",
                      wordBreak: "normal",
                      overflowWrap: "break-word"
                    }}>
                    
                      {slide.title}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                    sx={{
                      color: "#f0f0f0",
                      fontFamily: FONT_FAMILY.body,
                      fontSize: {
                        xs: "15px",
                        sm: "16px",
                        md: "16px",
                        lg: "17px",
                        xl: "18px"
                      },
                      lineHeight: {
                        xs: "24px",
                        sm: "25px",
                        md: "26px",
                        lg: "28px",
                        xl: "30px"
                      },
                      whiteSpace: "pre-line",
                      maxWidth: {
                        xs: "100%",
                        md: "470px",
                        lg: "540px"
                      },
                      wordBreak: "normal",
                      overflowWrap: "break-word"
                    }}>
                    
                      {slide.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </SwiperSlide>
        )}
      </Swiper>
    </Box>);

}