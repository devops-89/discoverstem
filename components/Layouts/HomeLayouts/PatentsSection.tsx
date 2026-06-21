"use client";

import React, { useRef } from "react";
import { Container, Box, Card, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SectionHeading from "@/components/Widgets/SectionHeading";
import { patentsData } from "@/assets/Generic-data";

const homePatents = patentsData.slice(0, 10).map((p) => ({
  title: p.title,
  image: p.image,
  patentNumber: p.googlePatentLink?.match(/US(\d+)/)?.[0]
    ? `USPTO ${p.googlePatentLink.match(/US(\d+)/)?.[0]}`
    : "",
}));

export default function PatentsSection() {
  const swiperRef = useRef<import("swiper").Swiper | null>(null);

  return (
    <Container
      id="patents"
      sx={{
        py: { xs: 4, md: 6 },
        // Native Swiper slide height stretch
        "& .swiper-wrapper": {
          display: "flex",
          alignItems: "stretch",
        },
        "& .swiper-slide": {
          height: "auto",
          display: "flex",
          alignItems: "stretch",
        },
      }}
    >
      <SectionHeading
        label="Our Young Innovators'"
        title="Patents"
        swiperRef={swiperRef}
        viewAllHref="/success-stories/patents-granted"
      />

      <Box sx={{ "& .swiper": { width: "100%" } }}>
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 }, // Exactly 1 card on mobile
            600: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 }, // Resolves to original 2 slides on desktop / 1440
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {[...homePatents, ...homePatents].map((patent, i) => (
            <SwiperSlide key={i}>
              <Card
                elevation={0}
                sx={{
                  bgcolor: "#f4f4f4",
                  borderRadius: "16px",
                  p: { xs: 1.5, md: 2 },
                  textAlign: "center",
                  border: "1px solid #eee",
                  height: "100%", // Fills the stretched slide container
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                <Box
                  component="img"
                  src={patent.image}
                  alt={patent.title}
                  sx={{
                    width: 1,
                    height: { xs: 220, sm: 280, md: 350 }, // Scaling image height (350px on desktop)
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <Box
                  sx={{
                    mt: 2,
                    minHeight: { xs: "60px", md: "72px" }, // Adjusted height alignment
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    flexGrow: 1, // Pushes title box to occupy empty flex space
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 16, sm: 18, md: 20 }, // Scaling title font size
                      fontWeight: 600,
                      lineHeight: { xs: "20px", md: "24px" },
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {patent.title}
                  </Typography>
                </Box>
                
                <Typography
                  sx={{
                    color: "#ee4823",
                    mt: 1,
                    fontWeight: 500,
                    fontSize: { xs: 13, md: 14 },
                  }}
                >
                  {patent.patentNumber}
                </Typography>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}