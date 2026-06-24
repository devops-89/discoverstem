"use client";

import { MediaNewsItem } from "@/utils/Types";
import { Avatar, Box, Container, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import RecentPost from "./RecentPost";

interface ArticleContentProps {
  article: MediaNewsItem;
  recentPosts: MediaNewsItem[];
}

export default function ArticleContent({
  article,
  recentPosts,
}: ArticleContentProps) {
  const videoMatch = article.content.match(/src=["'](https:\/\/www\.youtube\.com\/embed\/[^"']+)["']/);
  const videoUrl = article.videoUrl || (videoMatch ? videoMatch[1] : null);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1140px",
        mx: "auto",
      
        pt: { xs: "70px", lg: "120px" },
        pb: { xs: "70px", lg: "100px" },
   
        px: { xs: 3, md: 4, lg: 0 },
      }}
    >
      <Box sx={{ width: "100%" }}>
        
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            float: "right",
            ml: "44px", 
            mb: "44px", 
            width: "420px",
          }}
        >
          <RecentPost recentPosts={recentPosts} />
        </Box>

        <Typography
          sx={{
            color: "#7B53A1",
             fontSize: { xs: "22px", md: "30px", lg: "36px" },
            fontWeight: 600,
            mb: 3,
            textTransform: "uppercase",
          }}
        >
          {article.category}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "20px", md: "30px", lg: "36px" },
            lineHeight: { xs: "28px", md: "40px", lg: "46px" },
            letterSpacing: "-0.02em",
            color: "#000",
            mb: 4,
          }}
        >
          {article.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 5 }}>
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#D9D9D9",
              color: "#7B53A1",
              flexShrink: 0,
            }}
          >
            <PersonIcon />
          </Avatar>

          <Typography
            sx={{
              color: "rgba(0,0,0,0.5)",
              fontSize: "14px",
              lineHeight: "21px",
            }}
          >
            Published on {article.publishedDate}
            <br />
            By {article.author} | DiscoverSTEM
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "16px", md: "18px", lg: "20px" },
            lineHeight: { xs: "28px", md: "30px", lg: "32px" },
            letterSpacing: "-0.03em",
            color: "rgba(0,0,0,0.6)",
            mb: { xs: 4, md: 6 },
            whiteSpace: "pre-line",
          }}
        >
          {article.description}
        </Typography>

        {(videoUrl || article.image) && (
          <Box
            sx={{
              position: "relative",
              width: "auto",
              height: { xs: "auto", md: "400px", lg: "380px" },
              aspectRatio: { xs: "16 / 9", md: "auto" },
              borderRadius: "12px",
              overflow: "hidden",
              mb: { xs: 3, md: 5 },
            }}
          >
            {videoUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title={article.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "12px", border: 0 }}
              />
            ) : (
              <Image
                src={article.image}
                alt={article.title}
                fill
                style={{ objectFit: "cover" }}
              />
            )}
          </Box>
        )}
        
        <Typography
          component="div"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "16px", md: "18px", lg: "20px" },
            lineHeight: { xs: "28px", md: "30px", lg: "32px" },
            letterSpacing: "-0.03em",
            color: "rgba(0,0,0,0.6)",
            "& p": { mb: { xs: 2, md: 3 } }, 
            
            "& .wp-block-spacer": {
              "@media (max-width: 899px)": {
                height: "16px !important"
              }
            },

            "& figure": { my: { xs: 1, md: 4 }, mx: "auto", textAlign: "center", width: "100%", maxWidth: "100%" },
            "& .wp-block-embed": { my: { xs: 1, md: 4 }, width: "100%", maxWidth: "100%" },
            "& .wp-block-embed__wrapper": { width: "100%" },
            "& img": { 
              display: "block",
              mx: "auto", 
              borderRadius: "12px",
              maxWidth: "100%",
              height: "auto",
              "@media (max-width: 899px)": {
                width: "100% !important",
                height: "auto !important", 
                aspectRatio: "16 / 9",
                objectFit: "cover"
              }
            },
            "& video": { 
              display: "block",
              mx: "auto", 
              borderRadius: "12px",
              maxWidth: "100%",
              height: "auto",
              "@media (max-width: 899px)": {
                width: "100% !important",
                height: "auto !important",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                "&::-webkit-media-controls-play-button": {
                  transform: "scale(0.6) !important"
                },
                "&::-webkit-media-controls-start-playback-button": {
                  transform: "scale(0.6) !important"
                }
              }
            },

            "& iframe": { 
              display: "block",
              mx: "auto",
              width: "100% !important",
              height: "auto !important",
              aspectRatio: "16 / 9", 
              maxWidth: "100%",
              borderRadius: "12px"
            },
            
            "& h1, & h2, & h3, & h4, & h5, & h6": { color: "#000", fontWeight: 600, mt: { xs: 3, md: 4 }, mb: { xs: 1, md: 2 } },
            "& ul, & ol": { pl: 3, mb: { xs: 2, md: 3 } },
            
            "& li": { 
              mb: 1,
              fontSize: { xs: "16px !important", md: "18px !important" },
              lineHeight: { xs: "26px !important", md: "30px !important" }
            },
            
            "& a": { color: "#7B53A1", textDecoration: "none" },
            "& a:hover": { textDecoration: "underline" }
          }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <Box sx={{ clear: "both" }} />
      </Box>

      <Box sx={{ display: { xs: "block", lg: "none" }, mt: { xs: 4, md: 6 } }}> 
        <RecentPost recentPosts={recentPosts} />
      </Box>
    </Container>
  );
}