"use client";
import React, { useRef } from "react";
import { Container, Stack, Divider, Typography, Grid, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonial } from "@/assets/Generic-data";
import { FONT_FAMILY } from "@/utils/Fonts";

const testimonialSlides = [
  testimonial,
  { ...testimonial },
  { ...testimonial },
  { ...testimonial },
];

export default function TestimonialsSection() {
  const swiperRef = useRef<import("swiper").Swiper | null>(null);

  return (
    <Container id="testimonials" sx={{ py: 6 }}>
      {/* HEADER WITH LINE */}
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 0.5 }}>
        <Divider sx={{ width: 40, borderColor: "#2071d2", borderWidth: "1.5px" }} />
        <Typography sx={{ color: "#666", fontSize: 13, fontWeight: 500, letterSpacing: "0.02em" }}>
          what people say about DiscoverSTEM
        </Typography>
      </Stack>
      <Typography
        sx={{ fontFamily: FONT_FAMILY.heading, fontSize: { xs: 32, md: 52 }, fontWeight: 400, mb: 4 }}
      >
        Testimonials
      </Typography>

      <Box
        sx={{
          overflow: "hidden",
          "& .swiper": { width: "100%", overflow: "hidden" },
          "& .swiper-pagination": { bottom: "-32px !important" },
          "& .swiper-pagination-bullet": {
            width: 10,
            height: 10,
            background: "#ccc",
            opacity: 1,
          },
          "& .swiper-pagination-bullet-active": { background: "#111" },
          pb: 6,
        }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {testimonialSlides.map((t, i) => (
            <SwiperSlide key={i}>
              <Grid container spacing={4} alignItems="center">
                {/* LEFT: Partial purple bracket wrapping the quote content */}
                <Grid size={{ xs: 12, md: 6.5 }}>
                  <Box sx={{ position: "relative", px: { xs: 3, md: 6 }, py: { xs: 3, md: 4 } }}>
                    {/* PURPLE BRACKET PARTIAL */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "60%",
                        height: "100%",
                        borderLeft: "12px solid #7b53a1",
                        borderTop: "12px solid #7b53a1",
                        borderBottom: "12px solid #7b53a1",
                        pointerEvents: "none",
                      }}
                    />
                    <Box sx={{ position: "relative", zIndex: 2 }}>
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: 18, md: 22 },
                          textTransform: "uppercase",
                          color: "#111",
                          mb: 0.5,
                        }}
                      >
                        {t.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 15,
                          color: "#333",
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: "0.03em",
                          mb: 3,
                        }}
                      >
                        {t.role}
                      </Typography>
                      <Typography
                        sx={{
                          lineHeight: 1.8,
                          fontSize: { xs: 16, md: 17.5 },
                          color: "#333",
                          fontWeight: 400,
                        }}
                      >
                        &quot;{t.quote}&quot;
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* RIGHT: Photo with thick orange bracket on the right edge */}
                <Grid size={{ xs: 12, md: 5.5 }}>
                  <Box sx={{ position: "relative", display: "inline-block", width: "fit-content", ml: "auto" }}>
                    {/* PHOTO */}
                    <Box
                      component="img"
                      src={t.image}
                      alt={t.name}
                      sx={{
                        width: "100%",
                        maxWidth: 420,
                        height: "auto",
                        maxHeight: 460,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    {/* ORANGE BRACKET (partial right) */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "10%",
                        right: -10,
                        width: 40,
                        height: "80%",
                        borderRight: "12px solid #ee4823",
                        borderTop: "12px solid #ee4823",
                        borderBottom: "12px solid #ee4823",
                        zIndex: 1,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}
