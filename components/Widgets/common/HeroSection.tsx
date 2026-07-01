"use client";import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "@/utils/theme";


import { Box, Grid, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export interface HeroSlideItem {
  image: string;
  title: string;
  description?: string;
}

interface HeroSectionProps {
  slides: HeroSlideItem[];
}

export default function HeroSection({ slides }: HeroSectionProps) {
  return (
    <Box
      id="home"
      sx={{

        mt: { xs: 1.5, md: "19px" },
        mx: "auto",

        /* 🔥 FIX: Ensures there is always a pixel gap on 1024 screens! */
        width: {
          xs: "calc(100% - 24px)",
          md: "calc(100% - 48px)"
        },
        maxWidth: "1403px",

        borderRadius: { xs: "14px", md: "20px" },
        overflow: "hidden",

        "& .swiper": {
          width: "100%",

          height: {
            xs: 520,
            sm: 560,
            md: "800px",
            lg: "929px"

          }
        },

        "& .swiper-pagination": {
          bottom: { xs: "18px !important", md: "25px !important" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px"
        },

        "& .swiper-pagination-bullet": {
          width: { xs: 18, md: 30 },
          height: { xs: 6, md: 5 },
          borderRadius: { xs: 3, md: 0 },
          background: { xs: "rgba(255,255,255,0.55)", md: "#919191" },
          opacity: 1,
          margin: "0 !important",
          transition: "all 0.3s ease"
        },

        "& .swiper-pagination-bullet-active": {
          background: "#FFFFFF !important",
          width: { xs: 34, md: 59 }
        }
      }}>
      
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop>
        
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
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }} />
            

              <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%)"
              }} />
            

              <Box
              sx={{
                position: "absolute",

                left: { xs: 0, md: "100px", lg: "140px" },
                right: { xs: 0, md: "auto" },

                top: { xs: "250px", sm: "350px", md: "450px", lg: "606px" },
                bottom: {
                  xs: 64,
                  sm: 72,
                  md: "auto"
                },
                px: {
                  xs: 2.5,
                  sm: 4,
                  md: 0
                },
                zIndex: 2,
                boxSizing: "border-box"
              }}>
              
                <Grid
                container
                spacing={{ xs: 2, md: 0 }}
                alignItems="flex-end"
                sx={{
                  display: { md: "flex" },
                  flexDirection: { md: "column" },
                  alignItems: { md: "flex-start" }
                }}>
                
                
                  <Grid size={{ xs: 12, md: 12 }}>
                    <Typography
                    sx={{
                      fontFamily: FONT_FAMILY.accent,
                      color: "#FFFFFF",
                      fontSize: {
                        xs: FONT_SIZE.cardHeading,
                        sm: FONT_SIZE.articleHeadingLarge,
                        md: FONT_SIZE.pageHeadingLarge
                      },
                      lineHeight: {
                        xs: "36px",
                        sm: "42px",
                        md: "55px"
                      },
                      fontWeight: { xs: 550, md: FONT_WEIGHT.semiBold },
                      letterSpacing: { md: "-1.3px" },
                      wordBreak: "normal",
                      overflowWrap: "break-word",
                      maxWidth: { md: "700px" }
                    }}>
                    
                      {slide.title}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 12 }}>
                    <Typography
                    sx={{
                      color: { xs: "#f0f0f0", md: "rgba(255, 255, 255, 0.85)" },
                      fontFamily: FONT_FAMILY.accent,
                      fontSize: {
                        xs: FONT_SIZE.body,
                        sm: FONT_SIZE.bodyLarge,
                        md: FONT_SIZE.lead
                      },
                      lineHeight: {
                        xs: "24px",
                        sm: "25px",
                        md: "28px"
                      },
                      fontWeight: { md: FONT_WEIGHT.regular },
                      whiteSpace: "pre-line",
                      maxWidth: {
                        xs: "100%",
                        md: "672px"
                      },
                      wordBreak: "normal",
                      overflowWrap: "break-word",
                      mt: { md: "17.4px" }
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