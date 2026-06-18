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
        width: { xs: "100%", md: "420px" },
        bgcolor: "#FAF5FF",
        borderRadius: "18px",
        p: { xs: 3, md: "36px" },
        flexShrink: 0,
      }}
    >
      <Typography
        sx={{
          fontFamily: "JUST Sans, Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "24px",
          lineHeight: "34px",
          color: "#1C2539",
          mb: 4,
        }}
      >
        Recent Post
      </Typography>

      {recentPosts.map((post) => (
        <Box key={post.id} sx={{ mb: "28px" }}>
          <Box
            component={Link}
            href={`/media/${post.slug}`}
            sx={{
              display: "block",
              height: "160px",
              borderRadius: "10px",
              overflow: "hidden",
              mb: "20px",
              bgcolor: "#D9D9D9",
              textDecoration: "none",
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={348}
              height={160}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          <Typography
            sx={{
              color: "#7B53A1",
              fontSize: "16px",
              lineHeight: "30px",
              mb: 1,
            }}
          >
            {post.publishedDate || "09 May, 2024"}
          </Typography>

          <Typography
            component={Link}
            href={`/media/${post.slug}`}
            sx={{
              display: "block",
              fontFamily: "JUST Sans, Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "-0.01em",
              color: "#111827",
              textDecoration: "none",
            }}
          >
            {post.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}