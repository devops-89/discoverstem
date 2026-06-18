"use client";

import { MediaNewsItem } from "@/utils/Types";
import { Box, Container, Typography } from "@mui/material";
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
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                bgcolor: "#D9D9D9",
                flexShrink: 0,
              }}
            />

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
        </Box>

        <RecentPost recentPosts={recentPosts} />
      </Box>

      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "1022px" },
          height: { xs: "260px", md: "515px" },
          mx: "auto",
          mt: { xs: 6, md: "75px" },
          mb: { xs: 6, md: "60px" },
          overflow: "hidden",
        }}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Typography
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "20px",
          lineHeight: "32px",
          letterSpacing: "-0.03em",
          color: "rgba(0,0,0,0.6)",
          whiteSpace: "pre-line",
        }}
      >
        {article.content}
      </Typography>
    </Container>
  );
}