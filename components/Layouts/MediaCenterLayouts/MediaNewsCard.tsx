"use client";

import { MediaNewsItem } from "@/utils/Types";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface MediaNewsCardProps {
  item: MediaNewsItem;
}

export default function MediaNewsCard({ item }: MediaNewsCardProps) {
  return (
    <Box>
      <Box
        component={Link}
        href={`/media/${item.slug}`}
        sx={{
          display: "block",
          width: "100%",
          height: "258px",
          borderRadius: "12px",
          bgcolor: "#D9D9D9",
          overflow: "hidden",
          mb: "35px",
          textDecoration: "none",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      <Typography
        component={Link}
        href={`/media/${item.slug}`}
        sx={{
          display: "block",
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "-0.02em",
          color: "#111827",
          textDecoration: "none",
          mb: "14px",
        }}
      >
        {item.title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: "9px" }}>
        <Typography sx={{ fontSize: "16px", color: "#474A55" }}>
          {item.time}
        </Typography>

        <Typography sx={{ fontSize: "16px", color: "#474A55" }}>•</Typography>

        <Typography sx={{ fontSize: "16px", color: "#474A55" }}>
          {item.readTime}
        </Typography>
      </Box>
    </Box>
  );
}