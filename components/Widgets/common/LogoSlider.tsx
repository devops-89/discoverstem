"use client";

import { FONT_FAMILY } from "@/utils/Fonts";
import { Logo } from "@/utils/Types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface LogoSliderProps {
  title?: string;
  logos: Logo[];
  chunkSize?: number;
}

export default function LogoSlider({
  title,
  logos,
  chunkSize = 14,
}: LogoSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = useMemo(() => {
    const groups: Logo[][] = [];

    for (let i = 0; i < logos.length; i += chunkSize) {
      groups.push(logos.slice(i, i + chunkSize));
    }

    while (groups.length > 0 && groups.length < 3) {
      groups.push(groups[groups.length % groups.length]);
    }

    return groups;
  }, [logos, chunkSize]);

  return (
    <Box
      sx={{
        pl: { xs: 3, md: 14 },
        pr: { xs: 3, md: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", pr: { md: 4 } }}>
       {title && (
  <Typography
    sx={{
      height: { xs: "auto", md: "32px" },
      fontFamily: FONT_FAMILY.heading,
      fontSize: { xs: "20px", md: "48px" },
      lineHeight: { xs: "30px", md: "62px" },
      letterSpacing: "-0.03em",
      fontWeight: 600,
      mb: { xs: 8, md: 24 },
    }}
  >
    {title}
  </Typography>
)}

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={slides.length > 1}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % slides.length)}
          style={{ paddingBottom: "40px" }}
        >
          {slides.map((group, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  width: { xs: "100%", md: "1162px" },
                  height: { xs: "auto", md: "162px" },
                  mx: "auto",
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(4, 1fr)",
                    md: "repeat(7, 1fr)",
                  },
                  columnGap: "7px",
                  rowGap: "12px",
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                {group.map((logo, i) => (
                  <Box
                    key={`${logo.image}-${i}`}
                    sx={{
                      width: { xs: "100%", md: "160px" },
                      height: { xs: "120px", md: "80px" },
                      position: "relative",
                    }}
                  >
                    <Image
                      src={logo.image}
                      alt={logo.alt || "logo"}
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            mt: 3,
          }}
        >
          {slides.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: activeIndex === i ? "36px" : "28px",
                height: "3px",
                borderRadius: "2px",
                background: activeIndex === i ? "#111" : "#C4C4C4",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}