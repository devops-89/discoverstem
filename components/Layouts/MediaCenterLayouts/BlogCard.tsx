"use client";

import PrimaryButton from "@/components/Widgets/PrimaryButton";
import { BlogCardType } from "@/utils/Types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const BlogCard = ({ data }: { data: BlogCardType }) => {
  const swiperRef = useRef<any>(null);
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/media/${data.slug}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "688px",
        mx: "auto",
        mb: { xs: 5, md: 6 },
      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth:"688px",
          height: { xs: 240, md: 480 },
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
        >
          <SwiperSlide>
            <Box
  sx={{
    position: "relative",
    width: "100%",
    height: { xs: 240, md: 480 },
    borderRadius: "18px",
    overflow: "hidden",
  }}
>
  <Image
    src={data.image}
    alt={data.title}
    fill
    sizes="(max-width: 688px) 100vw, 688px"
    style={{ objectFit: "cover" }}
  />
</Box>
          </SwiperSlide>
        </Swiper>

        {/* ARROWS */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 12,
            right: 12,
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "space-between",
            zIndex: 2,
          }}
        >
          {/* PREV */}
          <Box
            onClick={() => swiperRef.current?.slidePrev()}
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: 18,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            ‹
          </Box>

          {/* NEXT */}
          <Box
            onClick={() => swiperRef.current?.slideNext()}
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: 18,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            ›
          </Box>
        </Box>
      </Box>

      {/* META */}
      <Box
        sx={{
          display: "flex",
          alignContent:"center",
          gap: 4,
          mt: 2,
          fontSize: "14px",
          color: "#6B7280",
        }}
      >
        <span>⏱ {data.date}</span>
        <span>👤 {data.author}</span>
        <span>💬 {data.comments}</span>
      </Box>

      {/* TITLE */}
      <Typography
        sx={{
          mt: 2,
          width:"auto",
          maxWidth:"688px",
          height:"70px",
          fontWeight: 600,
          fontSize: { xs: "18px", md: "36px" },
          lineHeight: "46px",
          color: "#111827",
        }}
      >
        {data.title}
      </Typography>

      {/* DESCRIPTION */}
      <Typography
        sx={{
          mt: 4,
          width:"auto",
          height:"77px",
          fontSize: "18px",
          lineHeight: "32px",
          color: "#474A55",
          maxWidth: "688px",
        }}
      >
        {data.description}
      </Typography>

      {/* BUTTON */}
      <Box sx={{ mt: 3 }}>
        <PrimaryButton onClick={handleNavigate}>
          Read More
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default BlogCard;