"use client";

import { MediaNewsItem } from "@/utils/Types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import MediaNewsCard from "./MediaNewsCard";
import FeaturedMediaCard from "./PressCard";
import { useRouter } from "next/navigation";

interface MediaNewsSectionProps {
  id: string;
  title: string;
  items: MediaNewsItem[];
  layoutType?: "featured" | "grid";
}

export default function MediaNewsSection({
  id,
  title,
  items,
  layoutType = "featured",
}: MediaNewsSectionProps) {
  const router = useRouter();
 
  const displayLimit = layoutType === "featured" ? 5 : 8;
  const visibleItems = items.slice(0, displayLimit);
  
  const featured = layoutType === "featured" ? visibleItems[0] : null;
  const cards = layoutType === "featured" ? visibleItems.slice(1) : visibleItems;

  if (!items.length) return null;

  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        maxWidth: "1159px",
        mx: "auto",
        mb: { xs: 4, lg: "100px" },
        scrollMarginTop: "120px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: { xs: 4, lg: "75px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "16px", md: "28px", lg: "36px" },
            lineHeight: { xs: "32px", md: "36px", lg: "46px" },
            letterSpacing: "-0.02em",
            color: "#111827",
            mr: "14px",
            flexShrink: 0,
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            height: "1px",
            bgcolor: "#000000",
            flexGrow: 1,
          }}
        />

        {items.length > 5 && (
          <Box
            onClick={() => router.push(`/media/category/${id}`)}
            sx={{
              ml: "18px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#7B53A1",
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: { xs: "14px", md: "15px", lg: "16px" },
                lineHeight: "24px",
              }}
            >
              View More
            </Typography>

            <KeyboardArrowRightIcon sx={{ fontSize: 18 }} />
          </Box>
        )}
      </Box>

      {featured && (
        <FeaturedMediaCard item={featured} />
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
          gap: "23px",
        }}
      >
        {cards.map((item) => (
          <MediaNewsCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}