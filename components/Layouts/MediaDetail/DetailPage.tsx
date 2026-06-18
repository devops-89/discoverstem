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
        pt: { xs: "70px", md: "120px" },
        pb: { xs: "70px", md: "100px" },
        px: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "44px",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "675px" } }}>
          <Typography
            sx={{
              color: "#7B53A1",
              fontSize: "16px",
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
              fontSize: { xs: "30px", md: "36px" },
              lineHeight: { xs: "40px", md: "46px" },
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
              Published 9 months ago on September 20, 2025
              <br />
              By Media Center | DiscoverSTEM
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "20px",
              lineHeight: "32px",
              letterSpacing: "-0.03em",
              color: "rgba(0,0,0,0.6)",
              mb: 6,
              whiteSpace: "pre-line",
            }}
          >
            {article.description}
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "260px", md: "380px" },
              borderRadius: "12px",
              overflow: "hidden",
              mb: 5,
            }}
          >
            {videoUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title={article.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "12px" }}
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

        </Box>

        <RecentPost recentPosts={recentPosts} />
      </Box>

      <Typography
        component="div"
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "20px",
          lineHeight: "32px",
          letterSpacing: "-0.03em",
          color: "rgba(0,0,0,0.6)",
          "& p": { mb: 3 },
          "& figure": { my: 4, mx: 0 },
          "& img": { maxWidth: "100%", height: "auto", borderRadius: "12px" },
          "& h1, & h2, & h3, & h4, & h5, & h6": { color: "#000", fontWeight: 600, mt: 4, mb: 2 },
          "& ul, & ol": { pl: 3, mb: 3 },
          "& li": { mb: 1 },
          "& a": { color: "#7B53A1", textDecoration: "none" },
          "& a:hover": { textDecoration: "underline" }
        }}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </Container>
  );
}