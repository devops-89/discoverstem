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
    <Container id="patents" sx={{ py: 6 }}>
      <SectionHeading
        label="Our Young Innovators'"
        title="Patents"
        swiperRef={swiperRef}
        viewAllHref="/success-stories/patents-granted"
      />

      <Box sx={{ "& .swiper": { width: "100%" } }}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={24}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
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
                  p: 2,
                  textAlign: "center",
                  border: "1px solid #eee",
                }}
              >
                <Box
                  component="img"
                  src={patent.image}
                  alt={patent.title}
                  sx={{
                    width: 1,
                    height: 350,
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

              
                <Box
                  sx={{
                    mt: 2,
                    minHeight: "72px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: "24px",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {patent.title}
                  </Typography>
                </Box>               
                <Typography sx={{
                    color: "#ee4823",
                    mt: 0.5,
                    fontWeight: 500,
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