"use client";

import { MediaNewsItem } from "@/utils/Types";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

interface FeaturedMediaCardProps {
  item: MediaNewsItem;
}

export default function FeaturedMediaCard({ item }: FeaturedMediaCardProps) {
  const [openVideo, setOpenVideo] = useState(false);

  const videoMatch = item.content.match(/src=["'](https:\/\/www\.youtube\.com\/embed\/[^"']+)["']/);
  const videoUrl = item.videoUrl || (videoMatch ? videoMatch[1] : null);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1150px",
        mx: "auto",
        display: "grid",
        mt: { xs: 4, lg: "30px" },
        mb: { xs: 6, lg: "80px" },
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "532px 1fr" },
        gap: { xs: 3, md: 4, lg: "18px" },
        alignItems: "start",
      }}
    >
      <Box
        component={Link}
        href={`/media/${item.slug}`}
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "220px", md: "300px", lg: "385px" },
          bgcolor: "#D9D9D9",
          borderRadius: "12px",
          overflow: "hidden",
          display: "block",
          textDecoration: "none",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {videoUrl && (
          <Box
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpenVideo(true);
            }}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "rgba(0,0,0,0.5)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "60px", lg: "80px" },
              height: { xs: "60px", lg: "80px" },
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: { xs: "40px", lg: "60px" } }} />
          </Box>
        )}
      </Box>

      <Box sx={{ pt: { xs: 0, lg: "10px" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            mb: { xs: 3, lg: "39px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: { xs: "13px", md: "14px", lg: "16px" },
              lineHeight: "24px",
              color: "#7B53A1",
              textTransform: "uppercase",
            }}
          >
            {item.category}
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              color: "rgba(0,0,0,0.5)",
            }}
          >
            {item.publishedDate}
          </Typography>
        </Box>

        <Typography
          component={Link}
          href={`/media/${item.slug}`}
          sx={{
            display: "block",
            width: "100%",
            maxWidth: "600px",
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "18px", md: "26px", lg: "31px" },
            lineHeight: { xs: "24px", md: "34px", lg: "40px" },
            letterSpacing: "-0.02em",
            color: "#111827",
            textDecoration: "none",
            mb: { xs: 2, lg: "18px" },
          }}
        >
          {item.title}
        </Typography>

       <Typography
          sx={{
            width: "100%",
            maxWidth: "600px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "14px", lg: "15px" },
            lineHeight: { xs: "24px", lg: "28px" },
            color: "#474A55",
            mb: { xs: 3, lg: "25px" },

            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.description}
        </Typography>

        <Box
          component={Link}
          href={`/media/${item.slug}`}
          sx={{
            width: { xs: "120px", sm: "143.9px" },
            height: { xs: "40px", sm: "48.84px" },
            bgcolor: "#7B53A1",
            borderRadius: "26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "6px", sm: "8.72px" },
            pl: { xs: "16px", sm: "20.93px" },
            pr: { xs: "4px", sm: "5.23px" },
            textDecoration: "none",
          }}
        >
          <Typography
            sx={{
              fontFamily: "JUST Sans, Poppins, sans-serif",
              fontWeight: 600,
              // 🔥 FIX: Scaled text down slightly for mobile!
              fontSize: { xs: "12px", sm: "13.95px" },
              lineHeight: { xs: "18px", sm: "21px" },
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
            }}
          >
            Read More
          </Typography>

          <Box
            sx={{
              width: { xs: "32px", sm: "38.37px" },
              height: { xs: "32px", sm: "38.37px" },
              borderRadius: "50%",
              bgcolor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ArrowOutwardIcon sx={{ fontSize: { xs: "14px", sm: "17.44px" }, color: "#111827" }} />
          </Box>
        </Box>
      </Box>

    
      <Modal
        open={openVideo}
        onClose={() => setOpenVideo(false)}
        aria-labelledby="video-modal-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "800px" },
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 1,
            borderRadius: "8px",
            outline: "none",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
            <IconButton onClick={() => setOpenVideo(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              position: "relative",
              paddingBottom: "56.25%", // 16:9 aspect ratio
              height: 0,
              overflow: "hidden",
            }}
          >
            {videoUrl && (
              <iframe
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}