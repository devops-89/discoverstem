"use client";
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
        width: { xs: "100%", lg: "420px" },
        boxSizing: "border-box",
        bgcolor: "#FAF5FF",
        borderRadius: "18px",
        p: { xs: 3, lg: "36px" },
        flexShrink: 0
      }}>
      
      <Typography
        sx={{
          textAlign: { xs: "center", lg: "left" },
          fontFamily: "JUST Sans, Poppins, sans-serif",
          fontWeight: 600,
          fontSize: { xs: "20px", lg: "24px" },
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
            fontSize: { xs: "14px", lg: "16px" },
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
            fontWeight: 600,
            fontSize: { xs: "14px", lg: "20px" },
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