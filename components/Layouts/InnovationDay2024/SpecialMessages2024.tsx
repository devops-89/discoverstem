"use client";

import { useState } from "react";
import { specialMessagesData2024 } from "@/assets/Generic-data";
import { Box, Container, Typography, Dialog, IconButton } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

export default function SpecialMessages2024() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
          fontSize: { xs: "32px", md: "48px" },
          lineHeight: { xs: "44px", md: "65px" },
          textAlign: "center",
          color: "#101010",
          mb: { xs: 4, md: "70px" },
        }}
      >
        {specialMessagesData2024.title}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: "60px" },
        }}
      >
        {specialMessagesData2024.items.map((item, index) => (
          <Box
            key={index}
            onClick={() => setSelectedVideo(item.videoUrl)}
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              border: "0.8px solid #0000000D",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill sizes="100vw"
              style={{ objectFit: "cover" }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.42) 100%)",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 72,
                height: 72,
                borderRadius: "999px",
                bgcolor: "#FFFFFFF2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A",
              }}
            >
              <Box
                sx={{
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "16px solid #7B53A1",
                  ml: "5px",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <Dialog
        open={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
         disableScrollLock
        maxWidth="md"
        fullWidth
        slotProps={{
    paper: {
      sx: {
        bgcolor: "transparent",
        boxShadow: "none",
        position: "relative",
      },
    },
  }}
      >
        {selectedVideo && (
          <Box sx={{ position: "relative", pt: "56.25%" }}>
            <IconButton
              onClick={() => setSelectedVideo(null)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#fff",
                zIndex: 20,
                bgcolor: "rgba(0,0,0,0.5)",
                "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
              }}
            >
              <CloseIcon />
            </IconButton>
            <iframe
              src={selectedVideo}
              title="Special Message"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
                borderRadius: "12px",
              }}
            />
          </Box>
        )}
      </Dialog>
    </Container>
  );
}
