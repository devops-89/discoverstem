"use client";
import { FONT_FAMILY } from "@/utils/theme";
import { useState } from "react";
import { Box, Container, Typography, Dialog, IconButton } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export type PatentItem = {
  id: string | number;
  videoUrl: string;
  image: string;
  label: string;
};

export type PatentData = {
  title: string;
  items: PatentItem[];
};

interface PatentCertificatesSharedProps {
  data: PatentData;
  uniqueId: string;
}

export default function PatentCertificatesShared({
  data,
  uniqueId
}: PatentCertificatesSharedProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1232px",
        mx: "auto",
        px: { xs: 3, md: 4, lg: 0 },
        py: { xs: 3, md: 5, lg: 10 }
      }}>
      
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", lg: "398px" }
        }}>
        
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: FONT_FAMILY.heading,
            fontWeight: 600,
            fontSize: { xs: "24px", sm: "35px", lg: "48px" },
            lineHeight: { xs: "30px", sm: "52px", lg: "62px" },
            letterSpacing: "-0.03em",
            color: "#171717",
            mb: { xs: 4, md: 5, lg: "46px" }
          }}>
          
          {data.title}
        </Typography>

        <Box sx={{ position: "relative", px: { xs: 6, md: 5 } }}>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={5}
            spaceBetween={16}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: `.patent-prev-${uniqueId}`,
              nextEl: `.patent-next-${uniqueId}`
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1200: { slidesPerView: 5 }
            }}>
            
            {data.items.map((item) =>
            <SwiperSlide key={item.id}>
                <Box
                onClick={() => setSelectedVideo(item.videoUrl)}
                sx={{
                  position: "relative",
                  
                  // 🔥 FIX: Made it exactly 233.6px everywhere, including mobile!
                  width: "233.6px",
                  maxWidth: "100%",
                 
                  height: { xs: "240px", md: "292px" },
                  borderRadius: "16px",
                  border: "0.8px solid #0000000D",
                  overflow: "hidden",
                  textDecoration: "none",
                  display: "block",
                  mx: "auto",
                  cursor: "pointer"
                }}>
                
                  <Image
                  src={item.image}
                  alt={item.label}
                  fill sizes="100vw"
                  style={{ objectFit: "cover" }} />
                

                  <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                    "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.42) 100%)"
                  }} />
                

                  <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "40px", lg: "56px" },
                    height: { xs: "40px", lg: "56px" },
                    borderRadius: "999px",
                    bgcolor: "#FFFFFFF2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow:
                    "0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A"
                  }}>
                  
                    <Box
                    sx={{
                      width: 0,
                      height: 0,
                      borderTop: { xs: "6px solid transparent", lg: "8px solid transparent" },
                      borderBottom: { xs: "6px solid transparent", lg: "8px solid transparent" },
                      borderLeft: { xs: "9px solid #7B53A1", lg: "12px solid #7B53A1" },
                      ml: { xs: "3px", lg: "4px" }
                    }} />
                  
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
                    fontFamily: FONT_FAMILY.body,
                    fontWeight: 600,
                    fontSize: "9px",
                    lineHeight: "12px",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap"
                  }}>
                  
                    {item.label}
                  </Typography>
                </Box>
              </SwiperSlide>
            )}
          </Swiper>

          <Box
            className={`patent-prev-${uniqueId}`}
            sx={{
              position: "absolute",
              left: { xs: 0, md: -16, lg: -12 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: { xs: 36, lg: 44 },
              height: { xs: 36, lg: 44 },
              borderRadius: "50%",
              border: "1px solid #E0E0E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              bgcolor: "#fff",
              color: "#666",
              fontSize: { xs: 18, lg: 22 },
              transition: "all 0.2s",
              "&:hover": { bgcolor: "#f5f5f5", borderColor: "#ccc" },
              "&.swiper-button-disabled": { opacity: 0.4, cursor: "default" }
            }}>
            
            ‹
          </Box>
          <Box
            className={`patent-next-${uniqueId}`}
            sx={{
              position: "absolute",
              right: { xs: 0, md: -16, lg: -12 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: { xs: 36, lg: 44 },
              height: { xs: 36, lg: 44 },
              borderRadius: "50%",
              border: "1px solid #E0E0E0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              bgcolor: "#fff",
              color: "#666",
              fontSize: { xs: 18, lg: 22 },
              transition: "all 0.2s",
              "&:hover": { bgcolor: "#f5f5f5", borderColor: "#ccc" },
              "&.swiper-button-disabled": { opacity: 0.4, cursor: "default" }
            }}>
            
            ›
          </Box>
        </Box>
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
              m: { xs: 1, md: 4 },
              width: { xs: "calc(100% - 16px)", md: "100%" },
              maxWidth: { xs: "calc(100% - 16px) !important", md: "900px !important" }
            }
          }
        }}>
        
        {selectedVideo &&
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
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" }
            }}>
            
              <CloseIcon sx={{ fontSize: "20px", color: "red" }} /> 
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
              borderRadius: "12px"
            }} />
          
          </Box>
        }
      </Dialog>
    </Container>);

}