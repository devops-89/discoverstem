"use client";

import { useState } from "react";
import { researchData } from "@/assets/Generic-data";

import { Research } from "@/utils/Types";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function ResearchSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1160px",
        py: { xs: 5, md: 8 },
        px: { xs: 3, md: 0 },
        mx: "auto",
        position: "relative",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: { xs: "32px", md: "48px" },
            fontWeight: 600,
            lineHeight: { xs: "42px", md: "62px" },
            letterSpacing: "-0.03em",
            color: "#111827",
            mb: 4,
          }}
        >
          Research Papers And Abstracts Published By Our Students
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            fontSize: { xs: "16px", md: "22px" },
            color: "#777",
            lineHeight: { xs: "30px", md: "43px" },
            mb: 4,
          }}
        >
          Innovations in Digital Health, Diagnostics, and Biomarkers (IDDB) is
          an international peer-reviewed journal, guided by a distinguished
          editorial board and directed by leading experts, including
          representatives from the World Health Organization (WHO).
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            mb: 4,
          }}
        >
          <IconButton
            className="research-prev"
            sx={{
              width: "48px",
              height: "48px",
              backgroundColor: "#FAF5FF",
              border: "1px solid #E5E7EB",
              borderRadius: "50%",
              color: "#0A0A0A",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#FAF5FF",
                borderColor: "#7B53A1",
              },
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 18, color: "#0A0A0A" }} />
          </IconButton>

          <IconButton
            className="research-next"
            sx={{
              width: "48px",
              height: "48px",
              backgroundColor: "#FAF5FF",
              border: "1px solid #E5E7EB",
              borderRadius: "50%",
              color: "#0A0A0A",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#FAF5FF",
                borderColor: "#7B53A1",
              },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 18, color: "#0A0A0A" }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ px: "10px" }}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ prevEl: ".research-prev", nextEl: ".research-next" }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        breakpoints={{
          900: { slidesPerView: 2 },
        }}
        spaceBetween={21}
      >
        {researchData.map((item: Research, i: number) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                width: "100%",
                height: "395px",
                bgcolor: "#F4F4F4",
                borderRadius: "8.97473px",
                p: "15px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                onClick={() => item.video && setSelectedVideo(item.video)}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "228px",
                  borderRadius: "4.07942px",
                  overflow: "hidden",
                  cursor: item.video ? "pointer" : "default",
                  flexShrink: 0,
                  backgroundColor: "#C4C4C4",
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": {
                    opacity: item.video ? 0.95 : 1,
                  },
                }}
              >
                {item.image && (
                  <Box
                    component="img"
                    src={item.image}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}

                {item.video && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "81.59px",
                      height: "81.59px",
                      borderRadius: "50%",
                      border: "4.07942px solid #D9D9D9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        transform: "translate(-50%, -50%) scale(1.05)",
                        backgroundColor: "rgba(255, 255, 255, 0.25)",
                      },
                    }}
                  >
                    <PlayArrowIcon
                      sx={{ fontSize: 36, color: "#D9D9D9" }}
                    />
                  </Box>
                )}
              </Box>

              <Typography
                sx={{
                  mt: "21px",
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "20.3971px",
                  lineHeight: "21px",
                  letterSpacing: "-0.326354px",
                  color: "#000000",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textAlign: "left",
                }}
              >
                {item.title}
              </Typography>

              {item.link && (
                <Box
                  sx={{
                    mt: "auto",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    component="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: "149.31px",
                      height: "45.69px",
                      bgcolor: "#7B53A1",
                      borderRadius: "24.4765px",
                      color: "#FFFFFF",
                      textTransform: "none",
                      padding: "8.15884px 8.15884px 8.15884px 19.5812px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "13.0542px",
                      lineHeight: "20px",
                      letterSpacing: "-0.01em",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: "#6A458D",
                      },
                    }}
                  >
                    Read More

                    <Box
                      sx={{
                        width: "35.9px",
                        height: "35.9px",
                        borderRadius: "50%",
                        bgcolor: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#111827",
                        flexShrink: 0,
                      }}
                    >
                      <NorthEastIcon
                        sx={{ fontSize: 16, color: "#111827" }}
                      />
                    </Box>
                  </Button>
                </Box>
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
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
              borderRadius: "20px",
              position: "relative",
              bgcolor: "#000",
            },
          },
        }}
      >
        <IconButton
          onClick={() => setSelectedVideo(null)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 10,
            bgcolor: "rgba(0,0,0,0.5)",
            color: "#fff",
            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
          }}
        >
          <CloseIcon />
        </IconButton>

        {selectedVideo && (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "250px", md: "500px" },
            }}
          >
            <Box
              component="iframe"
              src={selectedVideo}
              title="Research Paper Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                width: "100%",
                height: "100%",
                border: 0,
                borderRadius: "20px",
              }}
            />
          </Box>
        )}
      </Dialog>
    </Container>
  );
}