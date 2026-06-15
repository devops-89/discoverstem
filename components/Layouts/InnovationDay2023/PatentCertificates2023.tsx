"use client";
import { useState } from "react";
import { patentCertificatesData2023 } from "@/assets/Generic-data";
import { Box, Container, Typography, Dialog, IconButton } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function PatentCertificates2023Section() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1232px",
        mx: "auto",
        px: { xs: 3, md: 0 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "398px" },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "30px", md: "48px" },
            lineHeight: { xs: "40px", md: "62px" },
            letterSpacing: "-0.03em",
            color: "#171717",
            mb: { xs: 4, md: "46px" },
          }}
        >
          {patentCertificatesData2023.title}
        </Typography>

        <Box sx={{ position: "relative", px: { md: 5 } }}>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={5}
            spaceBetween={16}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".patent-prev-2023",
              nextEl: ".patent-next-2023",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 5 },
            }}
          >
            {patentCertificatesData2023.items.map((item) => (
              <SwiperSlide key={item.id}>
                <Box
                  onClick={() => setSelectedVideo(item.videoUrl)}
                  sx={{
                    position: "relative",
                    width: "233.6px",
                    maxWidth: "100%",
                    height: "292px",
                    borderRadius: "16px",
                    border: "0.8px solid #0000000D",
                    overflow: "hidden",
                    textDecoration: "none",
                    display: "block",
                    mx: "auto",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
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
                      top: "118px",
                      left: "88.8px",
                      width: "56px",
                      height: "56px",
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
                        borderTop: "8px solid transparent",
                        borderBottom: "8px solid transparent",
                        borderLeft: "12px solid #7B53A1",
                        ml: "4px",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: "14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      px: "8px",
                      py: "3px",
                      borderRadius: "999px",
                      bgcolor: "rgba(0,0,0,0.55)",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "9px",
                      lineHeight: "12px",
                      letterSpacing: "0.6px",
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          <Box
            className="patent-prev-2023"
            sx={{
              position: "absolute",
              left: { xs: -8, md: -12 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid #E0E0E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              bgcolor: "#fff",
              color: "#666",
              fontSize: 22,
              transition: "all 0.2s",
              "&:hover": { bgcolor: "#f5f5f5", borderColor: "#ccc" },
              "&.swiper-button-disabled": { opacity: 0.4, cursor: "default" },
            }}
          >
            ‹
          </Box>
          <Box
            className="patent-next-2023"
            sx={{
              position: "absolute",
              right: { xs: -8, md: -12 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid #E0E0E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              bgcolor: "#fff",
              color: "#666",
              fontSize: 22,
              transition: "all 0.2s",
              "&:hover": { bgcolor: "#f5f5f5", borderColor: "#ccc" },
              "&.swiper-button-disabled": { opacity: 0.4, cursor: "default" },
            }}
          >
            ›
          </Box>
        </Box>
      </Box>

      <Dialog
        open={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            position: "relative",
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
              title="Patent Video"
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
