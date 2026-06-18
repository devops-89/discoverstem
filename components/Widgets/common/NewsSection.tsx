"use client";

import { MediaNewsItem } from "@/utils/Types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface NewsSectionProps {
  title: string;
  items: MediaNewsItem[];
  seeAllLink?: string;
}

export default function NewsSection({
  title,
  items,
  seeAllLink = "/media/more-news",
}: NewsSectionProps) {
  const visibleItems = items.slice(0, 4);

  return (
    <Box
      sx={{
        maxWidth: "1146px",
        mx: "auto",
        mb: { xs: 8, md: "100px" },
        px: { xs: 2, md: 0 },
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: "70px" }}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "46px",
            letterSpacing: "-0.02em",
            color: "#111827",
            mr: "18px",
          }}
        >
          {title}
        </Typography>

        <Box sx={{ height: "1px", bgcolor: "#000", flexGrow: 1 }} />

        {items.length > 4 && (
          <Box
            component={Link}
            href={seeAllLink}
            sx={{
              ml: "18px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: "#7B53A1",
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              See All
            </Typography>

            <KeyboardArrowRightIcon />
          </Box>
        )}
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
          },
          gap: "28px",
        }}
      >
        {visibleItems.map((item) => (
          <Box key={item.id}>
            <Box
              component={Link}
              href={`/media/${item.slug}`}
              target="_blank"
              sx={{
                display: "block",
                height: "258px",
                borderRadius: "12px",
                overflow: "hidden",
                mb: "35px",
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
                }}
              />
            </Box>

            <Typography
              component={Link}
              href={`/media/${item.slug}`}
              target="_blank"
              sx={{
                display: "block",
                fontFamily: "Work Sans",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "22px",
                color: "#111827",
                textDecoration: "none",
                mb: "14px",
              }}
            >
              {item.title}
            </Typography>

            <Box sx={{ display: "flex", gap: "9px" }}>
              <Typography color="#474A55">
                {item.publishedDate}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

    </Box>
  );
}