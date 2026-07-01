"use client";import { LINE_HEIGHT, FONT_SIZE, FONT_FAMILY, FONT_WEIGHT } from "@/utils/theme";

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
        alignItems: "start"
      }}>
      
      <Box
        component={Link}
        href={`/media/${item.slug}`}
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "220px", sm: "300px", md: "500px", lg: "385px" },
          bgcolor: "#D9D9D9",
          borderRadius: "12px",
          overflow: "hidden",
          display: "block",
          textDecoration: "none"
        }}>
        
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }} />
        
        {videoUrl &&
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
              bgcolor: "rgba(0,0,0,0.7)"
            }
          }}>
          
            <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: { xs: FONT_SIZE.sectionHeadingSmall, lg: FONT_SIZE.heroHeading } }} />
          </Box>
        }
      </Box>

      <Box sx={{ pt: { xs: 0, lg: "10px" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            mb: { xs: 3, lg: "39px" }
          }}>
          
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.semiBold,
              fontSize: { xs: FONT_SIZE.small, md: FONT_SIZE.bodySmall, lg: FONT_SIZE.bodyLarge },
              lineHeight: LINE_HEIGHT.medium,
              color: "#7B53A1",
              textTransform: "uppercase"
            }}>
            
            {item.category}
          </Typography>

          <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.regular,
              fontSize: FONT_SIZE.bodySmall,
              lineHeight: "21px",
              color: "rgba(0,0,0,0.5)"
            }}>
            
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
            fontFamily: FONT_FAMILY.heading,
            fontWeight: FONT_WEIGHT.bold,
            fontSize: { xs: FONT_SIZE.lead, md: FONT_SIZE.cardHeadingSmall, lg: FONT_SIZE.articleHeadingSmall },
            lineHeight: { xs: LINE_HEIGHT.medium, md: "34px", lg: "40px" },
            letterSpacing: "-0.02em",
            color: "#111827",
            textDecoration: "none",
            mb: { xs: 2, lg: "18px" }
          }}>
          
          {item.title}
        </Typography>

       <Typography
          sx={{
            width: "100%",
            maxWidth: "600px",
            fontFamily: FONT_FAMILY.body,
            fontWeight: FONT_WEIGHT.regular,
            fontSize: { xs: FONT_SIZE.bodySmall, lg: FONT_SIZE.body },
            lineHeight: { xs: LINE_HEIGHT.medium, lg: "28px" },
            color: "#474A55",
            mb: { xs: 3, lg: "25px" },

            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical"
          }}>
          
          {item.description}
        </Typography>

        <Box
          component={Link}
          href={`/media/${item.slug}`}
          sx={{
            // 🔥 FIX: Changed width to fit-content so the button expands naturally
            width: "fit-content", 
            height: { xs: "40px", sm: "48.84px" },
            bgcolor: "#7B53A1",
            borderRadius: "26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "6px", sm: "8.72px" },
            pl: { xs: "16px", sm: "20.93px" },
            pr: { xs: "4px", sm: "5.23px" },
            textDecoration: "none"
          }}>
          
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.body,
              fontWeight: FONT_WEIGHT.semiBold,
              fontSize: { xs: FONT_SIZE.caption, sm: "13.95px" },
              lineHeight: { xs: LINE_HEIGHT.lessSmall, sm: "21px" },
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
              // 🔥 FIX: Forced the text to stay on one single line
              whiteSpace: "nowrap"
            }}>
            
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
              flexShrink: 0
            }}>
            
            <ArrowOutwardIcon sx={{ fontSize: { xs: FONT_SIZE.bodySmall, sm: "17.44px" }, color: "#111827" }} />
          </Box>
        </Box>
      </Box>

      <Modal
        open={openVideo}
        onClose={() => setOpenVideo(false)}
        aria-labelledby="video-modal-title"
        disableScrollLock={true}>
        
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "800px" },

            outline: "none"
          }}>
          
          <Box
            sx={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              borderRadius: "8px",
              bgcolor: "#000"
            }}>
            
            {videoUrl &&
            <iframe
              src={videoUrl}
              title="YouTube video player"

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0
              }} />

            }
            
      
            <IconButton
              onClick={() => setOpenVideo(false)}
              sx={{
                position: "absolute",
                top: "8px",
                right: "8px",
                color: "red",
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))",
                zIndex: 10
              }}>
              
              <CloseIcon sx={{ fontSize: FONT_SIZE.cardHeading }} />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </Box>);

}