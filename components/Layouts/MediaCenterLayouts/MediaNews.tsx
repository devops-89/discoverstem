"use client";

import { MediaNewsItem } from "@/utils/Types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import MediaNewsCard from "./MediaNewsCard";

interface MediaNewsSectionProps {
  id: string;
  title: string;
  items: MediaNewsItem[];
}

export default function MediaNewsSection({
  id,
  title,
  items,
}: MediaNewsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? items : items.slice(0, 5);
  const featured = visibleItems[0];
  const cards = visibleItems.slice(1);

  if (!items.length) return null;

  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        maxWidth: "1159px",
        mx: "auto",
        mb: { xs: 8, md: "100px" },
        scrollMarginTop: "120px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: "75px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "46px",
            letterSpacing: "-0.02em",
            color: "#111827",
            mr: "18px",
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

        {!showAll && items.length > 5 && (
          <Box
            onClick={() => setShowAll(true)}
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
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              See All
            </Typography>

            <KeyboardArrowRightIcon sx={{ fontSize: 18 }} />
          </Box>
        )}
      </Box>

      {featured && (
        <Box
          component={Link}
          href={`/media/${featured.slug}`}
          sx={{
            display: "block",
            width: "100%",
            height: "385px",
            borderRadius: "12px",
            bgcolor: "#D9D9D9",
            overflow: "hidden",
            mb: "27px",
            textDecoration: "none",
          }}
        >
          <Box
            component="img"
            src={featured.image}
            alt={featured.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "23px",
        }}
      >
        {cards.map((item) => (
          <MediaNewsCard key={item.id} item={item} />
        ))}
      </Box>

      {showAll && items.length > 5 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            onClick={() => setShowAll(false)}
            sx={{
              height: "44px",
              px: "24px",
              borderRadius: "999px",
              bgcolor: "#7B53A1",
              color: "#FFFFFF",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#7B53A1",
              },
            }}
          >
            See Less
          </Button>
        </Box>
      )}
    </Box>
  );
}