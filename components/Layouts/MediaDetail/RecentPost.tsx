"use client";import { FONT_WEIGHT, FONT_SIZE } from "@/utils/theme";

import { MediaNewsItem } from "@/utils/Types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface RecentPostProps {
  recentPosts: MediaNewsItem[];
}

export default function RecentPost({ recentPosts }: RecentPostProps) {
  return (
    <Box
      sx={{
        // 🔥 Shifted from 'md' to 'lg'. Now 1024px stays 100% wide exactly like 768px!
        width: { xs: "100%", lg: "420px" },
        boxSizing: "border-box",
        bgcolor: "#FAF5FF",
        borderRadius: "18px",
        p: { xs: 3, lg: "36px" },
        flexShrink: 0
      }}>
      
      <Typography
        sx={{
          fontFamily: "JUST Sans, Poppins, sans-serif",
          fontWeight: FONT_WEIGHT.semiBold,
          fontSize: { xs: FONT_SIZE.leadLarge, lg: FONT_SIZE.titleLarge },
          lineHeight: { xs: "28px", lg: "34px" },
          color: "#1C2539",
          mb: { xs: 3, lg: 4 }
        }}>
        
        Recent Post
      </Typography>

      {recentPosts.map((post) =>
      <Box key={post.id} sx={{ mb: { xs: "20px", lg: "28px" } }}>
          <Box
          component={Link}
          href={`/media/${post.slug}`}
          sx={{
            display: "block",
            // 🔥 sm: "300px" now applies to 1024px as well, preventing the 100% wide image from squashing!
            height: { xs: "200px", sm: "300px", lg: "160px" },
            borderRadius: "10px",
            overflow: "hidden",
            mb: { xs: "16px", lg: "20px" },
            bgcolor: "#D9D9D9",
            textDecoration: "none"
          }}>
          
            <Image
            src={post.image}
            alt={post.title}
            width={348}
            height={160}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }} />
          
          </Box>

          <Typography
          sx={{
            color: "#7B53A1",
            fontSize: { xs: FONT_SIZE.bodySmall, lg: FONT_SIZE.bodyLarge },
            lineHeight: { xs: "24px", lg: "30px" },
            mb: { xs: 0.5, lg: 1 }
          }}>
          
            {post.publishedDate || "09 May, 2024"}
          </Typography>

          <Typography
          component={Link}
          href={`/media/${post.slug}`}
          sx={{
            display: "block",
            fontFamily: "JUST Sans, Poppins, sans-serif",
            fontWeight: FONT_WEIGHT.semiBold,
            fontSize: { xs: FONT_SIZE.bodySmall, lg: FONT_SIZE.leadLarge },
            lineHeight: { xs: "26px", lg: "30px" },
            letterSpacing: "-0.01em",
            color: "#111827",
            textDecoration: "none"
          }}>
          
            {post.title}
          </Typography>
        </Box>
      )}
    </Box>);

}