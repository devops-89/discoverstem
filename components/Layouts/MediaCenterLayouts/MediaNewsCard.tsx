"use client";

import { MediaNewsItem } from "@/utils/Types";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

interface MediaNewsCardProps {
  item: MediaNewsItem;
}

export default function MediaNewsCard({ item }: MediaNewsCardProps) {
  const [openVideo, setOpenVideo] = useState(false);

  const videoMatch = item.content.match(/src=["'](https:\/\/www\.youtube\.com\/embed\/[^"']+)["']/);
  const videoUrl = item.videoUrl || (videoMatch ? videoMatch[1] : null);

  return (
    <Box>
      <Box
        component={Link}
        href={`/media/${item.slug}`}
        sx={{
          position: "relative",
          display: "block",
          width: "100%",
          height: { xs: "200px", md: "220px", lg: "258px" },
          borderRadius: "12px",
          bgcolor: "#D9D9D9",
          overflow: "hidden",
          mb: { xs: 3, lg: "35px" },
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
              width: "60px",
              height: "60px",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: "40px" }} />
          </Box>
        )}
      </Box>

      <Typography
        component={Link}
        href={`/media/${item.slug}`}
        sx={{
          display: "block",
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
         
          fontSize: { xs: "14px", lg: "16px" },
          lineHeight: { xs: "20px", lg: "22px" },
          letterSpacing: "-0.02em",
          color: "#111827",
          textDecoration: "none",
          mb: { xs: 1, lg: "14px" },
        }}
      >
        {item.title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: "9px" }}>
      
        <Typography sx={{ fontSize: { xs: "14px", lg: "16px" }, color: "#474A55" }}>
          {item.publishedDate}
        </Typography>
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
              paddingBottom: "56.25%", 
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